// ======================================================
//?      YENİ NESİL OPERATORLER: DESTRUCTURING (OBJECT)
// ======================================================
// ES6 ile birlikte bir dizi ya da nesnenin içerisindeki
// elemanlar kolaylıkla ayrıştırılabilir.

const birey = {
  ad: "Can",
  konum: "Vaduz",
  email: "canvaduz@gmaill.com",
};
//* 1.YONTEM: Klasik Yontem
const ad1 = birey.ad;
const konum1 = birey.konum;
console.log(ad1, konum1);
//
//* 2.YONTEM: Object DESTRUCTURING
//! DESTRUCTURING kullanilirken "Key" isimleri object'inki ile ayni olmalidir. Aksi takdirde undefined degerler donerler
const { ad, konum, email } = birey;
console.log(ad, konum, email); // Can Vaduz canvaduz@gmaill.com
console.log(ad); // Can
//* ad'a yeni atamaya
birey.ad = "Mustafa";
console.log(birey); // {ad: "Mustafa", konum: "Vaduz", email: "canvaduz@gmaill.com"}

//
function bilgiAl() {
  return {
    id: "101",
    urunAdi: "Apple",
    fiyat: 1500,
  };
}

console.log(bilgiAl());
const { id, urunAdi, fiyat } = bilgiAl();
console.log(id, urunAdi);

// ======================================================
//?    YENİ NESİL OPERATORLER: DESTRUCTURING(ARRAY)
// ======================================================
const isimler = ["Ahmet", "Can", "Veli"];

//* Klasik Yontem
const isim1 = isimler[0];
const isim2 = isimler[1];
//
//* DESTRUCTURING(ARRAY) Yontem
const [kisi1, kisi2] = isimler;
console.log(kisi1, kisi2);

// ======================================================
//        YENİ NESİL OPERATORLER: SPREAD VEYA REST  ...
// ======================================================
// Spread operatoru dizileri ve nesneleri birleştirmek
// veya ayırımak icin kullanilabilir.
// Kullanmak içini dizinin onune ... karakterleri konulur.
// DİZİLERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
// REST (Dizilede kullanım)
const arabalar = ["bmw", "reno", "mercedes", "ferrari", "anadol"];
const [araba1, araba2, ...geriKalanlar] = arabalar;
console.log(araba1, araba2);
console.log(geriKalanlar);
// NESNELERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
const personel = {
  isim: "john",
  soyad: "smith",
  meslek: "developer",
};
const { meslek, isim, ...geriKalan } = personel;
console.log(geriKalan);
// DIZILERI BIRLESTIRMEK ICIN DE KULLANILABILIR
const araclar = ["Ucak", "Helikopter", "Bisiklet"];
const otomobiller = ["Kamyon", "Kamyonet", "Otobus", "Araba"];
const yeniDizi = [...araclar, ...otomobiller];
const meyveler = ["kiraz", "armut", "şeftali", "üzüm"];
const turunclar = ["limon", "portokal", "mandalina", ...meyveler];
console.log(turunclar);
console.log(yeniDizi);

