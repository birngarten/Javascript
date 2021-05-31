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
