import React, { useEffect, useState } from 'react'
import regeneratorRuntime from "regenerator-runtime";


function App() {
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState('');

    useEffect(()=>{
        fetchCountryData()
            .then((response)=>{
                let arr = createCountryArr(response);
                console.log('country arr length is ' + arr.length);
                setCountries(arr);
                setLoading(true);
            })
    }, [])

    if ( loading ) {
        return (
            <>
                <h1>Loading completed</h1>
                { countries.map((item)=>{
                    return <p>{ item.name }</p>
                }) }
            </>
        )

    } else {
        return <h1>loading not compledted</h1> }


}


async function fetchCountryData() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    if ( response.status !== 200 ) {
        throw new Error('cannot fetch the data');
    }
    return await response.json();
}

function createCountryArr(response) {
    let countries = [];
    /* I want only 20 random country's */
    for (let i = 0; i < 20; i++) {
        /* There is 250 different countries */
        let num = Math.floor(Math.random() * 250);
        countries.push(createCountryObj(response[num]))
    }
    console.log('there is ' + countries.length + ' countries. First one is ' + countries[0].name)
    return countries;
}

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


export default App;