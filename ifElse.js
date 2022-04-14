var cevap = false;
var ikinciCevap = true;

if (cevap && ikinciCevap){
  console.log(" 100 PUAN KAZANDINIZ") //koşul doğru ise bu bloğu çalıştırır. Ve diğer durumların doğru olup olmadığına bakmaz.
}else if (cevap || ikinciCevap){
  console.log(" 50 PUAN KAZANDINIZ") // İlk kuşul doğru değilse bu duruma bakılır.
}else{
  console.log("KAYBETTİNİZ") //hiçbiri değil ise burası çalışır.
};


if (cevap && ikinciCevap){
  console.log(" 100 PUAN KAZANDINIZ")
}else{
  if (cevap || ikinciCevap){   //İç içe if blokları yazabiliriz.
    console.log(" 50 PUAN KAZANDINIZ")
  }else{
    console.log("KAYBETTİNİZ")
  }
};

//Parantezleri yazmadan daha okunur bir şekilde de yazabiliriz.
if (cevap && ikinciCevap)
  console.log(" 100 PUAN KAZANDINIZ");
else
  if (cevap || ikinciCevap)
    console.log(" 50 PUAN KAZANDINIZ");
  else
    console.log("KAYBETTİNİZ");

