import styled, { css } from "styled-components";

/* HEADER */
const Header = styled.header`
  padding: 2em 1em;
  text-align: center;
  background-color: #131D26;
`;


const BtnContainer = styled.section
    `
      display: flex;
      justify-content: center;
      gap: 1em;
      padding: 1em;
      background-color: hsla(195, 31%, 5%, 0.9);
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
  margin: 2em auto;
  border: 2px solid violet;

`;

/* MAIN CONTENT/ GRID */
const Flex = styled.main
    `
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 2em;
    `

;

const Card = styled.div
    `
      width: 210px;
      border-radius: 5px;
      background-color: hsl(209, 23%, 22%);
      font-size: 0.875rem;
      transition: all 0.2s ease-in-out;

      & > img {
        max-height: 120px;
        min-height: 120px;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    `;

const CardContainer = styled.div`
  margin-top: 1em;
  padding: 0 1.5em 1em;
`;

const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;


export {
    Header,
    Container,
    Flex,
    BtnContainer,
    Card,
    CardContainer,
    CardTitle,
}