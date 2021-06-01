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
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir. Meslegi ${
      this.meslek
    } liktir `;
  },
};

const tarih = new Date();
console.log(tarih.getTime());
console.log(tarih.getDay());

console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//

const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 20,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 25,
  },
  {
    ad: "canan",
    soyad: "ari",
    meslek: "grafiker",
    yas: 35,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team lead",
    yas: 26,
  },
  {
    ad: "ceren",
    soyad: "yilmaz",
    meslek: "developer",
    yas: 24,
  },
];
console.log(kisiler);
//
//* SORU: Kisilerin mesleklerini yazdirin
kisiler.forEach((x) => console.log(x.meslek));
//

//* SORU: kisiler dizisindeki tüm bireylerin yaşını bir artırarak yeni bir diziye saklayiniz.
const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);
//
//* SORU: kisiler dizisinindeki kişilerin isimlerini büyük harf olarak değiştiren ve yaşlarini da 5 artırak yeni bir nesne oluşturan kodu yaziniz.
const buyukHarf = kisiler.map((x) => {
  // burada return gerekli ve modifiye olacagi icin key-value seklinde olmali
  return {
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
  };
});
console.log(buyukHarf); // 0: {ad: "MUSTAFA", yas: 25}
// 1: {ad: "AYSE", yas: 30}
// 2: {ad: "CANAN", yas: 40}
// 3: {ad: "ALI", yas: 31}
// 4: {ad: "CEREN", yas: 29}

//* SORU : Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.
//
kisiler.filter((x) => x.yas <= 25).forEach((t) => console.log(t.ad));
//
//* SORU : Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.
const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return { ad: x.ad, yas: x.yas };
  });
console.log(developer);
//
//* SORU: kisilerin ortalama yasini hesaplayiniz.
const ortalamaYas =
  kisiler.reduce((toplam, kisiYas) => toplam + kisiYas.yas, 0) / kisiler.length; // Burada baslangic degeri vermek onemli (0)
console.log(ortalamaYas); // 26
