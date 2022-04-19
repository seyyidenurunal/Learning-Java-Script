//Basit bir routing yapısı
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
    if (request.method === "GET"){
      if (request.url === "/" )
          response.write("İndex Sayfasındasınız.");
      else if (request.url === "/iletisim")
          response.write("İletişim sayfasındasınız.");
      else
          response.write("Bu sayfa bulunamadı...");
    }
    response.end();

});

server.listen(3000);
