import { v4 as uuidv4 } from 'uuid';


function createCountryObj(obj) {
    return {
        name: obj.name,
        nativeName: obj.nativeName,
        capital: obj.capital,
        population: numberWithSpaces(obj.population),
        currencies: {
            name: obj.currencies[0].name,
            symbol: obj.currencies[0].symbol,
        },
        languages: getLanguagesNames(obj.languages),
        borders: obj.borders,
        region: obj.region,
        subregion: obj.subregion,
        flags: obj.flag,
        id: uuidv4(),
    }
}

// Adds space after every 3 numbers so bigger population numbers are easier to read
function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Api gives different languages in a array of object, where is different information about them. We only
// need the language name.
function getLanguagesNames(arr) {
    let languages = [];
    for (let i = 0; i < arr.length; i++) {
        languages.push(arr[i].name);
    }
    return languages;
}

export default createCountryObj;