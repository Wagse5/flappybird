const fs = require('fs-extra');
const path = require('path');

function moveItem(source, destination) {
  try {
    fs.moveSync(source, destination, { overwrite: true });
    console.log(`Successfully moved ${source} to ${destination}`);
  } catch (error) {
    console.error(`Error moving ${source} to ${destination}: ${error.message}`);
  }
}

const outDir = path.join(__dirname, '..', 'out');
const publicDir = path.join(__dirname, '..', 'public');

console.log('outDir:', outDir);
console.log('publicDir:', publicDir);

fs.readdirSync(outDir).forEach(file => {
  console.log('Processing file:', file);
  if (file.endsWith('.html')) {
    moveItem(path.join(outDir, file), path.join(publicDir, file));
  }
});

console.log('Postbuild script completed.');
