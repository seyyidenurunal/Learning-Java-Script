//Fonksiyon tanımlama
function test () {
  console.log("Test")
}

test(); //Fonksiyonu harekete geçirme

function test2(){
  return "test 2"; // Geri değer döndürmeyi sağlar.
}
console.log(test2()); //Bunu harekete geçirmek için de console.log'a ihtiyaç duyarız.

var fonksiyon = function() {
  console.log("test 3")
}
fonksiyon();

//Yazdığımız sayıyı ve iki eklenmiş halini döndüren bir fonksiyon tanımlayalım:
function ikiEkle(sayi){ //İstesrsek sayi =  , diyerek sayıya burada da değer verebiliriz.
  console.log("Asıl sayı : " + sayi);
  return sayi + 2;
}

console.log("Eklenen sayı : " + ikiEkle(5));

