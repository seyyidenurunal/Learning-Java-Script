const degerler = {
    a : 1,
    b : 2,
    c : 3,
};

//Değerleri farklı bir değişkene atamak istediğimizde ES6'dan önce şöyle yapıyorduk.

const x = degerler.a;
const y = degerler.b;

console.log (x,y);

//Şu şekide yapabiliriz.

const {a,b,d = 4} = degerler ; //burada farklı bir değer de tanımlayabiliriz.
console.log(a,b,d);

//Aynı işlemi dizilerde de yapabiliriz.

const sayı = [1,2,3]

const [o,t,k] = sayı ;

console.log(o,t,k);