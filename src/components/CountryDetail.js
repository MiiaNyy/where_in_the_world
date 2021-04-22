import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CardTitle, Container, Flex } from "../styledComponents/styles";
import { Link } from "react-router-dom";


async function fetchBorderCountry(countryCode) {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${ countryCode }`);
    if ( response.status !== 200 ) {
        throw new Error('cannot fetch border country data');
    }
    return await response.json();
}

function CountryDetail(props) {
    const [borderCountries, setBorderCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    //const country = props.location.state;
    const country = props.obj;


    useEffect(()=>{
        console.log(country.borders)
        let borders = country.borders;
        if(borders.length === 0) {
            setBorderCountries(['No border countries'])
            setLoading(true);
        } else {
            for (let i = 0; i < borders.length; i++) {
                fetchBorderCountry(borders[i])
                    .then((response)=>{
                        console.log('border countris name is ' + response[0].name);
                        setBorderCountries((prev) => {
                            return [...prev, response[0].name]
                        })
                        setLoading(true);
                    })
            }
        }

    }, [])

    return (
        <>
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
                        <PrimaryDetails borderCountries={ borderCountries } country={ country }
                                        loading={ loading }/>
                    </div>
                </div>
            </div>
        </>

    );
}

function PrimaryDetails(props) {

    const country = props.country;
    if ( props.loading ) {
        console.log('border countries are ' + props.borderCountries);
        return (
            <div className="detail__primary">
                <ul>
                    <li><strong>Native name</strong>: { country.nativeName }</li>
                    <li><strong>Capital</strong>: { country.capital }</li>
                    <li><strong>Population</strong> : { country.population }</li>
                </ul>

                <ul>
                    <li><strong>Region</strong> : { country.region }</li>
                    <li><strong>Subregion</strong> : { country.subregion }</li>
                </ul>

                <ul>
                    <li><strong>Languages</strong>:
                        <Sublist arr={ country.languages }/>
                    </li>
                    <li><strong>Borders</strong>:
                        <Sublist arr={ props.borderCountries }/>
                    </li>
                    <li>
                        <strong>Currency</strong> : { country.currencies.name }, { country.currencies.symbol }
                    </li>
                </ul>

            </div>
        )
    } else {
        return <><p>Loading not finished</p></>
    }
}

function Sublist(props) {
    return (
        <ul>
            {
                props.arr.map((item)=><li key={ uuidv4() }>{ item }</li>)
            }
        </ul>

    )
}

export default CountryDetail;