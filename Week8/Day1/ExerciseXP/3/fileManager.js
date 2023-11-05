const fs = require('fs');

function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

module.exports = {
  readFile,
  writeFile
};
