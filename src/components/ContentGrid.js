import React, { useEffect, useState } from 'react'
import regeneratorRuntime from "regenerator-runtime";

import getRandomNumberArr from "./helperFunctions/randomNumber";
import createCountryObj from "./helperFunctions/createCountryObj";

import CountryCard from "./CountryCard";

import { MainContent } from "../styledComponents/styles"

function ContentGrid() {
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState('');

    useEffect(()=>{
        fetchCountryData()
            .then((response)=>{
                setCountries(createCountryArr(response));
                setLoading(true);
            })
    }, []);


    if ( loading ) {
        return (
            <MainContent>
                { countries.map((country)=>{
                    return <CountryCard obj={ country } key={ country.id }/>
                }) }
            </MainContent>
        )

    } else {
        // This needs a loader
        return (
            <MainContent>
                <h1>loading not completed</h1>
            </MainContent>
        )
    }
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
    let numbers = getRandomNumberArr();
    for (let i = 0; i < numbers.length; i++) {
        countries.push(createCountryObj(response[numbers[i]]))
    }
    return countries;
}

export default ContentGrid;