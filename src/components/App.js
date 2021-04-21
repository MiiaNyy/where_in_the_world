import React from 'react';
import ContentGrid from "./ContentGrid";

import {Container, BtnContainer} from "../styledComponents/styles";

function App() {
    return (
        <Container>
            <header>
                <h1>Where in the world</h1>
                <p>Browse different countries and learn more about them</p>
            </header>
            <BtnContainer>
                <button>Next</button>
                <button>Prev</button>
            </BtnContainer>

            <ContentGrid/>
        </Container>
    );
}

export default App;