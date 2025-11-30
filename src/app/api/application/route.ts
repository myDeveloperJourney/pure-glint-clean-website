import { NextRequest, NextResponse } from 'next/server';
import { appendApplicationToSheet } from '@/lib/google-sheets';
import { sendApplicationNotification } from '@/lib/email';
import { checkRateLimit } from '@/lib/rate-limit';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      hasDriversLicense,
      hasReliableVehicle,
      liveInFortWorth,
      availableMonFri,
      hasVehicleInsurance,
      hasConviction,
      honeypot 
    } = body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      console.log('Honeypot triggered - potential spam submission');
      // Return success to fool bots, but don't save data
      return NextResponse.json(
        { success: true, message: 'Thank you for your application!' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || 
        !hasDriversLicense || !hasReliableVehicle || !liveInFortWorth || 
        !availableMonFri || !hasVehicleInsurance || !hasConviction) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (firstName.length > 50 || lastName.length > 50) {
      return NextResponse.json(
        { error: 'Name fields must be less than 50 characters' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
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
      firstName: firstName.trim().slice(0, 50),
      lastName: lastName.trim().slice(0, 50),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: phone.trim().slice(0, 20),
      hasDriversLicense: hasDriversLicense.trim().toLowerCase(),
      hasReliableVehicle: hasReliableVehicle.trim().toLowerCase(),
      liveInFortWorth: liveInFortWorth.trim().toLowerCase(),
      availableMonFri: availableMonFri.trim().toLowerCase(),
      hasVehicleInsurance: hasVehicleInsurance.trim().toLowerCase(),
      hasConviction: hasConviction.trim().toLowerCase(),
    };

    // Check for disqualifying conditions
    // If any of these conditions are met, show success but don't save to Google Sheets or send email
    const isDisqualified = 
      sanitizedData.hasDriversLicense === 'no' ||
      sanitizedData.hasReliableVehicle === 'no' ||
      sanitizedData.hasVehicleInsurance === 'no' ||
      sanitizedData.hasConviction === 'yes';

    if (isDisqualified) {
      console.log('Application does not meet requirements - showing success but not saving');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your application! We have received your information and will review it carefully.',
        },
        { status: 200 }
      );
    }

    // Check environment variables
    if (!process.env.GOOGLE_APPLICATIONS_SHEET_ID) {
      console.error('GOOGLE_APPLICATIONS_SHEET_ID not configured');
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

    // Save to Google Sheets (only if qualified)
    try {
      await appendApplicationToSheet(sanitizedData);
      console.log('✅ Application saved to Google Sheets');
    } catch (error) {
      console.error('❌ Google Sheets error:', error);
      return NextResponse.json(
        { error: 'Failed to save application. Please try again or call us directly.' },
        { status: 500 }
      );
    }

    // Send email notification (only if qualified)
    try {
      console.log('📧 Attempting to send email notification...');
      const emailResult = await sendApplicationNotification(sanitizedData);
      console.log('✅ Email notification sent successfully:', emailResult);
    } catch (error) {
      console.error('❌ Email notification error:', error);
      // Don't fail the request if email fails - data is already saved
      console.warn('⚠️  WARNING: Application saved but email notification FAILED!');
      console.warn('⚠️  Check your RESEND_API_KEY and email configuration');
    }

    // Return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your application! We\'ll review it and contact you soon to discuss the next steps.',
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
    console.error('Application API error:', error);
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
