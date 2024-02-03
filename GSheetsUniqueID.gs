// Restrict the script to operate only on the current document
// @OnlyCurrentDoc

function generateUniqueID() {
  // Define the desired ID length
  const idLength = 10;

  // Characters that can be used in the ID
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let uniqueID = "";

  // Ensure the ID length is a number
  if (!Number.isInteger(idLength)) {
    throw new Error("ID length must be an integer.");
  }

  // Construct the ID using random characters from the allowed set
  for (let i = 0; i < idLength; i++) {
    uniqueID += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return uniqueID;
}

function updateSheetWithIDs() {
  // Access the active sheet and specify which tab to manipulate
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  // Retrieve data from the sheet in a 2D array format
  const sheetData = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();

  // Iterate over each row in the sheet
  sheetData.forEach((row, index) => {
    // Check if the first cell of the row is empty and assign a new ID
    if (!row[0]) {
      const newID = generateUniqueID();

      // Update the sheet with the new ID, adjusting for zero-based index
      sheet.getRange(index + 1, 1).setValue(newID);
    }
  });
}

// Add a custom menu to the sheet for easy script execution
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('ID Operations')
    .addItem('Generate IDs', 'updateSheetWithIDs')
    .addToUi();
}
