// En saanut jostain syystä nappeja toimimaan niin lähestulkoon kaikki on testaamatonta ja ei välttämättä toimi niinkuin pitäisi.

function t1() {
  let parilliset = parseInt(document.getElementById("t1").value);

  for (let i = 0; i >= parilliset; i + 2)
    document.getElementById("t1o").innerText = i;
}

function t2() {
  let salasana1 = document.getElementById("t2").value;
  let salasana2;

  for (let i = 0; i < salasana1.length; i++) {
    salasana2 = salasana1[i] + "Ö";
  }
  document.getElementById("t2o").innerText + salasana2;
}

function t3() {
  let checkFor = document.getElementById("t3").value;

  for (let i = 0; i < checkFor.length; i++) {
    if (checkFor[i] == "Ö" || checkFor[i] == "ö") {
      document.getElementById("t3o").innerText = "Sanassa on ö kirjain";
    } else {
      document.getElementById("t3o").innerText = "Sanassa ei ole ö kirjainta";
    }
  }
}

function t4() {
  let num = parseInt(document.getElementById("t4").value);

  if (num === 0 || num === 1) {
    document.getElementById("t4o").innerText + num;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    document.getElementById("t4o").innerText + num;
  }
}

function t5() {
  let num = parseInt(document.getElementById("t5").value);

  for (let i = 0; i < num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      document.getElementById("t5o").innerText + "FizzBuzz";
    } else if (i % 5 === 0) {
      document.getElementById("t5o").innerText + "Buzz";
    } else if (i % 3 === 0) {
      document.getElementById("t5o").innerText + "Fizz";
    } else {
      document.getElementById("t5o").innerText + i;
    }
  }
}

function t6() {
  for (let i = 0; i <= 10; i++) {
    document.getElementById("t6o").innerText + [i];
  }
}

function t7() {
  let num = 0;
  for (let i = 0; i < 11; i++) {
    num += [i];
  }
  if ((i = 10)) {
    document.getElementById("t7o").innerText = num;
  }
}

function t8() {
  let luku1 = parseInt(document.getElementById("t8l1").value);
  let luku2 = parseInt(document.getElementById("t8l2").value);

  for (let i = 0; i < luku2; i++) {
    luku1 *= luku2;
  }
  document.getElementById("t8o").innerText = luku1;
}

function t9() {
  let kaikkiLuvut = {
    luku1: { value: parseInt(document.getElementById("t9l1").value) },
    luku2: { value: parseInt(document.getElementById("t9l2").value) },
    luku3: { value: parseInt(document.getElementById("t9l3").value) },
    luku4: { value: parseInt(document.getElementById("t9l4").value) },
    luku5: { value: parseInt(document.getElementById("t9l5").value) },
  };

  let maxLuku = 0;
  let minLuku = 0;

  let luvut = Object.values(kaikkiLuvut);

  luvut.map((el) => {
    let lukujenArvot = el.value;
    maxLuku = Math.max(maxLuku, lukujenArvot);
    document.getElementById("t9o1").innerText = maxLuku;
  });

  luvut.map((el) => {
    let lukujenArvot = el.value;
    minLuku = Math.min(minLuku, lukujenArvot);
    document.getElementById("t9o2").innerText = minLuku;
  });
}

function t10() {
  let salasana = document.getElementById("t10").value;
  let uusiSalasana = "";
  let kirjaimet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let kirjainPituus = kirjaimet.length;

  for (let i = 0; i < salasana.length; i++) {
    uusiSalasana =
      salasana[i] + kirjaimet.charAt(Math.floor(Math.random() * kirjainPituus));
  }
  document.getElementById("t10o").innerText = uusiSalasana;
}

function t11() {
  let smallerNumber = parseInt(document.getElementById("t11l1").value);
  let biggerNumber = parseInt(document.getElementById("t11l2").value);

  if (pienempi % 2 === 0) {
    // Pienempi numero on parillinen
    let odds = smallerNumber;
    let even = smallerNumber;
    for (let i = 0; i <= biggerNumber; i++) {
      odds += 2;
      even += 2;
      document.getElementById("t11o1").innerText + even;
      document.getElementById("t11o2").innerText + odds;
    }
  } else {
    // Pienempi numero on pariton
    let even = smallerNumber + 1;
    let odds = smallerNumber;
    for (let k = 0; k <= biggerNumber; i++) {
      odds += 2;
      even += 2;
      document.getElementById("t11o1").innerText + even;
      document.getElementById("t11o2").innerText + odds;
    }
  }
}
