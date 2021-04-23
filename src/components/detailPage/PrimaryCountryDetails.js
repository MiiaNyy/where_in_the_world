import React from "react";
import { v4 as uuidv4 } from "uuid";

import spinner from "../../images/spinner.svg" // https://loading.io/

import { Flex, ListWrapper } from "../../styledComponents/Styles";

function PrimaryDetails(props) {
    const country = props.country;

    if ( props.loadingComplete ) {
        return (
            <ListWrapper>
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
                    <li><strong>Currency</strong> : { country.currencies.name }, { country.currencies.symbol } </li>
                </ul>
            </ListWrapper>
        )
    } else {
        return <Flex><img src={ spinner } alt="page loader"/></Flex>
    }
}

function Sublist(props) {
    return (
        <ul>
            { props.arr.map((item)=><li key={ uuidv4() }>{ item }</li>) }
        </ul>

    )
}

export default PrimaryDetails;