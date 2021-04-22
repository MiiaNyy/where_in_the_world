import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CardGrid from "./ContentGrid";
import CountryInfo from "./CountryInfo";

import { increaseIndex, decreaseIndex } from "./helperFunctions/changeIndex";
import { Button, BtnContainer } from "../styledComponents/Styles";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log('index is  ' + currentIndex);
    return (
        <Router>
            <header>
                <h1>Where in the world</h1>
                <p>Browse different countries and learn more about them</p>
            </header>
            <BtnContainer>
                <Button onClick={ ()=>decreaseIndex(currentIndex, setCurrentIndex) }>Prev</Button>
                <Button onClick={ ()=>increaseIndex(currentIndex, setCurrentIndex) }>Next</Button>
            </BtnContainer>
            <Switch>
                <Route exact path="/" render={(props) => <CardGrid {...props}  targetIndex={ currentIndex } />} />
                <Route exact path="/:id" component={ CountryInfo }/>
            </Switch>


        </Router>
    );
}


export default App;