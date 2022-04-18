const arr = [1,2,3];
const arr2 = [...arr,4,5,6] //yalnızce array'in adını yazarsak dizinin içinde ayrı bir dizi olarak ekler.

console.log(arr2); //Bu şekilde ylnızca içindeki elemanları aldı.

console.log(...arr); //Array'in bütün elemanlarını ... ile yazdırabiliyoruz.

const dizi = [1,2,3,4,5];

const [x, ...rest] = dizi; //ilk elemandana sonrasını rest operatörü içine almış oldu.
console.log(rest); //Bunu burada görebiliriz.