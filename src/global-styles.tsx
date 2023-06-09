import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    min-height:90vh;
  }

  button {
    cursor: pointer;
  }
  
`;

export default GlobalStyle;
