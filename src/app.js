/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardN = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cardP = ["♦", "♥", "♠", "♣"];

let r = arr => Math.floor(Math.random() * arr.length);

window.onload = function() {
  let randomN = cardN[r(cardN)];
  let randomP = cardP[r(cardP)];
  let icon1 = document.getElementById("icon1");
  let icon2 = document.getElementById("icon2");

  let number = document.getElementById("number");
  number.innerHTML = '<p class="number">' + randomN + "</p>";

  if (randomP === "♥" || randomP === "♦") {
    icon1.innerHTML =
      '<span class="icon  red" id="icon1">' + randomP + "</span>";
    icon2.innerHTML =
      '<span class="icon  red" id="icon1">' + randomP + "</span>";
  } else {
    icon1.innerHTML = '<span class="icon " id="icon1">' + randomP + "</span>";
    icon2.innerHTML = '<span class="icon " id="icon1">' + randomP + "</span>";
  }
};
