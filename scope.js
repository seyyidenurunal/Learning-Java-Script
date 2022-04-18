console.log("----AYNI İSİMLİ YENİ DEĞİKEN----")
var x = "Selam";

function test () { //Bu fonksiyonun içi ayrı bir scope'tur.
    var x = "Selam Nasılsın"; 
    console.log(x); //Ve burada yazdığımız x değişkeni burada tanımlanan x değişkenidir.
} 

test();
console.log(x); //Burada yazdığımız x değişkeni de ilk başta tanımlanan x değişkeni olur.
                //Çünkü bu scope fonksiyon scope'undan farklı.

console.log("----DEĞİŞTİRİLEN DEĞİŞKEN----")

var y = "Naber"; //Bir y değişkeni tanımlayalım

function test1 () { 
    y = "Naber Nasılsın"; //Eğer yeni bir y değişkeni tanımlamayıp, var olan değişkeni değiştirirsek,
    console.log(y); //Bu scope'ta yazan değiştirilen ifade olur.
} 

test1();
console.log(y); //Bu scope'ta yazan da değiştirilen ifade olur.