import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    color: ${({ theme }) => theme.colors.anchorColor};
    &:hover {
      color: ${({ theme }) => theme.colors.anchorColorHover};
    }
  }

  * {
    box-sizing: border-box;
  }
`;
