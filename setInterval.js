//Durdurulmadığı sürece belirli aralıklarla çalışmaya devam eder.
var sayi = 1 
var interval = setInterval(function () {
    if(sayi == 5) // 5'e kadar saydıktan sonra duracak.
        clearInterval(interval); 

    console.log("sayı : " + sayi);
    sayi++
},1000); //Her 1 sn'de bir tekrarlayacak 


