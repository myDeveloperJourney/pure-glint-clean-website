import { google } from 'googleapis';

// Initialize Google Sheets client
export async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    throw new Error('Failed to initialize Google Sheets client');
  }
}

// Append a row to the spreadsheet
export async function appendToSheet(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID environment variable is not set');
  }

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const values = [
    [
      timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      'Yes', // Voucher Claimed
    ],
  ];

  try {
    // First, try to get sheet metadata to find the first sheet name
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    // Get the first sheet's title (name)
    const firstSheetName = metadata.data.sheets?.[0]?.properties?.title || 'Sheet1';
    
    console.log(`Using sheet name: ${firstSheetName}`);

    // Append to the sheet using the correct sheet name
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${firstSheetName}!A:F`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    console.log('Successfully appended row to Google Sheet');
    return response.data;
  } catch (error: unknown) {
    console.error('Error appending to Google Sheet:', error);
    
    // More detailed error logging
    const errorObj = error as { response?: { status?: number; data?: unknown }; code?: number; message?: string };
    if (errorObj.response) {
      console.error('Response status:', errorObj.response.status);
      console.error('Response data:', errorObj.response.data);
    }
    
    // Provide more helpful error messages
    if (errorObj.code === 403) {
      throw new Error('Permission denied. Make sure the service account has Editor access to the sheet.');
    } else if (errorObj.code === 404) {
      throw new Error('Spreadsheet not found. Check your GOOGLE_SHEET_ID.');
    } else if (errorObj.message?.includes('not supported')) {
      throw new Error('Sheet format not supported. Make sure it\'s a Google Sheet (not Excel).');
    }
    
    throw new Error('Failed to save booking to Google Sheets');
  }
}
