import styled from "styled-components";




/* HEADER */

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

const Button = styled.button
    `
      min-width: 100px;
      padding: 0.5em 0;
      font-size: 1rem;
      font-weight: 600;
      font-family: inherit;
      color: hsl(0, 0%, 100%);
      background-color: #5AA1C2;
      border: 2px solid hsla(195, 31%, 5%, 0.9);
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      &:hover, &:focus {
        color: #5AA1C2;
        background-color: hsla(195, 31%, 5%, 0.9);
        border: 2px solid #5AA1C2;
        transform: scale(1.05);
      }
    `;

/* MAIN CONTENT/ GRID */
const MainContent = styled.main
    `
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 2em;
      width: 90%;
      max-width: 1200px;
      margin: 2em auto;
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
    Button,
    BtnContainer,
    Card,
}