let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.228;
let rateEUR = 4.685;

formElement.addEventListener("submit", (event) => {

    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    
    let result;

switch (currency) {

    case "USD":
        result = amount*rateUSD;
        break;

    case "EUR":
        result = amount*rateEUR;
        break;
}
    resultElement.innerText = `${result.toFixed(2)}`

})
