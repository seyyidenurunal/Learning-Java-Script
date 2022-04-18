//Diziler köşeli parantezlerle tanımlanır.
 
var dizi = ["Ayşe", 25, false, 54.4];

console.log(dizi[0]); //Dizinin 0'ıncı elemanını gösterir.
console.log(dizi.length); //Dizinin uzunluğunu, kaç tane eleman olduğunu gösterir.

for(var i = 0; i < dizi.length; i++){ //Tüm elemanları yazmak istersek de bu döngüyü kullanabiliriz.
    console.log(dizi[i]);
};

dizi.forEach(function (k){ //Bu şekilde de dizinin tüm elemanlarını görebiliriz.
    console.log(k);        //forEach for döngüsündeki kod kalabalığından kurtarır.
});