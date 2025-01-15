"use strict";

function dialogOffen(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[0].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[0].classList.add("aktiv");

  let indikatoren = document.getElementsByClassName("indikator");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[0].classList.add("aktiv");
}

function dialogOffen1(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[1].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[1].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[1].classList.add("aktiv");

  umschalten(1);
}

function dialogOffen2(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[2].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[2].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[2].classList.add("aktiv");

  umschalten(2);
}

function dialogOffen3(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[3].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[3].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[3].classList.add("aktiv");

  umschalten(3);
}

function dialogOffen4(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[4].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[4].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[4].classList.add("aktiv");

  umschalten(4);
}

function dialogOffen5(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[5].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[5].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[5].classList.add("aktiv");

  umschalten(5);
}

function dialogOffen6(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[6].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[6].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[6].classList.add("aktiv");

  umschalten(6);
}

function dialogOffen7(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[7].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[7].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");
  indikatoren[7].classList.add("aktiv");

  umschalten(7);
}

function dialogOffen8(dialogId) {
  document.getElementById(dialogId).classList.add("sichtbar");
  document.getElementById("body-overlay").classList.add("sichtbar");

  const bilder = document.getElementsByClassName("bilder");
  bilder[8].classList.add("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[8].classList.add("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.add("aktiv");

  umschalten(8);
}
function removeOverlay() {
  const bilder = document.getElementsByClassName("bilder");
  bilder[0].classList.remove("aktiv");
  bilder[1].classList.remove("aktiv");
  bilder[2].classList.remove("aktiv");
  bilder[3].classList.remove("aktiv");
  bilder[4].classList.remove("aktiv");
  bilder[5].classList.remove("aktiv");
  bilder[6].classList.remove("aktiv");
  bilder[7].classList.remove("aktiv");
  bilder[8].classList.remove("aktiv");

  const slides = document.getElementsByClassName("slide");
  slides[0].classList.remove("aktiv");
  slides[1].classList.remove("aktiv");
  slides[2].classList.remove("aktiv");
  slides[3].classList.remove("aktiv");
  slides[4].classList.remove("aktiv");
  slides[5].classList.remove("aktiv");
  slides[6].classList.remove("aktiv");
  slides[7].classList.remove("aktiv");
  slides[8].classList.remove("aktiv");

  const indikatoren = document.getElementsByClassName("indikator");
  indikatoren[0].classList.remove("aktiv");
  indikatoren[1].classList.remove("aktiv");
  indikatoren[2].classList.remove("aktiv");
  indikatoren[3].classList.remove("aktiv");
  indikatoren[4].classList.remove("aktiv");
  indikatoren[5].classList.remove("aktiv");
  indikatoren[6].classList.remove("aktiv");
  indikatoren[7].classList.remove("aktiv");
  indikatoren[8].classList.remove("aktiv");

  document.getElementById("body-overlay").classList.remove("sichtbar");
  document.getElementById("loslegen-dialog").classList.remove("sichtbar");
}

const indikatoren = document.getElementsByClassName("indikator");

const slides = document.getElementsByClassName("slide");

let aktuellerIndex = 0;

function umschalten(anzahl) {
  indikatoren[aktuellerIndex].classList.remove("aktiv");
  slides[aktuellerIndex].classList.remove("aktiv");

  let neuerIndex = aktuellerIndex + anzahl;

  if (neuerIndex < 0) {
    neuerIndex = slides.length - 1;
  }

  if (neuerIndex > slides.length - 1) {
    neuerIndex = 0;
  }

  indikatoren[neuerIndex].classList.add("aktiv");
  slides[neuerIndex].classList.add("aktiv");

  aktuellerIndex = neuerIndex;
}

function springeZuEintrag(neuerIndex) {
  indikatoren[aktuellerIndex].classList.remove("aktiv");
  slides[aktuellerIndex].classList.remove("aktiv");

  indikatoren[neuerIndex].classList.add("aktiv");
  slides[neuerIndex].classList.add("aktiv");

  aktuellerIndex = neuerIndex;
}
