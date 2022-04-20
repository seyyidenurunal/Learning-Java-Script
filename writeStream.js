const fs = require('fs');
const file = "C:/Users/pc/Desktop/video.mp4";

const readStream = fs.createReadStream(file); //Dosya okuma
const writeStream = fs.createWriteStream('new.mp4'); //Yeni dosya oluşturma
let progress = 0;

fs.stat(file, (err,data) => {
    const total = data.size;
    console.log(total);

    readStream.on('data', (chunk) => {
      progress += chunk.length;
      console.log(Math.round((100 * progress )/ total) + "%")
  });

readStream.pipe(writeStream); // Okunan dosyanın aynısından bir tane oluşturulur.
writeStream.on('finish', () => {
    console.log('Yeni dosya oluşturuldu.');
});

});


