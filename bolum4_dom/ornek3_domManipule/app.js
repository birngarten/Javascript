// Ac butonuna her tiklandiginda calisir.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

// * SORU : Ampulun uzerine mouse ile gelindiginde yansin, mouse ayrildiginda sonsun
// ? 1.YOL
// document.querySelector(".resim").onmouseover = function () {
//   document.querySelector(".resim").src = "./img/lamba_on.gif";
// };
// document.querySelector(".resim").onmouseout = function () {
//   document.querySelector(".resim").src = "./img/lamba_off.gif";
// };
// ? 2.YOL
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "img/lamba_on.gif";
});
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
});
//========================================================================
// * checkbox'a tiklandiginda girilen text buyuk harf olsun
// * Klavyeden her bir tusa basildiginda bu fonksiyon tetiklenecek.
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};
//==========================================================================

// * index.html'de input-div'in altina yeni bir h1 elemani olusturalim
// * sanki orada h1 elamani varmis gibi islev gorur
const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
sonDiv.after(h1); // ? index.html'deki input-div'in sonrasina h1'i ekliyoruz
h1.style.marginTop = "20px";
h1.style.color = "red";
h1.style.textAlign = "left";
