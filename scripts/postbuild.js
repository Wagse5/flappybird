const fs = require('fs-extra');
const path = require('path');

// Function to move a file or directory
function moveItem(source, destination) {
  try {
    fs.moveSync(source, destination, { overwrite: true });
    console.log(Successfully moved  to );
  } catch (error) {
    console.error(Error moving  to : );
  }
}

// Paths
const outDir = path.join(__dirname, '..', 'out');
const publicDir = path.join(__dirname, '..', 'public');

// Move HTML files
fs.readdirSync(outDir).forEach(file => {
  if (file.endsWith('.html')) {
    moveItem(path.join(outDir, file), path.join(publicDir, file));
  }
});

// Move _next directory
moveItem(path.join(outDir, '_next'), path.join(publicDir, '_next'));

console.log('Postbuild script completed.');
