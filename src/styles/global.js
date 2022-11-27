import { createGlobalStyle } from "styled-components";

export const theme = {  
  colors: { 
    gray01: "#F8F9F9", 
    gray02: "#F8F9FF", 
    gray03: "#E9ECEF",
    gray04: "#DEE2E6",
    gray05: "#CED4DA",
    gray06: "#ADB5BD",
    gray07: "#868e96",
    gray08: "#495057", 
    black: "#000000",
  }, 
  spacing: {
    small: "1rem",
    medium: "2rem",
    large: "4rem",
  },
  margin: {
    small: "1rem",
    medium: "2rem",
    large: "4rem",
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1.6rem",
    large: "2.4rem",
  },
  radius: {
    small: "0.4rem",
    medium: "0.8rem",
    large: "1.6rem",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    /* border: 1px solid red; */
    text-decoration: none;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
  }

  body {
    font-family: 'Manrope', sans-serif;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.gray01};
  }

  html {
    font-size: 62.5%; /* 10px Novo Padrão */
  }

`;

