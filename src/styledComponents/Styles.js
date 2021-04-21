import styled from "styled-components";


/* GENERAL/COMMON */
const BtnContainer = styled.section
    `
      display: flex;
      justify-content: center;
      gap: 1em;
      padding: 1em;
      background-color: rgba(0, 7, 15, 0.41);
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      @media (min-width: 550px) {
        flex-direction: row;
        align-items: center;
      }
    `
;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;



/* HEADER */



/* MAIN CONTENT/ GRID */
const MainContent = styled.main
    `
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 2em;
      margin-bottom: 2em;
      padding-top: 1em;
    `
;

const Card = styled.div
    `
      width: 210px;
      border-radius: 5px;
      background-color: hsl(209, 23%, 22%);
      font-size: 0.875rem;
      transition: all 0.2s ease-in-out;
    `;


export {
    MainContent,
    Container,
    BtnContainer,
    Card,
}