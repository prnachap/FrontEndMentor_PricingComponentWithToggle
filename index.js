// Change price based on selection
const inputValue = document.querySelector("input");

inputValue.addEventListener("click", () => {
  const priceArray = Array.from(document.querySelectorAll(".price__monthly"));
  monthlyPrices = ["$19.99", "$24.99", "$39.99"];
  annualPrices = ["$199.99", "$249.99", "$399.99"];

  if (inputValue.checked === true) {
    for (let i = 0; i < annualPrices.length; i++) {
      priceArray[i].textContent = annualPrices[i];
    }
  } else {
    for (let i = 0; i < monthlyPrices.length; i++) {
      priceArray[i].textContent = monthlyPrices[i];
    }
  }
});
