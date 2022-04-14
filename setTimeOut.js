setTimeout( function () { //Yapılan işlemin belirli bir süre sonra yazdırmayı sağlar.
  console.log("Merhaba")
}, 2000); // 2 sn sonra Merhaba yazmayı sağlar.

//Set time out'tan sonra bir fonksiyon daha oldupunu düşünelim.
//Bu durumda yukarıdaki fonksiyon 2 sn sonra çalışacağından, önce bu ikinci fonksiyon çalışır.
//2 sn dolduğunda da ilk fonksiyon çalışır.
//Bu gibi durumlarda fonksiyonları sıraya sokmak için callback kullanılır.

function sonra (){
  console.log("İkinci Fonksiyon ...")
}
sonra();

//Burada olduğu gibi
