//ES6'dn önce;
var f = function(){
    return 1;
}
console.log(f());

//ES6'dan sonra;

const k = () => { 
    return 1;
}
console.log(k()); 

//parametre almış hali;

const p = (a,b) =>  a+b; //return işlemi için bu şekilde sadeleştirebiliriz.

console.log(p(15,22));

const l = n => n + 10; //tek bir parametre ise parantez içine almaya grek yok.

console.log(l(22));