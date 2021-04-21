import React, { useState } from 'react';
import ContentGrid from "./ContentGrid";

import {increaseIndex, decreaseIndex} from "./helperFunctions/changeIndex";
import { Button, BtnContainer } from "../styledComponents/Styles";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log('index is  ' + currentIndex);
    return (
        <>
            <header>
                <h1>Where in the world</h1>
                <p>Browse different countries and learn more about them</p>
            </header>
            <BtnContainer>
                <Button onClick={ ()=> decreaseIndex(currentIndex, setCurrentIndex)}>Prev</Button>
                <Button onClick={ ()=> increaseIndex(currentIndex, setCurrentIndex)}>Next</Button>

            </BtnContainer>

            <ContentGrid targetIndex={ currentIndex }/>
        </>
    );
}



export default App;