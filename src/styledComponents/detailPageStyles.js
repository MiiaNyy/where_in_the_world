import styled, { css } from "styled-components";



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

export { TextWrapper, ListWrapper }