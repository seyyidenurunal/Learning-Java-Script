var insan = {      //Nesneleri süslü parantezlerle tanımlıyoruz.
    isim : "Ayşe", //İstersek nesneye direk eleman atayabiliyoruz.
    soyIsim : "Çelik",
    yas : 14,
    yuru : function () {
        console.log("Yürünüyor...") //Fonksiyon tanımlayabiliriz.
    },
};

insan.kilo = 45; //İstersek sonradan eleman ekleyebiliyoruz.

console.log(insan.isim); //Tek bir elemanı görebiliriz.
console.log(insan); //Nesnenin bütün elemanlarını görebiliriz.
