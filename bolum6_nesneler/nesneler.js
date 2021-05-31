// ======================================================
//?            NESNELER (OBJECTS)
//========================================================

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.
// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.

// ! OBJECT
// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.
//
//* insan nesnesi olusturalim;
const insan = {
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};
console.log(insan);
// 1) .dot notasyonu ile verilere erisim
console.log(insan.ad);
// 2) [Koseli parantez ] ile verilere erisim : Koseli parantez icerisine bir expression yazmak mumkundur.)
console.log(insan["yas"]);

const yazi = "Adim";
console.log(`${yazi} ${insan.ad} ve yasim ${insan["yas"]}`);

const bilgiSecimi = prompt(
  "insan nesnesi hakkinda ne bilmek istersin? Seciminizi giriniz: ad,soyad, yas, meslek ve diller"
);

if (insan[bilgiSecimi]) {
  console.log(insan[bilgiSecimi]);
} else {
  console.log(
    "yanlis secim. Lutfen ad, soyad, meslek, diller, yas seklinde giriniz"
  );
}
//* SORU : insan nesnesine konum, email, dogumTarihi degiskenlerini ekleyin
insan.konum = "Norvec";
insan.email = "insan@gmmail.com";
insan["dogumTarihi"] = 1990;

console.log(insan);
//
// ======================================================
//?            Nesne Metotlari
//========================================================
const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "Tester",
  tool: "Selenium",
  ehliyet: true,
  yasHesapla: function () {
    //! kisi objesi icine bir function yazilabilir
    console.log(this); // this kisi objesini isaret ediyor
    return new Date().getFullYear() - this.dogumTarihi;
  },
};
console.log(kisi.yasHesapla());
