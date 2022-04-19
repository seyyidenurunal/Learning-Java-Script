const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('Selamla', (isim) => { //Olayı tanımlıyoruz vr olay gerçekleştiğinde çalışacak fonksiyonu yazıyoruz.
    console.log(`Merhaba Node :) ${isim}`) //on yerine once kullanmış olsaydık o da yalnızca bir kere çalıştıracaktı.
});

const isim = "Ayşe"; //değişken ekleyebiliriz.
eventEmitter.emit('Selamla', isim); //Burada da olayı tetikliyoruz.

setTimeout(() => {
    eventEmitter.emit('Selamla', isim); //settimeout ile tetikliyoruz.
}, 2000);