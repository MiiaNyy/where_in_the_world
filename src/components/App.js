import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CardGrid from "./contentGrid/ContentGrid";
import CountryDetail from "./detailPage/CountryDetail";

import { Header } from "../styledComponents/Styles"

function App() {

    return (
        <Router>
            <Header>
                <h1>Where in the world</h1>
                <p>Browse different countries and learn more about them</p>
            </Header>
            <Switch>
                <Route exact path="/" component={ CardGrid }/>
                <Route exact path="/:id" component={ CountryDetail }/>
            </Switch>


        </Router>
    );
}


export default App;