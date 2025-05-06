import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  
  body {
    background-color: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.fonts.main};    
  }
`;
