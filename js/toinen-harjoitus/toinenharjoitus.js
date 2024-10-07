function negPosLuku() {
  let luku = parseInt(document.getElementById("negposluku").value);

  if (luku >= 0) {
    document.write("Antama lukusi: " + luku + " on positiivinen");
  } else {
    document.write("Antama lukusi:" + luku + " on negatiivinen");
  }
}

function viikonpaiva(vkpl) {
  let vkpl = parseInt(document.getElementById("viikonpaiva").value);

  if (vkpl == 1) {
    document.write("Maanantai");
  } else if (vkpl == 2) {
    document.write("Tiistai");
  } else if (vkpl == 3) {
    document.write("Keskiviikko");
  } else if (vkpl == 4) {
    document.write("Torstai");
  } else if (vkpl == 5) {
    document.write("Perjantai");
  } else if (vkpl == 6) {
    document.write("Lauantai");
  } else if (vkpl == 7) {
    document.write("Sunnutai");
  } else {
    document.write("Anna kelvollinen numero 1-7");
  }
}

function karkausVuosi() {
  let karkausVuosi = parseInt(document.getElementById("karkausVuosi").value);

  if (
    (0 == karkausVuosi % 4 && 0 != karkausVuosi % 100) ||
    0 == karkausVuosi % 400
  ) {
    document.write(karkausVuosi + " On karkausvuosi");
  } else {
    document.write(karkausVuosi + " Ei ole karkausvuosi");
  }
}

function summaJaKeskiarvo() {
  let l1 = parseInt(document.getElementById("luku1").value);
  let l2 = parseInt(document.getElementById("luku2").value);
  let l3 = parseInt(document.getElementById("luku3").value);
  let l4 = parseInt(document.getElementById("luku4").value);
  let l5 = parseInt(document.getElementById("luku5").value);

  let summa = l1 + l2 + l3 + l4 + l5;
  document.write("<br>Lukujen summa on: " + summa);

  let keskiarvo = summa / 5;
  document.write("<br>Lukujen keskiarvo on: " + keskiarvo);
}
