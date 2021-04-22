import { v4 as uuidv4 } from "uuid";
import React from "react";

function PrimaryDetails(props) {

    const country = props.country;
    if ( props.loading ) {
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
                    <li><strong>Currency</strong> : { country.currencies.name }, { country.currencies.symbol } </li>
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
            { props.arr.map((item)=><li key={ uuidv4() }>{ item }</li>) }
        </ul>

    )
}

export default PrimaryDetails;