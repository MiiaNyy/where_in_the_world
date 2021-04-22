import React from 'react';

import { CardTitle, Container, Flex } from "../styledComponents/styles";
import { Link } from "react-router-dom";

function CountryDetail(props) {
    //const country = props.location.state;
    const country = props.obj;
    return (
        <>
            <div className="container">
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
                        <p><strong>Capital</strong>: { country.capital }</p>
                        <p><strong>Region</strong> : { country.region }</p>
                        <p><strong>Population</strong> : { country.population }</p>
                        <p><strong>Capital</strong>: { country.capital }</p>
                        <p><strong>Region</strong> : { country.region }</p>
                        <p><strong>Population</strong> : { country.population }</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CountryDetail;