function hesapla() {
  const r = document.getElementById("r").value;
  // ! Class'lara erisim icin  ==> .class_adi
  // ! id'li bir HTML elemana erisim icin ==> #id
  const h = document.querySelector(".h").value;
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  console.log(sonuc, r, h);
  document.querySelector(".hacim").innerHTML = sonuc;
}

const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "blue";
buton.style.width = "100px";
