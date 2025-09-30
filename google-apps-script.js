/**
 * Google Apps Script for CIRIV 2026 Registration Form
 * 
 * Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Save the project (name it "CIRIV 2026 Registration")
 * 5. Deploy as a Web App:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL and update it in all three inscription.astro files
 * 7. Make sure you have a Google Sheet named "CIRIV 2026 Registrations" with a sheet named "ciriv"
 */

function doPost(e) {
  try {
    // Log the request for debugging
    console.log('Received POST request:', e.postData.contents);
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the Google Sheet
    const sheet = getOrCreateSheet();
    
    // Prepare the row data matching the sheet columns
    const rowData = [
      new Date(), // Timestamp
      data.nom || '',
      data.prenom || '',
      data.civilite || '',
      data.email || '',
      data.telephone || '',
      data.etablissement || '',
      data.departement || '',
      data.ville || '',
      data.statut || '',
      data.typeParticipation || '',
      data.titreCommunication || '',
      data.auteurs || '',
      data.auteurCorrespondant || '',
      data.thematique || '',
      data.choixCommunication || '',
      data.resumeFileURL || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Log success
    console.log('Data successfully written to sheet:', rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Registration saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing registration:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        message: 'Failed to save registration'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  const SHEET_NAME = 'CIRIV 2026 Registrations';
  const TAB_NAME = 'ciriv';
  
  // Try to open existing spreadsheet
  let spreadsheet;
  const files = DriveApp.getFilesByName(SHEET_NAME);
  
  if (files.hasNext()) {
    spreadsheet = SpreadsheetApp.open(files.next());
  } else {
    // Create new spreadsheet
    spreadsheet = SpreadsheetApp.create(SHEET_NAME);
  }
  
  // Get or create the specific sheet
  let sheet = spreadsheet.getSheetByName(TAB_NAME);
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet(TAB_NAME);
    
    // Add headers
    const headers = [
      'Timestamp',
      'Nom',
      'Prénom', 
      'Civilité',
      'Email',
      'Téléphone',
      'Etablissement',
      'Département/Laboratoire',
      'Ville & Pays',
      'Statut',
      'Type de Participation',
      'Titre Communication',
      'Auteurs',
      'Auteur Correspondant',
      'Thématique',
      'Choix Communication',
      'Resume File URL'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format the header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    headerRange.setFontWeight('bold');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 120); // Nom
    sheet.setColumnWidth(3, 120); // Prénom
    sheet.setColumnWidth(4, 80);  // Civilité
    sheet.setColumnWidth(5, 200); // Email
    sheet.setColumnWidth(6, 120); // Téléphone
    sheet.setColumnWidth(7, 200); // Etablissement
    sheet.setColumnWidth(8, 150); // Département
    sheet.setColumnWidth(9, 150); // Ville & Pays
    sheet.setColumnWidth(10, 120); // Statut
    sheet.setColumnWidth(11, 150); // Type Participation
    sheet.setColumnWidth(12, 250); // Titre Communication
    sheet.setColumnWidth(13, 200); // Auteurs
    sheet.setColumnWidth(14, 200); // Auteur Correspondant
    sheet.setColumnWidth(15, 120); // Thématique
    sheet.setColumnWidth(16, 150); // Choix Communication
    sheet.setColumnWidth(17, 150); // Resume File URL
  }
  
  return sheet;
}

// Test function (optional - for testing purposes)
function testRegistration() {
  const testData = {
    nom: 'Test',
    prenom: 'User',
    civilite: 'M.',
    email: 'test@example.com',
    telephone: '+212 6XX-XXXXXX',
    etablissement: 'Test University',
    departement: 'Computer Science',
    ville: 'Casablanca, Morocco',
    statut: 'Étudiant',
    typeParticipation: 'Participant',
    titreCommunication: '',
    auteurs: '',
    auteurCorrespondant: '',
    thematique: '',
    choixCommunication: '',
    resumeFileURL: ''
  };
  
  const sheet = getOrCreateSheet();
  const rowData = [
    new Date(),
    testData.nom,
    testData.prenom,
    testData.civilite,
    testData.email,
    testData.telephone,
    testData.etablissement,
    testData.departement,
    testData.ville,
    testData.statut,
    testData.typeParticipation,
    testData.titreCommunication,
    testData.auteurs,
    testData.auteurCorrespondant,
    testData.thematique,
    testData.choixCommunication,
    testData.resumeFileURL
  ];
  
  sheet.appendRow(rowData);
  console.log('Test data added successfully');
}
