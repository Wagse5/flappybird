const fs = require('fs-extra');
const path = require('path');

const moveFile = (source, destination) => {
  fs.moveSync(source, destination, { overwrite: true });
  console.log(Moved  to );
};

const outDir = path.join(__dirname, '..', 'out');
const publicDir = path.join(__dirname, '..', 'public');

fs.readdirSync(outDir).forEach(file => {
  if (file.endsWith('.html')) {
    moveFile(path.join(outDir, file), path.join(publicDir, file));
  }
});

moveFile(path.join(outDir, '_next'), path.join(publicDir, '_next'));
