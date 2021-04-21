function createCountryObj(obj) {
    return {
        name: obj.name,
        nativeName: obj.nativeName,
        capital: obj.capital,
        population: obj.population,
        currencies: {
            name: obj.currencies[0].name,
            symbol: obj.currencies[0].symbol,
        },
        languages: getLanguages(obj.languages),
        borders: getBorderCountriesNames(obj.borders),
        region: obj.region,
        subregion: obj.subregion,
        flags: obj.flag,
    }
}

function getBorderCountriesNames(arr) {
    let borderCountries = [];

    for (let i = 0; i < arr.length; i++) {
        let countryCode = arr[i];
        fetchBorderCountry(countryCode)
            .then((response)=>{
                borderCountries.push(response.name);
            })
    }
    return borderCountries;
}

async function fetchBorderCountry(countryCode) {
    const response = await fetch("https://restcountries-v1.p.rapidapi.com/alpha/" + countryCode, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7a94a0dbcfmsh47721c473016170p131753jsn825aeddb6e44",
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com"
        }
    });
    if ( response.status !== 200 ) {
        throw new Error('cannot fetch border country data');
    }
    return await response.json();
}

function getLanguages(arr) {
    let languages = [];
    for (let i = 0; i < arr.length; i++) {
        languages.push(arr[i].name);
    }
    return languages;
}

export default createCountryObj;