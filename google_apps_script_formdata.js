/*************************************************
 * CIRIV Registration → Google Sheets
 * - Accepts FormData from Astro registration form
 * - Handles resumeFileLink as a simple text field
 * - NO file upload processing
 *************************************************/

// The name of your sheet inside the Google Sheets document
const SHEET_NAME = 'ciriv'; 

// The columns in your Google Sheet, in order
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
  'RésuméFileLink'
];

/**
 * Test endpoint
 */
function doGet() {
  return ContentService
    .createTextOutput('CIRIV Registration API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Handles POST requests from the registration form
 * @param {Object} e - The event object from the POST request
 */
function doPost(e) {
  try {
    console.log('=== CIRIV Registration Request ===');
    console.log('Request method:', e?.postData?.type || 'Unknown');
    
    // Lock to prevent concurrent writes
    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) {
      throw new Error('Could not obtain lock within 10 seconds');
    }

    try {
      // Get the spreadsheet and sheet
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const sheet = ss.getSheetByName(SHEET_NAME);
      
      if (!sheet) {
        throw new Error(`Sheet "${SHEET_NAME}" not found`);
      }

      // Ensure headers exist
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(COLUMNS);
        console.log('Headers added to sheet');
      }

      // Get form data from FormData submission
      // For FormData, parameters are in e.parameter
      const formData = e.parameter || {};
      
      console.log('Received form data:', Object.keys(formData));
      console.log('resumeFileLink value:', formData.resumeFileLink || 'Not provided');

      // Build the row data array matching COLUMNS order
      const rowData = [
        new Date(),                              // Timestamp
        formData.nom || '',                      // Nom
        formData.prenom || '',                   // Prénom  
        formData.civilite || '',                 // Civilité
        formData.email || '',                    // Email
        formData.telephone || '',                // Téléphone
        formData.etablissement || '',            // Etablissement
        formData.departement || '',              // Département / Laboratoire
        formData.ville || '',                    // Ville
        formData.pays || '',                     // Pays
        formData.statut || '',                   // Statut
        formData.typeParticipation || '',        // TypeParticipation
        formData.titreCommunication || '',       // TitreCommunication
        formData.auteurs || '',                  // Auteurs
        formData.auteurCorrespondant || '',      // AuteurCorrespondant
        formData.thematique || '',               // Thématique
        formData.choixCommunication || '',       // ChoixCommunication
        formData.resumeFileLink || ''            // RésuméFileLink (just a URL string)
      ];

      console.log('Row data to append:', rowData);

      // Append the row to the sheet
      sheet.appendRow(rowData);
      
      console.log('✅ Registration saved successfully');

      // Return success response
      return ContentService
        .createTextOutput(JSON.stringify({
          ok: true,
          message: 'Registration saved successfully',
          timestamp: new Date().toISOString(),
          receivedFields: Object.keys(formData).length
        }))
        .setMimeType(ContentService.MimeType.JSON);

    } finally {
      lock.releaseLock();
    }

  } catch (error) {
    console.error('❌ Error in doPost:', error.toString());
    console.error('Error stack:', error.stack);

    return ContentService
      .createTextOutput(JSON.stringify({
        ok: false,
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
