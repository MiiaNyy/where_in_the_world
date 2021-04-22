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
        languages: getLanguages(obj.languages),
        borders: obj.borders,
        region: obj.region,
        subregion: obj.subregion,
        flags: obj.flag,
        id: uuidv4(),
    }
}


function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}



function getLanguages(arr) {
    let languages = [];
    for (let i = 0; i < arr.length; i++) {
        languages.push(arr[i].name);
    }
    return languages;
}

export default createCountryObj;