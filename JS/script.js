{
const welcome = () => {
    console.log("Hello World!")
}

const resultUpdateText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${result.toFixed(2)}`
}

const calculateResult = (amount, currency) => {

const rateUSD = 4.228;
const rateEUR = 4.685;

switch (currency) {

case "USD":
    return amount*rateUSD;

case "EUR":
    return amount*rateEUR;
     
}}

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    
    const result = calculateResult(amount, currency);

    resultUpdateText(amount, result, currency);

}

 const init = () => {

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);

    welcome();
}

init();
 
}
