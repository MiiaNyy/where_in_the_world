import styled, { css } from "styled-components";

/* HEADER */
const Header = styled.header`
  padding: 2em 1em;
  text-align: center;
  background-color: #101a21;
`;


const BtnContainer = styled.section
    `
      display: flex;
      justify-content: center;
      gap: 1em;
      padding: 1em;
      background-color: #101a21;
      border-top: 2px solid #202932;
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
  max-width: ${ props=>props.detailPage ? "1500px" : props.detailBtn ? "90%" : "1200px" };
  margin: ${ props=>props.detailPage ? "0 auto" : props.detailBtn ? "0 auto" : "4em auto"};
`;

/* MAIN CONTENT/ GRID */
const Flex = styled.main
    `
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      gap: ${ props=>props.detailPage ? "3em" : "2em" };
      margin-bottom: 3em;
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