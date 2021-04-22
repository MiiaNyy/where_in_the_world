import React, { useEffect, useState } from 'react'
import regeneratorRuntime from "regenerator-runtime";

import { createCountryArr, fetchCountryData } from "./countryData/countryData";

import CountryCard from "./CountryCard";

import { BtnContainer, Container, Flex } from "../../styledComponents/Styles"
import { decreaseIndex, increaseIndex } from "../../helperFunctions/changeIndex";
import { setItemsToStorage, getItemsFromStorage } from "../../helperFunctions/localStorage";

const randomNumbers = [205, 141, 77, 194, 171, 75, 50, 190, 218, 21, 244, 24, 202, 109, 80, 59, 173, 103, 44, 239];

function ContentGrid() {
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    getItemsFromStorage('currentIndex', setCurrentIndex, currentIndex);
    setItemsToStorage('currentIndex', currentIndex);

    useEffect(()=>{
        fetchCountryData()
            .then((response)=>{
                setCountries(createCountryArr(response, randomNumbers));
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




export default ContentGrid;