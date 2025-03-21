/*  gode ideer og tips:

hvis du vil begrænse antallet af decimaler på dit resultat, så brug methoden toFixed(antal decimaler)  eks.  result.toFixed(2) giver et resultat med 2 decimaler

hvis du vil have navnet på din valuta med fra options i dit select tag, så undersøg denne linje...
 let myCurrency = mySelectElement.options[mySelectElement.selectedIndex].innerText
 prøv evt. at consol logge mySelectElement.options, hvor mySelectElement er det select element du har fundet i din DOM med getElementById()

 */
const valutaPick = document.getElementById('valuta');
const kroner = document.getElementById('dkk');
const calcBtn = document.getElementById('calcButton');
const result = document.getElementById('result');
const euroExchange = 7.46;
const dollarExchange = 6.88;
const poundExchange = 8.9;

console.log(valutaPick);
console.log(valutaPick.options[2].innerText);
const euro = (dkk, myCurrency) => {
  const res = dkk / euroExchange;
  result.innerHTML = `Du må få ${res.toFixed(2)} ${myCurrency}s for dine kroner`;
};
const dollar = (dkk, myCurrency) => {
  const res = dkk / dollarExchange;
  result.innerHTML = `Du må få ${res.toFixed(2)} ${myCurrency}s for dine kroner`;
};
const pound = (dkk, myCurrency) => {
  const res = dkk / poundExchange;
  result.innerHTML = `Du må få ${res.toFixed(2)} ${myCurrency}s for dine kroner`;
};

function exchange() {
  const dkk = parseFloat(kroner.value);
  let myCurrency = valutaPick.options[valutaPick.selectedIndex].innerText;
  if (dkk > 0) {
    switch (myCurrency) {
      case 'euro':
        euro(dkk, myCurrency);
        break;
      case 'dollars':
        dollar(dkk, myCurrency);
        break;
      case 'pounds':
        pound(dkk, myCurrency);
        break;
      default:
        break;
    }
  } else {
    console.alert('Indtast et tal højere end 0 din odder!');
  }
}

calcBtn.addEventListener('click', (e) => {
  e.preventDefault();
  exchange();
});

// const myValuta = valutaPick.options[valutaPick.selectedIndex].innerText;
// const dkk =  kroner.value;
// if (dkk > 0) {
// switch (myValuta) {
//     case ("euro"):
//         return dkk / euroExchange;
//         break;
//     case ("dollars"):
//         return dkk / dollarExchange;
//         break;
//     case ("pounds"):
//         return dkk / poundExchange;
//         break;
//     default:
//         break;
// } else {
//     console.alert("Skriv nu noget der er over 0 din odder!")
// }
// }
