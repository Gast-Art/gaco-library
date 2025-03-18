import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Figtree', sans-serif;
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

  h1 {
    font-size: ${({ theme }) => theme.sizes.fonts.xxl};
    font-weight: bold;
  }

  h2 {
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    font-weight: bold;
  }

  h3 {
    font-size: ${({ theme }) => theme.sizes.fonts.lg};
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
  }
`;
