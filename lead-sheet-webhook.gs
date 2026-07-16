/* Shiv Ganga Travels — Lead Tracking webhook
   Paste into Extensions → Apps Script of your Google Sheet, then Deploy.
   Full steps in LEAD-TRACKING-SETUP.md */

const HEADERS = ['Date', 'Time', 'Type', 'Page', 'Package', 'Number', 'Name', 'Details'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // Create header row once, styled
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold').setBackground('#132A54').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }

  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) {}

  sheet.appendRow([
    d.date || '', d.time || '', d.type || '', d.page || '',
    d.package || '', d.number || '', d.name || '', d.detail || '',
  ]);

  return ContentService.createTextOutput('ok');
}
