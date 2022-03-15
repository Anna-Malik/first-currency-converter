let amountElement = document.querySelector(".js-amount");
let rateElement = document.querySelector(".js-rate");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {

    event.preventDefault();

    let amount = amountElement.value;
    let rate = rateElement.value;
    let result = amount * rate;

    resultElement.innerText = result.toFixed(2);

})
