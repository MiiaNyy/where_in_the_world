import styled from "styled-components";


const Container = styled.div`
  width: 90%;
  max-width: ${ props=>props.detailPage ? "1200px" : props.detailBtn ? "90%" : "1600px" };
  margin: ${ props=>props.detailPage ? "0 auto" : props.detailBtn ? "0 auto" : "4em auto"};
`;

/*----------
 HEADER
 ----------*/
const Header = styled.header`
  padding: 2em 1em;
  text-align: center;
  background-color: #101a21;
`;


const BtnContainer = styled.section
    `
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1em;
      padding: 1em;
      background-color: #101a21;
      border-top: 2px solid #202932;
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      @media (min-width: 450px) {
        flex-direction: row;
        align-items: center;
        gap: 3em;
      }
    `
;

/*----------
 MAIN CONTENT/GRID
 ----------*/
const Flex = styled.main
    `
      display: flex;
      justify-content: space-evenly;
      align-items: ${ props=>props.detailPage ? "center" : "unset" };      
      gap: ${ props=>props.detailPage ? "3em" : "2em" };
      flex-wrap: wrap;
      margin-bottom: 3em;      
    `
;

/*----------
 CARD STYLES
 ----------*/

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

/*----------
 DETAIL PAGE
 ----------*/
const TextWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 2em 0;
  background-color: hsl(209, 23%, 22%);;
  & > h2 {
    text-align: center;
  }
`;

const ListWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
  text-align: left;
  & > ul {
    list-style-type: none;
    padding: 0 1.5em 0;
  }
  & > li {
    margin-bottom: 0.2em;
  }
`;

export {
    Header,
    Container,
    Flex,
    BtnContainer,
    Card,
    CardContainer,
    CardTitle,
    TextWrapper,
    ListWrapper
}