let ay = prompt("Doğdunuz Ayı Giriniz 'ayın ilk hafini büyük yazınız örneğin Ocak,Şubat'");
let gun = prompt("Doğduğunuz günü yazın (1-31 arası)");
gun = Number(gun);
ay = ay.toLowerCase();
let burc = " ";
if ((ay === "aralık" && gun >= 22) || (ay === "Ocak" && gun <= 21))
{ burc = "Oğlak"; }
else if ((ay === "Ocak" && gun >= 22 ) || (ay === "Şubat" && gun <= 19))
{ burc = "Kova"; }
else if ((ay === "Şubat" && gun >= 20) || (ay === "Mart" && gun <= 20))
{ burc = "Balık"; }
else if ((ay === "Mart" && gun >= 21) || (ay === "Nisan" && gun <= 20))
{ burc = "Koç"; }
else if ((ay=== "Nisan" && gun >= 21 ) || (ay === "Mayıs" && gun <= 21))
{ burc = "Boğa"; }
else if ((ay=== "Mayıs" && gun >= 22 ) || (ay === "Haziran" && gun <= 22))
{ burc = "İkizler"; }
else if ((ay=== "Haziran" && gun >= 23 ) || (ay === "Temmuz" && gun <= 22))
{ burc = "Yengeç"; }
else if ((ay=== "Temmuz" && gun >= 23 ) || (ay === "Ağustos" && gun <= 22))
{ burc = "Aslan"; }
else if ((ay=== "Ağustos" && gun >= 23 ) || (ay === "Eylül" && gun <= 22))
{ burc = "Başak :)) "; }
else if ((ay=== "Eylül" && gun >= 23 ) || (ay === "Ekim" && gun <= 22))
{ burc = "Terazi :)) "; }
else if ((ay=== "Ekim" && gun >= 23 ) || (ay === "Kasım" && gun <= 21))
{ burc = "Akrep"; }
else if ((ay=== "Kasım" && gun >= 22 ) || (ay === "Akrep" && gun <= 21))
{ burc = "Yay"; }
else { burc = "Geçersiz giriş ayını doğru yazın."; }
alert("merhaba " + burc + " burcusun"); 