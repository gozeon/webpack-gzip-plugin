const path = require('path');
const fs = require('fs');
const zlip = require('zlib');


function GzipPlugin(options) { }

GzipPlugin.prototype.apply = function (compiler) {
  const output = compiler.options.output.path;

  compiler.plugin('done', function () {
    loop(output);
  })
}

async function loop(targetPath) {
  if (verifyDirectory(targetPath)) {
    const directory = fs.readdirSync(targetPath);
    directory.forEach(item => {
      const deepPath = path.join(targetPath, item);
      if (verifyDirectory(deepPath)) {
        loop(deepPath);
      } else {
        gzip(path.join(targetPath, item));
      }
    });
  } else {
    throw new Error('Please enter the correct file path!');
  }
}

function verifyDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function gzip(path) {
  if (path.slice(-3) === '.gz') {
    return;
  }
  const input = fs.createReadStream(path);
  const output = fs.createWriteStream(path + '.gz');
  input.pipe(zlip.createGzip()).pipe(output);
}

function success(msg) {
  console.log('\x1b[36m%s\x1b[0m', msg);
}

function warning(msg) {
  console.log('\x1b[31m', msg);
}

module.exports = GzipPlugin;
