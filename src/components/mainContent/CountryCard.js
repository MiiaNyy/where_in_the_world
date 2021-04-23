import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContainer, CardTitle } from "../../styledComponents/Styles"

function CountryCard(props) {
    // Current country obj from arr
    const obj = props.obj;

    // If focusState is active, current item is selected
    const focusState = props.focusState ? 'active' : ' ';

    return (
        <Card className={ focusState }>
            <img src={ obj.flags } alt="country's flag"/>
            <CardContainer>
                <div>
                    <CardTitle>{ obj.name }</CardTitle>
                    <p><strong>Capital</strong>: { obj.capital }</p>
                    <p><strong>Region</strong> : { obj.region }</p>
                    <p><strong>Population</strong> : { obj.population }</p>
                </div>
                <CardBtn obj={ obj } focusState={ focusState }/>
            </CardContainer>
        </Card>
    );
}

function CardBtn(props) {
    const linkProps = {
        pathname: `/${ props.obj.id }`,
        state: props.obj,
    }
    // If element is selected, show link/button otherwise don't return anything
    switch (props.focusState) {
        case 'active':
            return (
                <Link to={ linkProps } className="link card__link">
                    More information &nbsp;&nbsp;
                    <i className="fas fa-arrow-right"/>
                </Link>
            )
        default:
            return <></>
    }
}

export default CountryCard;