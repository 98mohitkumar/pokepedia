import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ThemeType } from "./theme";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    @media screen and (hover: none) and (pointer: coarse) {
      -webkit-tap-highlight-color: transparent; 
    }

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.25rem;
    background: ${(props) => props.theme.colors.background};
    color: #000;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.main};
  }

  p{
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }
  
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
