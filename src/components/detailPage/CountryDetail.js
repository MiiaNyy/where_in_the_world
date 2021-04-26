import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import PrimaryCountryDetails from "./PrimaryCountryDetails";

import fetchBorderCountriesNames from "./fetchBorderCountriesNames";

import { Container, Flex, TextWrapper } from "../../StyledComponents";


function CountryDetail(props) {
    const [borderCountries, setBorderCountries] = useState([]);
    const [loadingComplete, setLoadingComplete] = useState(false);

    // current country obj
    const country = props.location.state;

    useEffect(()=>{
        const borders = country.borders;
        if ( borders.length === 0 ) {
            setBorderCountries(['No neighbouring countries'])
            //setLoadingComplete(true);
        } else {
            fetchBorderCountriesNames(borders, setLoadingComplete, setBorderCountries);
        }
    }, [])

    return (
        <div>
            <Container detailBtn>
                <Link to="/" className="link detail__link">
                    <i className="fas fa-arrow-left"/>
                    &nbsp;&nbsp; Go Back
                </Link>
            </Container>
            <Container detailPage>
                <Flex detailPage>
                    <img className="img_large" src={ country.flags } alt={ `${ country.name } flag` } width="600"
                         height="400"/>
                    <TextWrapper>
                        <h2>{ country.name }</h2>
                        <PrimaryCountryDetails borderCountries={ borderCountries } country={ country }
                                               loadingComplete={ loadingComplete }/>
                    </TextWrapper>
                </Flex>
            </Container>
        </div>
    );
}


export default CountryDetail;