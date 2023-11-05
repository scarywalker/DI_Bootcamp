const fs = require('fs');

fs.readFile('source.txt', 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading source.txt:', readErr);
    return;
  }

fs.writeFile('destination.txt', data, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to destination.txt:', writeErr);
    } else {
      console.log('File copied successfully: source.txt -> destination.txt');
    }
  });
});
