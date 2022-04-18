//İstisnai durumlar
try {
    var a = 5;
    var b = 0;
    var sonuc = a/b ;

    if (b === 0)
        throw Error("b 0 olamaz."); //Burada hatayı fırlatıyoruz.
    else
        console.log(sonuc);
}catch(error){ //Burada da yakalıyoruz.
    console.log(error); 
}finally{ //Her koşulda çalışmasını istediğimiz durum.
    console.log("Burası Finally Bloğu.")
}