//variabler
const valutaPick = document.getElementById('valuta');
const kroner = document.getElementById('dkk');
const calcBtn = document.getElementById('calcButton');
const result = document.getElementById('result');
const euroExchange = 7.46;
const dollarExchange = 6.88;
const poundExchange = 8.9;

//håndterer selve konverteringen og opdatering af resultatet
const euro = (dkk, myCurrency) => {
  const res = dkk / euroExchange;
  amount(res, myCurrency);
};
const dollar = (dkk, myCurrency) => {
  const res = dkk / dollarExchange;
  amount(res, myCurrency);
};
const pound = (dkk, myCurrency) => {
  const res = dkk / poundExchange;
  amount(res, myCurrency);
};
const amount = (res, myCurrency) => {
  result.innerHTML = `Du må få ${res.toFixed(2)} ${myCurrency}s for dine kroner`;
};
// TODO: refactor alt det her så det bare klares i switch statement istedet
function exchange() {
  const dkk = parseFloat(kroner.value); //gør at jeg OGSÅ kan tage decimaltal
  const myCurrency = valutaPick.options[valutaPick.selectedIndex].innerText; //svarer til hvad der er valgt i select elementet
  if (dkk > 0) {
    switch (myCurrency) {
      case 'euro':
        euro(dkk, myCurrency);
        break;
      case 'dollar':
        dollar(dkk, myCurrency);
        break;
      case 'pound':
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

//Ikke kigge på det her lort som jeg har slettet
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
