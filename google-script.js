/**
 * Google Apps Script for Portfolio Contact Form
 * 
 * This script handles form submissions from your portfolio website,
 * saves them to a Google Sheet, and sends email notifications.
 * 
 * Setup Instructions:
 * 1. Copy this code to Google Apps Script (script.google.com)
 * 2. Deploy as web app with:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 3. Use the deployment URL in your contact form
 */

function doGet(e) {
  try {
    // Handle case when e is undefined (manual execution)
    if (!e || !e.parameter) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success', message: 'Contact form API is working - no parameters provided' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get parameters from URL
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const subject = e.parameter.subject || '';
    const message = e.parameter.message || '';
    
    // If no form data, return API status
    if (!name && !email && !subject && !message) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success', message: 'Contact form API is working' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Process form submission
    return processFormSubmission(name, email, subject, message);
    
  } catch (error) {
    console.error('Error in doGet:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Submission failed', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    // Handle case when e is undefined (manual execution)
    if (!e || !e.parameter) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No form data provided' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get form data from POST body
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const subject = e.parameter.subject || '';
    const message = e.parameter.message || '';
    
    return processFormSubmission(name, email, subject, message);
    
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Submission failed', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function processFormSubmission(name, email, subject, message) {
  try {
    // Create or get spreadsheet
    let spreadsheet;
    try {
      // Try to get existing spreadsheet by name
      const files = DriveApp.getFilesByName('Portfolio Contact Form Responses');
      if (files.hasNext()) {
        spreadsheet = SpreadsheetApp.open(files.next());
      } else {
        throw new Error('Spreadsheet not found');
      }
    } catch (error) {
      // Create new spreadsheet if it doesn't exist
      spreadsheet = SpreadsheetApp.create('Portfolio Contact Form Responses');
      const sheet = spreadsheet.getActiveSheet();
      sheet.getRange(1, 1, 1, 5).setValues([['Timestamp', 'Name', 'Email', 'Subject', 'Message']]);
      console.log('Created new spreadsheet: ' + spreadsheet.getUrl());
    }
    
    const sheet = spreadsheet.getActiveSheet();
    
    // Add data to sheet
    const timestamp = new Date();
    sheet.appendRow([timestamp, name, email, subject, message]);
    
    // Send email notification
    try {
      const emailSubject = `New Contact Form Submission: ${subject}`;
      const emailBody = `
        New message from your portfolio contact form:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Timestamp: ${timestamp}
      `;
      
      MailApp.sendEmail({
        to: 'preetam.a.maske@gmail.com',
        subject: emailSubject,
        body: emailBody
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Submission failed' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: Test function to verify the script works
 * Run this function in the Apps Script editor to test
 */
function testFormSubmission() {
  const testData = processFormSubmission(
    'Test User',
    'test@example.com',
    'Test Subject',
    'This is a test message from the Google Apps Script.'
  );
  
  console.log('Test result:', testData.getContent());
}