import React from 'react';
import { Card } from "../styledComponents/Styles"


function CountryCard(props) {
    const obj = props.obj;
    let focusState = props.focusState ? 'active' : ' ';

    return (
        <Card className={focusState}>
            <img className="card__img" src={ obj.flags } alt="country's flag"/>
            <div className="card__container">
                <div>
                    <p className="card__title">{ obj.name }</p>
                    <p><strong>Capital</strong>: { obj.capital }</p>
                    <p><strong>Region</strong> : { obj.region }</p>
                    <p><strong>Population</strong> : { obj.population }</p>
                </div>
                <CardBtn focusState={focusState}/>
            </div>
        </Card>
    );
}

function CardBtn(props) {
    if(props.focusState === 'active') {
        return (
            <>
                <a className="card__btn" href="#">More information &#8594;</a>
            </>
        )
    } else {
        return <></>
    }


}

export default CountryCard;