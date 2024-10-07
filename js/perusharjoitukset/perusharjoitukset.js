function jarjesta() {
  let eka = parseInt(document.getElementById("eka").value);
  let toka = parseInt(document.getElementById("toka").value);
  let kolmas = parseInt(document.getElementById("kolmas").value);
  document.write("Annoit luvut: " + eka + " " + toka + " " + kolmas);
  let jarjestys = [eka, toka, kolmas];
  jarjestys.sort((a, b) => a - b);
  document.write("<br>Lukujen järjestys on: " + jarjestys);
}

function etsiSuurin() {
  let myValues = {
    luku1: { value: document.getElementById("luku1").value },
    luku2: { value: document.getElementById("luku2").value },
    luku3: { value: document.getElementById("luku3").value },
    luku4: { value: document.getElementById("luku4").value },
    luku5: { value: document.getElementById("luku5").value },
  };
  let maxValue = 0;
  let values = Object.values(myValues);

  values.map((el) => {
    const valueFromObject = el.value;
    maxValue = Math.max(maxValue, valueFromObject);
  });
  document.write("Suurin luku on: " + maxValue);
}

function paritonParillinen() {
  let luku = parseInt(document.getElementById("luku").value);
  if (luku % 2 == 0) {
    document.write("Antamasi luku on parillinen");
  } else {
    document.write("Antamasi luku on pariton");
  }
}

function ajoneuvo() {
  let ika = parseInt(document.getElementById("ika").value);
  if (ika < 15) {
    document.write("Hyvä kun saat edes pyörää ajaa");
  } else if (ika < 18) {
    document.write("Voit ajaa mopoa jippii tai kevarii idk");
  } else if (ika >= 18) {
    document.write(
      "Cool voit ajaa melkei mitä tahansa. Jos on fyffee hommaa kortti"
    );
  }
}

function kaanna() {
  let lang = document.getElementById("kieli").value;
  if (lang == "eng") {
    document.write("Hello world!");
  } else if (lang == "swe") {
    document.write("Hej världen!");
  } else {
    document.write("Hola Mundo!");
  }
}
