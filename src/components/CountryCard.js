import React from 'react';



function CountryCard(props) {
    const obj = props.obj;
    console.log(obj);
    return (
        <div className="card">
            <img src={ obj.flags } alt=""/>
            <p>{ obj.name }</p>
        </div>
    );
}

export default CountryCard;