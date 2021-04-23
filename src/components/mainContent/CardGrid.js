import React, { useEffect, useState } from 'react'
import regeneratorRuntime from "regenerator-runtime";

import spinner from "../../images/spinner.svg" // https://loading.io/
import { createCountryArr, fetchCountryData } from "./createCountryData/fetchCountryData";
import CountryCard from "./CountryCard";

import { BtnContainer, Container, Flex } from "../../styledComponents/Styles"
import { decreaseIndex, increaseIndex } from "../../helperFunctions/changeIndex";
import { setItemsToStorage, getItemsFromStorage } from "../../helperFunctions/localStorage";

// When fetching country data, it returns array of objects that is 250 items long. We want only random 20 items.
const randomIndex = [205, 141, 77, 194, 171, 75, 50, 190, 218, 21, 244, 24, 202, 109, 80, 59, 173, 103, 44, 239];

function CardGrid() {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [countries, setCountries] = useState('');

    // This index tells which country from the array is currently selected
    const [currentIndex, setCurrentIndex] = useState(0);

    getItemsFromStorage('currentIndex', setCurrentIndex, currentIndex);
    setItemsToStorage('currentIndex', currentIndex);

    useEffect(()=>{
        fetchCountryData()
            .then((response)=>{
                setCountries(createCountryArr(response, randomIndex));
                setLoadingComplete(true);
            })
    }, []);

    if ( loadingComplete ) {
        return (
            <>
                <BtnContainer>
                    <button onClick={ ()=>decreaseIndex(currentIndex, setCurrentIndex) }>
                        <i className="fas fa-arrow-left"/> Prev
                    </button>
                    <button onClick={ ()=>increaseIndex(currentIndex, setCurrentIndex) }>
                        Next <i className="fas fa-arrow-right"/>
                    </button>
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
        return (
            <Flex><img src={ spinner } alt="page loader"/></Flex>
        )
    }
}

export default CardGrid;