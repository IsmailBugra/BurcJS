let ay = prompt("Doğdunuz Ayı Giriniz 'ayın ilk hafini büyük yazınız örneğin Ocak,Şubat'");
let gun = prompt("Doğduğunuz günü yazın (1-31 arası)");
gun = Number(gun);

ay = ay.toLowerCase();

let burc = "";
if ((ay === "aralık" && gun >= 22) || (ay === "ocak" && gun <= 21))
{ burc = "Oğlak"; }
else if ((ay === "ocak" && gun >= 22 ) || (ay === "şubat" && gun <= 19))
{ burc = "Kova"; }
else if ((ay === "şubat" && gun >= 20) || (ay === "mart" && gun <= 20))
{ burc = "Balık"; }
else if ((ay === "mart" && gun >= 21) || (ay === "nisan" && gun <= 20))
{ burc = "Koç"; }
else if ((ay=== "nisan" && gun >= 21 ) || (ay === "mayıs" && gun <= 21))
{ burc = "Boğa"; }
else if ((ay=== "mayıs" && gun >= 22 ) || (ay === "haziran" && gun <= 22))
{ burc = "İkizler"; }
else if ((ay=== "haziran" && gun >= 23 ) || (ay === "temmuz" && gun <= 22))
{ burc = "Yengeç"; }
else if ((ay=== "temmuz" && gun >= 23 ) || (ay === "ağustos" && gun <= 22))
{ burc = "Aslan"; }
else if ((ay=== "ağustos" && gun >= 23 ) || (ay === "eylül" && gun <= 22))
{ burc = "Başak :)) "; }
else if ((ay=== "eylül" && gun >= 23 ) || (ay === "ekim" && gun <= 22))
{ burc = "Terazi :)) "; }
else if ((ay=== "ekim" && gun >= 23 ) || (ay === "kasım" && gun <= 21))
{ burc = "Akrep"; }
else if ((ay=== "kasım" && gun >= 22 ) || (ay === "aralık" && gun <= 21))
{ burc = "Yay"; }
else { burc = "Geçersiz giriş ayını doğru yazın."; }
alert("merhaba " + burc + " burcusun"); 