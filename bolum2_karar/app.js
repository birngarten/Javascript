// const num1 = Number(prompt("Birinci Sayi:"));
// const islem = prompt("Islem giriniz");

// const num2 = +prompt("Ikinci Sayi:"); // Number veya + burada ayni islemi yapiyor
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = num1 + num2;
// } else if (islem == "-") {
//   sonuc = num1 - num2;
// } else if (islem == "*") {
//   sonuc = num1 * num2;
// } else if (islem == "/") {
//   sonuc = num1 / num2;
// } else {
//   alert("Yanlis islem yaptiniz!");
// }
// console.log(`${num1} ${islem} ${num2} = ${sonuc}`);

// ----------------------------------------------------

// kisinin yasi 18'den buyuk ise askere, degilse gitmesin
// const age = prompt("yasinizi giriniz:");
// const healt = prompt("Saglikli misiniz e/h");
// const result = age > 18 && healt == "e" ? "Askere Gidebilir" : "Askere Gidemez";
// console.log(result);
// alert(result);

// const gunNo = prompt("Gun sayisini giriniz:");
// switch (gun) {
//   case 1:
//     gün = "Pazartesi";
//     break;
//   case 2:
//     gün = "Salı";
//     break;
//   case 3:
//     gün = "Çarşamba";
//     break;
//   case 4:
//     gün = "Perşembe";
//     break;
//   case 5:
//     gün = "Cuma";
//     break;
//   case 6:
//     gün = "Cumartesi";
//     break;
//   case 7:
//     gün = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(gun);

// SORU :10 yillik calisana %50, 5 yil ve uzeri %20, digerleri %10 zam
// const maas = prompt("Maasinizi Giriniz");
// const calismaSuresi = prompt("Calışma Sürenizi Giriniz");
// const zamlıMaas =
//   calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
// console.log(zamlıMaas);

// SORU : Borcu yoksa maassi 2800'den fazla ise kredi alabilir
// const borç = 0;
// const maaş = 3000;
// console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 😊" : "Kredi Alamaz 😒");

// * ======== DONGULER ================

// ? ----- for -----
// const num = prompt("Dongu sayisini giriniz");
// for (let i = 1; i <= num; i++) {
//   console.log(`${i} Mehmet`);
// }
// --------------------------------------------------
// * SORU : Asal sayi tespiti
// const num = Number(prompt("Sayiyi giriniz"));
// let asal = true;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     asal = false;
//     break;
//   }
// }

// const result = asal ? "Asal" : "Asal Degil";

// console.log(result);
// // ------------------------------------------------

// * SORU : 0 ile 100 arasinda sayi girildiginde mesaj veren bir program yaziniz?

// ? do while ile
// let not;
// do {
//   not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);

// console.log("Giridiğiniz not 0-100 arasındadır");

// ? while ile
// let not = prompt("0-100 arasında bir not giriniz:");
// while(not<0 || not>100){
//   console.error("Girilen not 0-100 arasinda olmalidir.");
//   not = prompt("0-100 arasinda bir not giriniz:");
// }
// console.log("Girdiginiz sayi 0-100 arasindadir");

// * SORU : Klavyeden Q karakteri girilene kadar not girisi yapan bir programi dongu kullanarak yaziniz?

let not1,
  i = 1;
while (true) {
  not1 = prompt(i + ".kisinin notunu giriniz:");
  not1 = not1.toLowerCase();
  if (not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}
