// +, -, *, / ile dört işlem yapılır.

var sayi =  10;

console.log("Toplam : " + (sayi + 5)); // Hem birleştirme hem de işlemi aynı anda yapabilmek için işlem yapılan kısmı parantez içine alabiliriz.
console.log("Fark : " + (sayi - 7));
console.log("Çarpım : " + (sayi * 3));
console.log("Bölüm : " + (sayi / 2));
console.log("Bölümden kalan : " + (sayi % 4)); //Bölümden kalan'ı bulmak için %operatörü kullanılır.


console.log("Bir fazlası : " + (sayi++)); // önce sayıyı yazdırır sonra sayının değerini 1 arttırır.
console.log("Artırılan sayı : " + sayi); //Burada sayının arttığını görebiliyoruz.

console.log("Önce 1 arttır : " + (++sayi)); //Bu şekilde de sayının değerini önce arttırıp sınra da yazdırır.

var yeniSayi = (sayi -= 5); //Bu ifade, sayi değerinden 5 çıkar ve bunu yeniSayi değişkenine ata anlamına gelir.
console.log(yeniSayi);      //Ayrıca parantezler okumayı kolaylaştırır.
