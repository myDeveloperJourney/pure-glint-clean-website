import { parsePhoneNumberFromString } from 'libphonenumber-js';

/**
 * Parse a phone number string into E.164 format (+1XXXXXXXXXX).
 * Assumes US country code if not specified.
 * Returns null if the number cannot be parsed.
 */
export function parseToE164(phone: string): string | null {
  try {
    const parsed = parsePhoneNumberFromString(phone, 'US');
    if (parsed && parsed.isValid()) {
      return parsed.format('E.164');
    }
    return null;
  } catch {
    return null;
  }
}
