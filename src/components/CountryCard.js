import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from "../styledComponents/Styles"


function CountryCard(props) {
    const obj = props.obj;
    let focusState = props.focusState ? 'active' : ' ';

    return (
        <Card className={ focusState }>
            <img className="card__img" src={ obj.flags } alt="country's flag"/>
            <div className="card__container">
                <div>
                    <p className="card__title">{ obj.name }</p>
                    <p><strong>Capital</strong>: { obj.capital }</p>
                    <p><strong>Region</strong> : { obj.region }</p>
                    <p><strong>Population</strong> : { obj.population }</p>
                </div>
                <CardBtn obj={ obj } focusState={ focusState }/>
            </div>
        </Card>
    );
}

function CardBtn(props) {
    const linkProps = {
        pathname: `/${ props.obj.id }`,
        param1: props.obj,
    }

    switch (props.focusState) {
        case 'active':
            return <Link to={ linkProps } className="card__btn">More information &#8594;</Link>
        default:
            return <></>
    }
}

export default CountryCard;