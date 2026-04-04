// OpenPhone (Quo) SMS Integration
// Required env vars: QUO_API_KEY, QUO_PHONE_NUMBER_ID, QUO_DEFAULT_MESSAGE
// Copy these from the pure-glint-landing Vercel project if not already set.

/**
 * Send an SMS via the OpenPhone (Quo) API.
 * Retries up to 3 times with exponential backoff.
 * Logs credit-related errors prominently.
 */

interface SendSmsOptions {
  to: string;        // E.164 format phone number
  firstName: string; // For personalizing the message
}

function buildMessage(firstName: string): string {
  const template = process.env.QUO_DEFAULT_MESSAGE ||
    "Hi {{name}}! Thanks for requesting your $50 off with Pure Glint Clean! 🧹✨ We'd love to learn more about your cleaning needs. What type of service are you looking for, and what's a good time to chat?";

  const name = firstName.trim() || 'there';
  return template.replace(/\{\{name\}\}/g, name);
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sendSms({ to, firstName }: SendSmsOptions): Promise<void> {
  const apiKey = process.env.QUO_API_KEY;
  const phoneNumberId = process.env.QUO_PHONE_NUMBER_ID;

  if (!apiKey) {
    throw new Error('QUO_API_KEY environment variable is not set');
  }
  if (!phoneNumberId) {
    throw new Error('QUO_PHONE_NUMBER_ID environment variable is not set');
  }

  const content = buildMessage(firstName);
  const maxRetries = 3;
  const delays = [1000, 2000, 4000]; // Exponential backoff

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch('https://api.openphone.com/v1/messages', {
        method: 'POST',
        headers: {
          // OpenPhone uses the API key directly — NOT as a Bearer token
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          from: phoneNumberId,
          to: [to], // MUST be an array — a bare string returns 400
        }),
      });

      if (res.ok) {
        console.log(`✅ SMS sent successfully to ${to} (attempt ${attempt})`);
        return;
      }

      const errorBody = await res.text();

      // Flag credit-related errors prominently
      if (
        res.status === 402 ||
        errorBody.toLowerCase().includes('credit') ||
        errorBody.toLowerCase().includes('balance') ||
        errorBody.toLowerCase().includes('insufficient')
      ) {
        console.error('🚨🚨🚨 OPENPHONE CREDIT ERROR — CHECK YOUR ACCOUNT BALANCE 🚨🚨🚨');
        console.error(`Status: ${res.status}, Body: ${errorBody}`);
        throw new Error(`OpenPhone credit error: ${errorBody}`);
      }

      console.warn(`⚠️ SMS attempt ${attempt}/${maxRetries} failed: ${res.status} ${errorBody}`);

      if (attempt < maxRetries) {
        await sleep(delays[attempt - 1]);
      }
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      console.warn(`⚠️ SMS attempt ${attempt}/${maxRetries} error:`, error);
      await sleep(delays[attempt - 1]);
    }
  }

  throw new Error(`SMS failed after ${maxRetries} attempts`);
}
