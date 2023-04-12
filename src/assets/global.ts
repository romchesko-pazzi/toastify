import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
