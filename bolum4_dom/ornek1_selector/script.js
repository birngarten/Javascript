//======================================================
//                getElementById()
//=====================================================

const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = "orange";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.backgroundColor = "black";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.innerHTML = "ARA";

//======================================================
//                getElementByTagName()
//=====================================================

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = " 3px solid red";

//======================================================
//                 getElementByClassName()
//======================================================

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

//======================================================
//                  querySelector()
//======================================================

const baslik = document.querySelector(".title");
baslik.innerHTML = "DOM Selector ✒";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(orange, red)";

//======================================================
//                  EVENTS
//======================================================
//  ORNEK-1. Mosue Over, Mouse Out
//------------------------------------------------------

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "white";
  h1.style.backgroundColor = "green";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "green";
  h1.style.backgroundColor = "white";
};

// addEventListener()
document.querySelector("#btn").addEventListener("mouseover", function () {
  document.querySelector("#btn").style.width = "150px";
});
document.querySelector("#btn").addEventListener("mouseout", () => {
  document.querySelector("#btn").style.width = "100px";
});
