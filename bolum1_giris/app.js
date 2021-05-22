console.log("Hello Javascript");
console.log("Javascript Javadan kolay bir dildir");
console.error("Bu bir hatadir");
console.warn("Bu bir uyaridir");
//  alert("Dikkat");

// ** =========== DEGISKEN TANIMLAMA ===========
// ? var keyword'u ile degisken tanimlanabilir.
// ? Ancak modern JS ile var keyword'unun kullanimi azaldi.
// ? Cunku var global bir degisken gibi dusunulmektedir.
var pi = 3.14;
console.log(pi);
console.log(typeof pi); // number ==> typeof : degiskenin data turunu gosterir

pi = "3";
console.log(pi);
console.log(typeof pi); // string

pi = true;
console.log(pi);
console.log(typeof pi); // boolean

isim = "Ahmet";
console.log(isim);
console.log(typeof isim); // string

isim = 4;
console.log(isim);
console.log(typeof isim); // number

// *** const ve let yeni degisken tanimlama keyword'leridir.
// ? CONST: Sadece baslangicta deger atanabilir (non-primitive'ler haric).
// ?        Sonradan degeri degistirilemez. Java'daki final keyword'una benzer...

// const piSayisi = 3.14;
// console.log(piSayisi);

// piSayisi = 3;
// console.log(piSayisi); // ! Uncaught TypeError: Assignment to constant variable.
// ! Cunku piSayisina daha yukarida atama yapilmisti. Yeni atama yapilamaz.

// * =========== LET =============

// * Eger degiskenimizin degerinin degismesi gerekiyorsa CONST kullanamayiz!!!
// * Bunun yerine let kullanabiliriz

// ! LET Block-scope bir degiskendir. VAR ise global-scope bir tanimlamadir.
// * Bolck-scope: Sadece tanimli oldugu alanda gecerlidir.

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

// ? String 3 sekilde olusturulabilir;
let isim1 = "Mustafa"; // Cift tirnak
let isim2 = "Ahmet"; // Tek tirnak
let isim3 = `Alican`; // Backthick

console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil); // object

// ==========================================

// * ============ OPERATORLER ===============
// *              (+  -  *  /)

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplamFiyat = sucuk + sakiz + kola; // 47
toplamFiyat++; // 48
toplamFiyat += 50; //98

// ? Birden fazla degiskenin degerini yazdirmak icin virgul(,) kullanilir.
console.log(toplamFiyat, kola); // ? 98 5
console.log("Toplam Fiyat : " + toplamFiyat); // Toplam Fiyat : 98

// * (+) operartoru String birlestirme (concatination) de yapar

const ad = "Can";
const soyad = "Canan";
console.log(ad + " " + soyad); // Can Canan

const x = 5,
  y = "5";
console.log(x + y);

//---------------------------------------
// Template Literal (String Sablonlari, ES6 ile gelmistir)
const ad1 = "Mesut";
const yas = 55;

console.log("Benim adim " + ad1 + " " + "yasim " + yas + " dir");
// ? Backthick kullanimi  ${variable / degisken}
console.log(`Benim adim ${ad1} yasim ${yas} dir`);

const yıl = 2021;
const dogumTarihi = 1980;
const sene = yıl - dogumTarihi;
console.log("YAŞ:" + sene);
console.log("YAŞ:" + yıl - dogumTarihi); // !HATA ==> NaN : Not a Number
console.log("YAŞ:" + (yıl - dogumTarihi));

console.log(`YAS:${sene}`); // Backthick ile
console.log(`YAS:${yıl - dogumTarihi}`); // Backthick ile

const taban = 2;
const us = 8;
const sonuc = taban ** us;
console.log(sonuc);

// * MOD alma (%)
const num = 123;
const birler = num % 10;
const onlar = Math.floor(num / 10) % 10;
const yuzler = Math.floor(num / 100);
console.log("Birler:" + birler); // 3
console.log("Onlar:" + onlar);
console.log("Yuzler:" + yuzler);

// * ======== KARSILASTIRMA OPERATORLERI =========
const num1 = 100;
const num2 = "100";

console.log(typeof num1, typeof num2); // number  string

console.log(num1 == num2); // true  ==> burada sadece degerlerine bakiyor
console.log(num1 === num2); // false ==> (===) hem degerlerine hem de veri tipine bakar. Eger hem deger hem de veri tipi esit ise "true" esit degilse "false" dondurur.

const a = null;
const b = true;
console.log(a && b); // null

// co44nst age = prompt("Yasinizi giriniz:"); // Scanner gibi console'dan veri girisi istiyor

// * ============== TERNARY =============

const name1 = prompt("Adinizi giriniz:");
const age = Number(prompt("Yasinizi giriniz:"));

// 1.YOL
age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);

// 2.YOL
const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;
console.log(result);

const num4 = 41;

console.log(String(num4), num4);
