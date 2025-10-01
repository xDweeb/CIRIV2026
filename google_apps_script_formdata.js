/*************************************************
 * CIRIV Registration → Google Sheets
 * - Accepts FormData payload from the Astro form.
 * - Saves the provided file link directly.
 *************************************************/

// The name of your sheet inside the Google Sheets document.
const SHEET_NAME = 'ciriv'; 

// The columns in your Google Sheet, in order.
// Make sure this matches your sheet exactly.
const COLUMNS = [
  'Timestamp',
  'Nom',
  'Prénom',
  'Civilité',
  'Email',
  'Téléphone',
  'Etablissement',
  'Département / Laboratoire',
  'Ville',
  'Pays',
  'Statut',
  'TypeParticipation',
  'TitreCommunication',
  'Auteurs',
  'AuteurCorrespondant',
  'Thématique',
  'ChoixCommunication',
  'RésuméFileLink' // Column for the file link
];

/**
 * A test function to verify the script is deployed and running.
 */
function doGet() {
  return ContentService.createTextOutput('CIRIV Registration API - OK');
}

/**
 * Handles the POST request from the registration form.
 * Parses FormData and appends a new row to the sheet.
 * @param {Object} e The event parameter from the POST request.
 */
function doPost(e) {
  try {
    // Lock the script to prevent simultaneous writes
    const lock = LockService.getScriptLock();
    lock.waitLock(30000); // Wait up to 30 seconds

    // Get the active spreadsheet and the specific sheet by name
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    // Make sure the headers are present in the sheet
    ensureHeaders_(sheet);

    // For FormData, the data is in e.parameter, not e.postData.contents
    const data = e.parameter || {};
    
    // Log received data for debugging
    console.log('Received FormData:', data);
    console.log('Event object keys:', Object.keys(e));

    // Create the new row array using data from the FormData payload.
    // Use || '' as a fallback for optional fields to avoid errors.
    const newRow = [
      new Date(),                                    // Timestamp
      data.nom || '',                               // Nom
      data.prenom || '',                            // Prénom
      data.civilite || '',                          // Civilité
      data.email || '',                             // Email
      data.telephone || '',                         // Téléphone
      data.etablissement || '',                     // Etablissement
      data.departement || '',                       // Département / Laboratoire
      data.ville || '',                             // Ville
      data.pays || '',                              // Pays
      data.statut || '',                            // Statut
      data.typeParticipation || '',                 // TypeParticipation
      data.titreCommunication || '',                // TitreCommunication
      data.auteurs || '',                           // Auteurs
      data.auteurCorrespondant || '',               // AuteurCorrespondant
      data.thematique || '',                        // Thématique
      data.choixCommunication || '',                // ChoixCommunication
      data.resumeFileLink || ''                     // RésuméFileLink
    ];

    // Log the row data for debugging
    console.log('Row to append:', newRow);

    // Append the new row to the sheet
    sheet.appendRow(newRow);

    // Release the lock
    lock.releaseLock();

    // Return a success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        ok: true, 
        message: 'Registration successful.',
        timestamp: new Date().toISOString(),
        receivedFields: Object.keys(data)
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Log any errors and return an error response
    console.error('Error in doPost:', err.toString());
    console.error('Error stack:', err.stack);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        ok: false, 
        error: err.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Helper function to ensure the sheet has the correct headers in the first row.
 * @param {Sheet} sheet The Google Sheet to check.
 */
function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    console.log('Headers added to sheet');
  }
}

/**
 * Test function to verify sheet structure
 */
function testSheetStructure() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    console.log('Sheet "' + SHEET_NAME + '" not found!');
    return;
  }
  
  ensureHeaders_(sheet);
  console.log('Sheet structure verified. Headers:', COLUMNS);
}
