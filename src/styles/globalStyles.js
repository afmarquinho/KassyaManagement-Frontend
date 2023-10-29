import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.primaryText};
      font-style: ${(props) => props.theme.fontStyled};
      font-size: 1.4rem;
      line-height: 1.4;
      scroll-behavior: smooth;
      @media (min-width: 768px) {
      font-size: 1.6rem;
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
a{
  text-decoration:none;
}
        
`;

export default GlobalStyle;
