import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/components/GlobalStyle';
import { darkTheme, lightTheme } from '../src/theme';
import './fonts.css';

export const parameters = {
  viewMode: 'canvas',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: lightTheme.colors.bg,
      },
      {
        name: 'dark',
        value: darkTheme.colors.bg,
      },
    ],
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];
