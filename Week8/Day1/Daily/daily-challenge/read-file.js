const fs = require('fs');

const readFileData = () => {
  fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    console.log('File content:', data);
  });
};

module.exports = readFileData;