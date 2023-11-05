const { readFile, writeFile } = require('./fileManager.js');

readFile('HelloWorld.txt', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('Content of "Hello World.txt":', data);

    const contentToWrite = 'Writing to the file';
    writeFile('Bye World.txt', contentToWrite, (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
      } else {
        console.log('Successfully wrote to "Bye World.txt"');
      }
    });
  }
});
