// Ac butonuna her tiklandiginda calisir.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

// SORU : Ampulun uzerine mouse ile gelindiginde yansin, mouse ayrildiginda sonsun
document.querySelector(".resim").onmouseover = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
document.querySelector(".resim").onmouseout = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};
