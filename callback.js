function soyle(text,callback){  //Fonksiyonları istenilen sırayla çalıştırabilmemizi sağlar.
  console.log(text);
  callback();
}

soyle("Merhaba" , function () {
  console.log("Çay Demleniyor...")
})



//İstersek bunu farklı bir şekkilde de yazabiliriz.

function soyle(text,callback){
  callback();
}

function cayDemle () {
  console.log("Çay Demleniyor...")
}

soyle("Merhaba" , cayDemle) //Yukarıda callback'i yazdığımız kısma cayDemle fonksiyonunu yazıyoruz,
                            //bu da bu fonsiyonun soyle fonksiyonndan sonra çalışmasını sağlıyor.
