import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.primaryText};
      font-style: ${(props) => props.theme.fontStyled};
      line-height: 1.4;
      scroll-behavior: smooth;
      font-size: 1em;
      @media (min-width: 768px) {
      line-height: 1.8;
    }
  }
    //? USAR SOLO EN EL TITULO
    h1{
      font-size: 1rem;
      font-weight: bold;    
      margin: 0;
      color: ${(props) => props.theme.main};  
      @media (min-width: 768px) {
        font-size: 1.2rem;
        
      }
    }
    
    //? USAR SOLO EN LOS NOMBRES DEL MODULO
    h2 {
      font-size: 0.8rem; 
      @media (min-width: 768px) {
      font-size: 1rem;
      }
    }
    //? TITULOS INTERNOS
    h3 {
      font-size: 1.1rem;      
      font-weight: bold;
      @media (min-width: 768px) {
      }
    }
    
    a{
      text-decoration:none;
    }
        
`;

export default GlobalStyle;
