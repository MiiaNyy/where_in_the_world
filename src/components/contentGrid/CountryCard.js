import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContainer, CardTitle } from "../../styledComponents/Styles"


function CountryCard(props) {
    const obj = props.obj;
    let focusState = props.focusState ? 'active' : ' ';

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