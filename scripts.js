function convertCurrency() {
const usdInput = document.querySelector("#input-usd");
const displayCHf = document.querySelector("#franc-ch");

const input = usdInput.value;
const CHfExchangeRate = 1.09;

displayCHf.innerHTML = (input * CHfExchangeRate).toFixed(2);
}

document.getElementById("input-usd").addEventListener("input", convertCurrency);