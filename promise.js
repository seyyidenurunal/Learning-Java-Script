//CALLBACK HELL;

const asenkronFonksiyon = function (sayi,callback) {
    const sonuc = sayi + 2;
    callback(sonuc);
}

asenkronFonksiyon (2,function(sonuc){
    console.log(sonuc);
    asenkronFonksiyon (4,function(sonuc){
        console.log(sonuc);
        asenkronFonksiyon (6, function(sonuc){
            console.log(sonuc);
            asenkronFonksiyon(8, function(sonuc){
                console.log(sonuc);
                asenkronFonksiyon (10, function(sonuc){
                    console.log(sonuc);
                })
            })
        })
    })
})

//Bunu promise kullanarak yapalım.

const asenkronfonksiyon2 = (rakam) => {
    return new Promise ((resolve,reject) => {
       if (rakam > 4)
            resolve('Her şey yolunda');
        else
            reject('Bir sorun var !');
    });
};

asenkronfonksiyon2(4)
    .then((veri) => {
        console.log(veri);
        return 2;
    })
    .then((veri) => {
        console.log(veri);
        return 4;
    })
    .then((veri) => {
        console.log(veri);
        return 6;
    })
    .catch((error) => {
        console.log(error)
    })
