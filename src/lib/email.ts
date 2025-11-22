import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingNotification(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  const recipientEmail = process.env.NOTIFICATION_EMAIL;

  if (!recipientEmail) {
    console.error('❌ NOTIFICATION_EMAIL environment variable is not set');
    throw new Error('NOTIFICATION_EMAIL environment variable is not set');
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY environment variable is not set');
    throw new Error('RESEND_API_KEY environment variable is not set');
  }

  console.log(`📧 Sending email to: ${recipientEmail}`);
  console.log(`📋 Customer: ${data.firstName} ${data.lastName}`);

  try {
    const result = await resend.emails.send({
      from: 'Pure Glint Clean <onboarding@resend.dev>', // Use Resend's test domain
      to: recipientEmail,
      subject: '🎉 New Booking from Pure Glint Clean Website',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .badge {
                display: inline-block;
                background: #fbbf24;
                color: #1f2937;
                padding: 6px 12px;
                border-radius: 20px;
                font-weight: 600;
                font-size: 14px;
                margin-top: 10px;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                background: white;
                padding: 15px;
                margin-bottom: 12px;
                border-radius: 6px;
                border-left: 4px solid #2563eb;
              }
              .label {
                font-weight: 600;
                color: #6b7280;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 4px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
              .cta-button {
                display: inline-block;
                background: #2563eb;
                color: white;
                padding: 12px 24px;
                border-radius: 6px;
                text-decoration: none;
                font-weight: 600;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🎉 New Booking Received!</h1>
              <span class="badge">$50 Voucher Claimed</span>
            </div>
            
            <div class="content">
              <p style="font-size: 16px; color: #1f2937; margin-bottom: 20px;">
                A new customer has submitted a booking request through your website.
              </p>

              <div class="field">
                <div class="label">Customer Name</div>
                <div class="value">${data.firstName} ${data.lastName}</div>
              </div>

              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">
                  <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">
                    ${data.email}
                  </a>
                </div>
              </div>

              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">
                  <a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">
                    ${data.phone}
                  </a>
                </div>
              </div>

              <div class="field">
                <div class="label">Submission Time</div>
                <div class="value">${new Date().toLocaleString('en-US', {
                  timeZone: 'America/Chicago',
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}</div>
              </div>

              <div style="text-align: center; margin-top: 30px;">
                <a href="tel:${data.phone}" class="cta-button">
                  📞 Call Customer Now
                </a>
              </div>

              <div class="footer">
                <p>This booking has been automatically saved to your Google Sheet.</p>
                <p style="margin-top: 10px;">
                  <strong>Pure Glint Clean</strong><br>
                  Professional Home Cleaning Services<br>
                  North Fort Worth Area
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('✅ Resend API response:', result);
    return result;
  } catch (error: any) {
    console.error('❌ Error sending email notification:', error);
    console.error('Error details:', {
      message: error.message,
      statusCode: error.statusCode,
      name: error.name,
    });
    
    // Provide more helpful error messages
    if (error.statusCode === 403 || error.statusCode === 401) {
      throw new Error('Invalid Resend API key. Check your RESEND_API_KEY in .env.local');
    } else if (error.message?.includes('Invalid recipient')) {
      throw new Error(`Invalid recipient email: ${recipientEmail}`);
    }
    
    throw new Error(`Failed to send email notification: ${error.message}`);
  }
}
