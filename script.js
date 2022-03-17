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
    // console.log("data", data);
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

document.querySelector("#holidays-btn").addEventListener("click", () => {
  renderHolidays();
});

const getHolidays = async () => {
  try {
    let countryKey = document.querySelector("#country-query").value;
    if (countryKey === "") {
      countryKey = "VN";
    }
    let month = document.querySelector("#month-query").value;
    let day = document.querySelector("#day-query").value;
    changeCountry(countryKey);
    const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=${countryKey}&year=2021&month=${month}&day=${day}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log("data", data)
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const renderHolidays = async () => {
  try {
    const data = await getHolidays();
    const holidayList = document.querySelector("#holidays-list");
    const ulHolidayList = holidayList.children[1];
    ulHolidayList.innerHTML = "";
    data.holidays.forEach((holiday, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
      <div class="li-wrapper">
        <div class="li-title">${holiday.name}</div>
        <div class="li-text">${holiday.weekday.date.name} , ${holiday.date}</div>
      </div>`;
      ulHolidayList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};

const changeCountry = async (countryCheck) => {
  try {
    const data = await getCountries();
    const holidayList = document.querySelector("#holidays-list");
    const ulHolidayTitle = holidayList.children[0];
    data.countries.forEach((country, index) => {
      if(country.code === countryCheck) {
        ulHolidayTitle.innerHTML = `Holidays of ${country.name}`
      }
    })
  } catch(err) {
    console.log("err", err);
  }
}