function t1() {
  let sana = document.getElementById("t1").value.toLowerCase();
  let pisteet = 0;
  let yksiPiste = ["a", "e", "i", "n", "s", "t"];
  let kaksiPistettä = ["o", "ä", "k", "l"];
  let kolmePistettä = ["u", "m"];
  let neljäPistettä = ["y", "h", "j", "p", "r", "v"];
  let seitsemänPistettä = ["ö", "d"];
  let kahdeksanPistettä = ["b", "f", "g"];
  let kymmenenPistettä = ["c"];
  let kaksitoistaPistettä = ["q", "w", "x", "z", "å"];

  for (let i = 0; i <= sana.length; i++) {
    if (sana[i] == yksiPiste) {
      pisteet++;
    } else if (sana[i] == kaksiPistettä) {
      pisteet += 2;
    } else if (sana[i] == kolmePistettä) {
      pisteet += 3;
    } else if (sana[i] == neljäPistettä) {
      pisteet += 4;
    } else if (sana[i] == seitsemänPistettä) {
      pisteet += 7;
    } else if (sana[i] == kahdeksanPistettä) {
      pisteet += 8;
    } else if (sana[i] == kymmenenPistettä) {
      pisteet += 10;
    } else if (sana[i] == kaksitoistaPistettä) {
      pisteet += 12;
    } else {
      document.getElementById("t1o").innerText = "Anna kelvollinen sana";
    }
  }
  document.getElementById("t1o").innerText =
    "Sana: " + sana + " on " + pisteet + " arvoinen.";
}
