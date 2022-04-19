const http = require('http');

const server = http.createServer((request, response) => { //İstek ve cevapların detaylarını barındıran değişkenler.
    console.log("Bir istekte bulunuldu.")
    response.writeHead(200, {'content-type' : 'text/html; charset=utf-8'}); //Türkçe karakter için
    response.write("Merhaba Dünya");
    response.end()
});

server.listen(3000);

//Her eklemede komut isteminden dosyayı çalıştırmamız gerekiyor.
