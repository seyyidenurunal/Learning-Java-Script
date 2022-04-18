var x = "foo"; //Farklı yerlerde aynı isimli iki değişken tanımlarsak,
var x = "bar";// İlk değişken yerine ikinci değşken değeri kabul edilir.
              //BU da sorunlar yol açabilir.

console.log(x);

//let ile bu işlemi yaptığımızda ise hata alırız.
let z = "test"; //Bunun dışında değişkenin değerini değiştirebiliriz.
z = "test 2 ";

console.log(z);

//Var ilr let arasındaki en temel fark budur.


//Eğer sonradan değerini değiştireceğiniz bir değişken tanımlıyorsan : let
//Eğer değerini sonradan değiştirmeyeceksen : const ile tanımla
/*
const pi = 3; //Değiştirmeye kalktığımızda hata alırız.
pi = 3.14;
console.log(pi);
*/
