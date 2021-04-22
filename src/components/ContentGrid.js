import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import regeneratorRuntime from "regenerator-runtime";

import getRandomNumberArr from "./helperFunctions/randomNumber";
import createCountryObj from "./helperFunctions/createCountryObj";

import CountryCard from "./CountryCard";

import { BtnContainer, Container, Flex } from "../styledComponents/Styles"
import { decreaseIndex, increaseIndex } from "./helperFunctions/changeIndex";

function ContentGrid(props) {
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        fetchCountryData()
            .then((response)=>{
                setCountries(createCountryArr(response));
                setLoading(true);
            })
    }, []);

    if ( loading ) {
        return (
            <>
                <BtnContainer>
                    <button onClick={ ()=>decreaseIndex(currentIndex, setCurrentIndex) }>Prev</button>
                    <button onClick={ ()=>increaseIndex(currentIndex, setCurrentIndex) }>Next</button>
                </BtnContainer>
                <Container>
                    <Flex>
                        { countries.map((country, index)=>{
                            const focusStateOn = index === currentIndex;
                            return <CountryCard focusState={ focusStateOn } obj={ country } key={ country.id }/>
                        }) }
                    </Flex>
                </Container>
            </>
        )

    } else {
        // This needs a loader
        return (
            <Flex>
                <h1>loading not completed</h1>
            </Flex>
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