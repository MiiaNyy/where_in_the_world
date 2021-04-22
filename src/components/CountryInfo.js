import React from 'react';


function CountryInfo(props) {
    console.log(props.location.param1);
    return (
        <div>
            <h1>Welcome to country {props.location.param1.name} info page</h1>
        </div>
    );
}

export default CountryInfo;