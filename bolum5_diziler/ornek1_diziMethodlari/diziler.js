const yaslar = [30, 24, 25, 40];

const isimler = [
  "Ahmet",
  "Mustafa",
  "Can",
  "Bekir",
  "Ayse",
  20,
  30,
  true,
  23.4,
  2021 - 1977, // 44 ==> console'a cikarma islemi yaparak 44 yazar
  yaslar,
];

console.log(isimler);

console.log(isimler[0]);
console.log((isimler[3] = "Canan")); // index'i 3 olan eleman(Bekir) Canan ile degisti

// * SORU : Dizinin sondan bir onceki elemanini false olarak degistir?
isimler[isimler.length - 2] = false; // true ==> false oldu
console.log(isimler);
console.log(isimler[10]); // [30, 24, 25, 40]
// * SORU : isimler dizisinin 10. elemaninin 3. elemanini dondur
console.log(isimler[10][2]); // 25

// ! *** NON-PRIMITIVE'lerde const olarak atanan degiskenlerin degeri DEGISEBILIR!!!
// ! primitive'lerde const olarak atanan degiskenin bir daha degeri degistirilemez!!!
//
//
//* ======== DIZIYI DEGISTIREM METHOD'LAR ===================
//
const h1 = document.getElementById("meyveler");

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
//
//? pop()
meyveler.pop(); //* pop() en son elemani SILer ve sildigini dondurur
//
//? push()
meyveler.push("Cilek", "Karpuz"); //* push() en sona eleman EKLEr ve dizinin eleman sayisini dondurur
//
//? unshift()
meyveler.unshift("Ayva"); //* unshift() dizinin 0. elemanina eleman ekler ve dizinin eleman sayisini dondurur
//
//? shift()
const silinen = meyveler.shift(); //* unshift() dizinin 0. elemanindan baslayarak siler ve sildigini dondurur
console.log(silinen); // Ayva
//
//? reverse()
meyveler.reverse(); //* reverse() Diziyi ters cevirir
//---
meyveler.push("Kavun");
//
//? sort()
meyveler.sort(); //* sort() Diziyi alfabetik siraya gore siralar
//
//? splice()
meyveler.splice(1, 0, "Erik"); //* Eleman ekler veya uzerine yazarak ekler. ilk rakam indexini ikinci sayi eger 0 ise sadece ekler, 1 ise uzerine yazarak(silerek) ekler.
//
//* SORU : Karpuz'u silip yerine Mango yaziniz
meyveler.splice(4, 1, "Mango");
//
h1.innerHTML = meyveler; // UI'ya yazar(Ekrana)
console.log(meyveler);
//
//*======================= DIZI ERISIM METHOD"LARI ========================
//
const sayilar = [3, 5, 2, "2", "uc", "bes"];
//
//? includes
console.log(sayilar.includes(5)); //* dizide  eleman var mi yok mu diye bakar ve varsa true yoksa false dondurur
meyveler.includes("Elma");
//
//? join()
const sayilar1 = sayilar.join(); //* join() Dizinin elemanlarini birlestirip String haline cevirir
console.log(sayilar1); // 3,5,2,2,uc,bes
//* SORU : Elamanlar arasina - koyarak yazdir
const sayilar2 = sayilar.join("-");
console.log(sayilar2); // 3-5-2-2-uc-bes
//
//? toString
const toStrng = sayilar1.toString(); //* toString() fonksiyonu sadece dizinin elemanlarinin aralarina virgul(,) koyarak birlestirir ve String yapar.
console.log(toStrng); // 3,5,2,2,uc,bes
//
h1.innerHTML = sayilar; // UI'ya yazar(Ekrana)
//
const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];
const arabalar1 = arabalar.slice(2); //* audi sonrasini siler
arabalar1.push("Fiat"); // En sona Fiat ekler
console.log(arabalar1); // ["audi", "ferrari", "anadol", "Fiat"]
//
//* SORU : Sadece  mercedes ve audi'yi al
//? slice()
const arabalar2 = arabalar.slice(1, 3); //* slice() iki index arasindaki elemanlari alir. (1. ve 2. indexi)
console.log(arabalar2); //["mercedes", "audi"]
//
//? indexOf()
const audiIndex = arabalar.indexOf("audi"); //* elemanin index'ini dondurur
console.log(audiIndex); // 2 ==> audi'nin indexi
//
//? lastIndexOf()
arabalar.lastIndexOf("audi"); //* ayni elemandan birden fazla varsa sonuncusunun indexini dondurur
//---------------------------------------------------
//* SORU : Elemanlar arasinda opel varsa indexini donduren alert ternary yapiniz?
const opelIndex = arabalar.indexOf("opel"); // -1
opelIndex < 0
  ? alert("Aranilan eleman bulunamadi")
  : alert("Aranilan elemanin indexi: " + opelIndex);
//-------------------------------------------------
console.log(arabalar);
//
//*======================== CONCAT ===============================
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];

const birlesik = yazilar.concat(rakamlar, true, false);
console.log(birlesik); //  ["a", "b", "ad", "soyad", "yas", 3, 5, 1, 4, 7, true, false]

h1.innerHTML = birlesik;
