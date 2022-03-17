const API_KEY = "d06ac405-89a6-4e0a-beb3-800d37172570";
//RENDER COUNTRIES LIST
document.getElementById("countries-list-btn").addEventListener("click", () =>{
    renderCountries();
})

const getCountries = async ()=>{
    try{
        const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`
        //here is how we add a dynamic value (API KEY) to the url
        const res = await fetch(url)
        const data = await res.json()
        // console.log("data", data) //have a look the retrieved data
        return data
    } catch(err){
        console.log("err", err)
    }
}

const renderCountries = async()=>{
    try{
        //1. Fetch all the countries by using function `getCountries`
        const data = await getCountries()

        //2. Find the element with the id `countries-list`
        const countriesList = document.getElementById("countries-list")

        //3. Take out the `ul` element
        const ulCountriesList = countriesList.children[2]

        //4. Delete the sample inside `ul` element
        ulCountriesList.innerHTML=""

        //5. Loop through the list of countries
        data.countries.forEach((country, index)=>{
            //Create new `li` for each element
            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${country.code}</div>
            </div>`;

            //Then append them to the `ul` element
            ulCountriesList.appendChild(x)
        })
    } catch(err){
        console.log("err", err)
    }
}