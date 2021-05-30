// ==============================================================
//?                    DİZİLERDE İTERASYON
//===============================================================
const koordinatlar = [120, 100, -100, 220, 330];
let negatif = 0;
let pozitif = 0;
// ÖRNEK: FOR DÖNGÜLERİN DİZİLER İLE KULLANIIM
// for (let i = 0; i < koordinatlar.length; i++) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }
// FOR IN DONGUSU
for (let i in koordinatlar) {
  koordinatlar[i] < 0 ? negatif++ : pozitif++;
}
console.log(
  `Negatif Koordinat Sayısı: ${negatif} Pozitif Koordinat sayisi ${pozitif}`
);
//---------------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// saklandığı varsayalım. Bu hayvanları türüne göre aramamızı sağlayacak
// ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// yazınız. Eğer o türden bir hayvan yok ise bulunamadığını yazdırsın.
//----------------------------------------------------------------
const hayvanlar = ["fil", "deve", "kuş", "deve", "fare", "kedi", "deve"];
const ara = prompt("aramak istenilen hayvan türünü giriniz:");
const bulDondur = function (ara) {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara.toLowerCase()) {
      hayvanSayisi++;
    }
  }
  return hayvanSayisi;
};
const sayi = bulDondur(ara);
sayi == 0
  ? console.log("Aradiginiz hayvan bulunamadi")
  : console.log(`Aradiginiz ${ara} 'den ${sayi} adet bulunmaktadir`);

// ==============================================================
//?                    FOR OF DONGUSU
//===============================================================
// for of dongusu for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
let arabalar = ["BMW", "Volvo", "Mini"];
let yazı = "";
for (let i of arabalar) {
  console.log(i);
  yazı += i + " "; // i:  dizinin i. elemani demektir.
}
console.log(yazı);

// ==============================================================
//?                    FOREACH METHODU
//===============================================================
let ogrenciler = ["Jhon", "Ali", "Can"];
ogrenciler.forEach((x) => console.log(x)); // 1.Yontem =>

// function yazdir(a) {
//   console.log(a);
// }
// ogrenciler.forEach(yazdir); // 2.Yontem (function ile)

//-----------------------------------------------------------------
//
// Toplama Ornegi (UI'da (Ekranda) gozuksun)
const fiyatlar = [200, 300, 125, 450, 333, 123];
let t = 0;
fiyatlar.forEach((f) => (t += f));
console.log(t);
document.querySelector(".toplam").innerHTML = `${t} EU`; // bu atamayla toplami consle'a degil EKRANa yazdiriyoruz

//-----------------------------------------------------------------
// Alternatif Yontem ile toplama
toplam = 0;
fiyatlar.forEach((a, i, d) => {
  // a= iterasyon i=indis d=dizi(array)
  toplam += a;
  console.log(`${i}. iterasyon: ${toplam}`);
});
console.log(t);
document.querySelector(".toplam").innerHTML = `${t} EU`;
//--------------------------------------------------------------
// SORU : fiyatlar dizisinde her bir fiyata %10 zam yapalim.
// const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplamFiyat = 0;
let zamliFiyatlar = [];
fiyatlar.forEach((deger, indis) => {
  zamliFiyatlar[indis] = (deger * 1.1).toFixed(2);
  toplamFiyat += +zamliFiyatlar[indis];
}); // toFixed(2): virgulden sonra iki basamak olsun
console.log(zamliFiyatlar);
console.log(toplamFiyat);
//-------------------------------------------------------------
//?                   MAP METHODU
// ============================= ==============================
// SORU : Dizinin herbir elemaninin iki katini aliniz
const rakamlar = [3, 5, 3, 2, 6, 7, 9];
const ikiKat = rakamlar.map((x) => x * 2);
console.log(ikiKat);
//-------------------------------------------------------------
// SORU : Isimler dizisindeki herbir ismi buyuk harf olarak yeni bir diziye saklayalim
const isimler = ["Ahmet", "Mehmet", "Saffet", "ismet"];
// map() metodu normal sartlarda bir dizi dondurur
const buyuk = isimler.map((isim) => isim.toUpperCase());
buyuk.forEach((isim) => console.log(isim));
// map() metodundan sonra eger bir terminal islemi(forEach gibi) kullanilirsa map() metodu bir dizi dondurmez.
//Pipeline
isimler.map((isim) => isim.toUpperCase()).forEach((isim) => console.log(isim));

//--------------------------------------------------------------
// SORU : Dolar , Euro parite hesaplama
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const dolarKur = document.querySelector(".dolar");
const euroKur = document.querySelector(".euro");

const dolar = document.querySelector(".dolar-fiyat");
const euro = document.querySelector(".euro-fiyat");

dolarKur.onchange = function () {
  dolarKur.value < 0
    ? alert("Kur 0'dan kucuk olamaz")
    : (dolar.innerHTML = tlFiyatlar.map((tl) =>
        Math.round(tl / dolarKur.value)
      ));
};

euroKur.onchange = function () {
  euroKur.value < 0
    ? alert("Kur 0'dan kucuk olamaz")
    : (euro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / euroKur.value)));
};

//------------------------------------------------------------
// SORU : tlFiyatlar dizisinin elemanlarindan fiyati 250 altinda olanlara %10 zam, ustunde olanlara %20 zam yapalim
// ornek: 1. urunun zamli fiyati 110 TL
//! tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const zamliTlFiyatlar = tlFiyatlar.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}. urunun zamli fiyati: ${deger * 1.1} <br> `;
  } else {
    return `${indis + 1}. urunun zamli fiyati: ${deger * 1.2} <br> `;
  }
});
const stringZamliTlFiyatlar = zamliTlFiyatlar.join(""); // UI'daki virgullerden kurtulmak icin su code'u yazdik
document.querySelector(".zamli-fiyat").innerHTML = stringZamliTlFiyatlar;
console.log(zamliTlFiyatlar);

//=================================================================
//?                   FILTER METHOD'U
//=================================================================
// tlFiyatlar listesinde fiyati 250 den az olanlari ayri bir diziye saklayalim
const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250);
// 350'den kucuk
tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));
// kucukten buyuge siralama
//* sort();
console.log(tlFiyatlar.sort((a, b) => a - b));
//  buyukten kucuge siralama
console.log(tlFiyatlar.sort((a, b) => b - a));

// =================================================================
//?                     PIPELINE
// =================================================================
//* SORU : maasi 4000 $'dan dusuk olanlara %30 zam yapalim ve ayri dizide saklayalim
const maaslar = [3000, 5000, 4000, 6000, 6500];
const zamliMaaslar = maaslar
  .filter((m) => m <= 4000)
  .map((m) => (m * 1.3).toFixed(2));
console.log(zamliMaaslar);

//* SORU : 4000'den fazla olanlara % 25 zam yap
maaslar
  .filter((d) => d > 4000)
  .map((d) => d * 1.25)
  .forEach((d) => console.log(d));

//----------------------------------------------------------------
//* SORU :
const adlar = [
  "Samet",
  "Hakki",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];
