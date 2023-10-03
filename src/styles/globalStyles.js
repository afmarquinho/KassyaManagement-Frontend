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
    
  h1{
    font-size: 2.2rem;
    font-weight: bold;    
    margin: 0;
    color: ${(props) => props.theme.main};  
  }
  h2 {
    font-size: 1.4rem;
    font-weight: bold;    
    color: ${(props) => props.theme.secondaryText};  
  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
}
a{
  text-decoration:none;
}
        
`;

export default GlobalStyle;
