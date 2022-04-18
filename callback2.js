function birinci (callback){  //Sırayla birinci, ikinci ve üçüncü fonksiyonlarını çalıştırıyoruz.
    setTimeout(function() {
        console.log("Birinci");
        callback(ücüncü);
},2000); //Program çalıştığında 2 sn sonra bu fonksiyon çalışır.
    
}

function ikinci (callback) {
    setTimeout(function () {
         console.log("İkinci");
    callback();
    }, 1000); //1 sn sonra bu fonksiyon çalışır ve hemen ardından üçüncü fonksiyon çalışır.
   
}

function ücüncü () {
    console.log ("Üçüncü");
}

birinci(ikinci);