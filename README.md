# Unique ID Generator for Google Sheets

This Google Apps Script provides a straightforward and efficient way to generate unique IDs for items listed in a Google Sheets document, particularly useful for event planning, inventory management, or any scenario requiring unique identifiers.

## Features

- **Current Document Restriction**: Ensures the script operates only within the current Google Sheets document for enhanced security and performance.
- **Custom ID Length**: Allows specifying the desired length of the unique IDs generated.
- **Character Set Customization**: Utilizes a predefined set of alphanumeric characters for ID generation, which can be customized as needed.
- **Sheet Specific Operation**: Targets a specific sheet within the Google Sheets document for ID generation, preventing unintended alterations to other data.
- **Empty Cell Check**: Generates and assigns unique IDs only to rows with empty first cells, ensuring existing data remains intact.
- **Custom Menu Integration**: Adds a custom menu item to Google Sheets, enabling easy execution of the ID generation process directly from the spreadsheet UI.

## How It Works

1. **Generate Unique ID**: The `generateUniqueID` function creates a random string of characters of a specified length to serve as the unique ID.
2. **Update Sheet with IDs**: The `updateSheetWithIDs` function iterates through each row of the specified sheet, checking for empty cells in the first column and filling them with unique IDs.
3. **Custom Menu for Easy Access**: The `onOpen` function adds a custom menu item to your Google Sheets, titled 'ID Operations', providing a simple way to execute the ID generation script.

## Usage

1. Open your Google Sheets document.
2. Navigate to `Extensions > Apps Script`.
3. Copy and paste the provided script into the Apps Script editor.
4. Save and close the editor.
5. Refresh your Google Sheets document to see the 'ID Operations' custom menu.
6. Click on 'ID Operations' and select 'Generate IDs' to run the script.

## Customization

- **ID Length**: Modify the `idLength` variable in the `generateUniqueID` function to change the length of the generated IDs.
- **Character Set**: Adjust the `characters` string in the `generateUniqueID` function to alter the pool of characters used for ID generation.
- **Target Sheet**: Change `"Sheet1"` in the `updateSheetWithIDs` function to the name of your target sheet.

## Contributions

Feel free to fork this repository, make changes, and submit pull requests. If you encounter any issues or have suggestions for improvements, please submit them as issues in this repository.

## License

This script is provided 'as is', without warranty of any kind. You are free to use and modify it for personal or commercial purposes at your own risk.
