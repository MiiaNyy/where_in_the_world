import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

import PrimaryCountryDetails from "./PrimaryCountryDetails";

import fetchBorderCountriesNames from "./helperFunctions/fetchBorderCountriesNames";
import { CardTitle, Container, Flex } from "../styledComponents/styles";


function CountryDetail(props) {
    const [borderCountries, setBorderCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    const country = props.location.state;



    useEffect(()=>{
        let borders = country.borders;
        if ( borders.length === 0 ) {
            setBorderCountries(['No border countries'])
            setLoading(true);
        } else {
            fetchBorderCountriesNames(borders, setLoading, setBorderCountries);
        }
    }, [])

    return (
        <div>
            <div className="container btn__cont">
                <Link to="/" className="link detail__link">
                    <i className="fas fa-arrow-left"/>
                    &nbsp;&nbsp; Go Back
                </Link>
            </div>

            <div className="container">
                <div className="detail__flex">
                    <img src={ country.flags } alt={ `${ country.name } flag` } width="600" height="400"/>
                    <div className="detail__text">
                        <h2>{ country.name }</h2>
                        <PrimaryCountryDetails borderCountries={ borderCountries } country={ country }
                                               loading={ loading }/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CountryDetail;