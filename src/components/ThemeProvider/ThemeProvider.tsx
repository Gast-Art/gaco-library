'use client';

import { lightTheme, darkTheme } from '../../theme';
import { ReactNode, FC } from 'react';
import { ThemeProvider as ThemeProviderRoot } from 'styled-components';

export enum ThemeOptions {
  light = 'light',
  dark = 'dark',
}

interface ThemeClientProps {
  children: ReactNode;
  theme?: ThemeOptions;
}

export const ThemeProvider: FC<ThemeClientProps> = ({ children, theme = ThemeOptions.dark }) => (
  <ThemeProviderRoot theme={theme === ThemeOptions.dark ? darkTheme : lightTheme}>{children}</ThemeProviderRoot>
);
