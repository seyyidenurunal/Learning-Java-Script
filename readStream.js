const fs = require('fs');
const file = "C:/Users/pc/Desktop/video.mp4";

const readStream = fs.createReadStream(file);
let progress = 0;

fs.stat(file, (err,data) => {
    const total = data.size;
    console.log(total);

    readStream.on('data', (chunk) => {
      progress += chunk.length;
      console.log(Math.round((100 * progress )/ total) + "%")
  });

  readStream.on('end', () => {
    console.log("Veri okuması bitti.")
   // console.log(progress);
  });

});


