import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }

  * {
    box-sizing: border-box;
  }
`;
