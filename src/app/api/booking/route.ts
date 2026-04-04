import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/google-sheets';
import { sendBookingNotification } from '@/lib/email';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendSms } from '@/lib/sms';
import { parseToE164 } from '@/lib/phone';

// Phone validation regex (flexible format)
const PHONE_REGEX = /^[\d\s\-\(\)\.+]{10,}$/;

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    
    if (!rateLimit.allowed) {
      const resetDate = new Date(rateLimit.resetTime);
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          resetTime: resetDate.toISOString(),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': process.env.RATE_LIMIT_MAX_REQUESTS || '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': resetDate.toISOString(),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, phone, serviceType, honeypot, consent } = body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      console.log('Honeypot triggered - potential spam submission');
      // Return success to fool bots, but don't save data
      return NextResponse.json(
        { success: true, message: 'Thank you for your quote request!' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !phone || !serviceType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate consent
    if (!consent) {
      return NextResponse.json(
        { error: 'You must agree to receive communications to submit this form.' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      phone: phone.trim().slice(0, 20),
      serviceType: serviceType.trim().slice(0, 50),
    };

    // Check environment variables
    if (!process.env.GOOGLE_SHEET_ID) {
      console.error('GOOGLE_SHEET_ID not configured');
      return NextResponse.json(
        { error: 'Service configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Service configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Save to Google Sheets
    try {
      await appendToSheet({
        ...sanitizedData,
        email: '',
        source: 'Website',
      });
      console.log('✅ Booking saved to Google Sheets');
    } catch (error) {
      console.error('❌ Google Sheets error:', error);
      return NextResponse.json(
        { error: 'Failed to submit your request. Please try again or call us directly.' },
        { status: 500 }
      );
    }

    // Send auto-text SMS via OpenPhone
    let smsMessageText: string | null = null;
    let smsSuccess = false;
    try {
      const e164Phone = parseToE164(sanitizedData.phone);
      if (e164Phone) {
        console.log(`📱 Sending auto-text to ${e164Phone}...`);
        smsMessageText = await sendSms({
          to: e164Phone,
          name: sanitizedData.name,
          serviceType: sanitizedData.serviceType,
        });
        smsSuccess = true;
        console.log('✅ Auto-text SMS sent successfully');
      } else {
        console.warn(`⚠️ Could not parse phone number to E.164: "${sanitizedData.phone}" — skipping SMS`);
      }
    } catch (error) {
      // SMS failure should NOT block the booking — data is already saved
      console.error('❌ Auto-text SMS error:', error);
      console.warn('⚠️ WARNING: Booking saved but auto-text SMS FAILED!');
    }

    // Send email notification
    try {
      console.log('📧 Attempting to send email notification...');
      const emailResult = await sendBookingNotification({
        ...sanitizedData,
        smsMessageText,
        smsSuccess,
      });
      console.log('✅ Email notification sent successfully:', emailResult);
    } catch (error) {
      console.error('❌ Email notification error:', error);
      // Don't fail the request if email fails - data is already saved
      // But log it prominently so you know emails aren't working
      console.warn('⚠️  WARNING: Booking saved but email notification FAILED!');
      console.warn('⚠️  Check your RESEND_API_KEY and email configuration');
    }

    // Return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll contact you shortly about your quote and $50 discount',
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': process.env.RATE_LIMIT_MAX_REQUESTS || '5',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString(),
        },
      }
    );

  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
