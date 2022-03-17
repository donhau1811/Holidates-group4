const API_KEY = "d06ac405-89a6-4e0a-beb3-800d37172570";

const getCountries = async () => {
  try {
    const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};
const renderCountries = async () => {
  try {
    const data = await getCountries();
    const countriesList = document.getElementById("countries-list");
    const ulCountriesList = countriesList.children[2];
    ulCountriesList.innerHTML = "";
    data.countries.forEach((country, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
              <div class="li-wrapper">
                  <div class="li-title">${country.name}</div>
                  <div>Code: ${country.code}</div>
              </div>`;
      ulCountriesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};

document.getElementById("countries-list-btn").addEventListener("click", () => {
  renderCountries();
});

// 1. render Language list

const getLanguages = async () => {
  try {
    const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const renderLanguages = async () => {
  try {
    const data = await getLanguages();
    const languagesList = document.getElementById("languages-list");
    const ulLanguagesList = languagesList.children[2];
    ulLanguagesList.innerHTML = "";
    data.languages.forEach((language, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
              <div class="li-wrapper">
                  <div class="li-title">${language.name}</div>
                  <div>Code: ${language.code}</div>
              </div>`;
      ulLanguagesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};

document
  .querySelector("#languages-list-btn")
  .addEventListener("click", renderLanguages);
