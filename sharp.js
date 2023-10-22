const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // Menggunakan Sharp untuk mengubah gambar JPG
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        destination,
        `${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        destination,
        `${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));

    // Menggunakan Sharp untuk mengubah gambar PNG
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        destination,
        `${image.split('.').slice(0, -1).join('.')}-large.png`,
      ));

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        destination,
        `${image.split('.').slice(0, -1).join('.')}-small.png`,
      ));
  });
