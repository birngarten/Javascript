// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// Fonksiyonun tanımlanması
function yazdir() {
  console.log("Ahmet");
}
yazdir(); // Fonks. çağrılması
// Örnek: Parametreli Fonksiyon
function yazdirAd(ad, yas) {
  console.log(`Adiniz ${ad} Yasiniz ${yas}`);
}
yazdirAd("Mustafa", 23); // Call | invoke
yazdirAd("John", 21); // call | invoke
// Örnek: Parametreli, dönüş değerli Fonksiyon
function yasHesapla(dogum) {
  return 2021 - dogum;
}
console.log(`Yasiniz: ${yasHesapla(1990)}`);
alert(`Yasiniz: ${yasHesapla(1910)}`);
const yas = yasHesapla(1995);
console.log(`Yasiniz: ${yas}`);
// Örnek: Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.
const sayiniz = prompt("Sayinizini giriniz:");
// Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.
console.log(tekCift(sayiniz));
function tekCift(sayiniz) {
  const sonuc = sayiniz % 2 == 0 ? `${sayiniz} Çifttir` : `${sayiniz} Tektir`;
  return sonuc;
}

// ! 2.YÖNTEM  : FUNCTION EXPRESSION
const tekCift1 = function (sayiniz) {
  return sayiniz % 2 == 0 ? "ÇİFT" : "TEK";
};
console.log(tekCift1(5)); // invoke
// ORNEK: Buyuk sayiyi bulma
let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};
console.log("En büyük:" + buyukBul(5, 3, 8));

// ! 3.YÖNTEM  : ARROW (OK) FONKSIYONLARI

const topla = (a, b) => a + b; // Arrow fonk tanimlamasi
console.log(topla(5, 2)); // invoke
console.log(topla(3, 10)); // invoke

// Ornek
const ciftMi = (sayi) => (sayi % 2 == 0 ? "çift" : "tek");
console.log(ciftMi(5));
console.log(ciftMi(2));

// -----------------------------------------
// * SORU : Us Alma

const taban = prompt("Taban giriniz");
const us = prompt("Us giriniz");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

// * SORU : Menu

// ? NOT: Ok fonksiyonunda  birden fazla ifade varsa fonksiyonda SUSLU PARANTEZ kullanmaliyiz!
const menu = () => {
  console.log("====================");
  console.log("  JAVASCRIPT DERSI  ");
  console.log("====================");
};
menu();

// * SORU : Ad, Soyad ve yasi donduren fonksiyon

// 1.Yol
// const bilgiVer = (ad, soyad, dogumTarihi) => {
//   const bilgi = `Adim:${ad}, Soyadim:${soyad}, Yasim:${2021 - dogumTarihi}`;
//   return bilgi;
// };

// 2.Yol
const bilgiVer = (ad, soyad, dogumTarihi) =>
  `Adim:${ad}, Soyadim:${soyad}, Yasim:${2021 - dogumTarihi}`;

console.log(bilgiVer("Mehmet", "Cakmak", 1987));

// * SORU : Bir silindirin hacmini hesaplayan fonksiyonu ARROW fonksiyon olarak yaziniz. Yaricap prompt ile girilmeli..(pi*r2*h)

const r = prompt("Yaricapi giriniz");
const h = prompt("Yukseklik giriniz");

const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log(hacimHesapla(r, h));
// Math.round() --> En yakin sayiya yuvarlar
console.log("silindirin hacmi: " + Math.round(hacimHesapla(r, h)));
// toFixed(2) --> virgulden sonra 2 basamak alir. Farkli sayi girilebilir.
console.log("silindirin hacmi: " + hacimHesapla(r, h).toFixed(2));
