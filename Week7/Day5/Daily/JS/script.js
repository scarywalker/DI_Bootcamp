const convert = document.querySelector('#convert');
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const amount = document.querySelector("#amount");
const response = document.querySelector("#response");

const currenciesAvailable = async function () {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/be3f6a56a61da1379d642a6a/codes`);
    const results = await response.json();
    return results.supported_codes;
  } catch (error) {
    console.error("Failed to fetch currency codes:", error);
    return [];
  }
};

currenciesAvailable()
  .then(codes => {
    codes.forEach(code => {
      const [codeValue, codeName] = code;
      const fromOption = document.createElement("option");
      fromOption.value = codeValue;
      fromOption.text = codeValue;
      from.appendChild(fromOption);
      const toOption = document.createElement("option");
      toOption.value = codeValue;
      toOption.text = codeValue;
      to.appendChild(toOption);
    });
  })
  .catch(error => {
    console.error("Failed to fetch currency codes:", error);
  });

async function convertCurrencies(currency1, currency2, currency1Amount) {
  try {
    const rate = async function () {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/be3f6a56a61da1379d642a6a/pair/${currency1}/${currency2}`);
      const results = await response.json();
      return results.conversion_rate;
    }
    const conversionRate = await rate();
    const convertedAmount = currency1Amount * conversionRate;
    return `${currency1Amount} ${currency1} = ${convertedAmount} ${currency2}`;
  } catch (error) {
    console.error("Currency conversion error:", error);
    return "Currency conversion failed";
  }
}

function appendResponse(string) {
  response.textContent = string;
}

convert.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fromText = from.options[from.selectedIndex].text;
  const toText = to.options[to.selectedIndex].text;
  const amountValue = amount.value;
  try {
    const converted = await convertCurrencies(fromText, toText, amountValue);
    appendResponse(converted);
  } catch (error) {
    console.error("Conversion failed:", error);
    appendResponse("Conversion failed");
  }
});

const rate = async function () {
  try {
    const responsed = await fetch(`https://v6.exchangerate-api.com/v6/be3f6a56a61da1379d642a6a/pair/EUR/GBP`)
    const results = await responsed.json()
    return results['conversion_rate'];
  } catch (error) {
    console.error("Rate fetch error:", error);
    return "Rate fetch failed";
  }
}
