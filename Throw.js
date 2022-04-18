//Hata yönetimi
var isim = "Fatma";
if (isim !== "Ayşe")
    throw Error("Beklenmeyen isim"); //Burada hata verdikten sonra çalışmaya devaö etmez.

console.log(isim);