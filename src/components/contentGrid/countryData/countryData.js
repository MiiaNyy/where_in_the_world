import createCountryObj from "./createCountryObj";

function createCountryArr(response, randomNum) {
    let countries = [];
    for (let i = 0; i < randomNum.length; i++) {
        countries.push(createCountryObj(response[randomNum[i]]))
    }
    return countries;
}

async function fetchCountryData() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    if ( response.status !== 200 ) {
        throw new Error('cannot fetch the data');
    }
    return await response.json();
}

export { createCountryArr, fetchCountryData }