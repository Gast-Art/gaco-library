import { base } from './base';

export const darkTheme = {
  ...base,
  colors: {
    bg: '#000',
    mutedBg: '#111',
    text: '#fff',
    textMuted: '#999',
    contentBg: '#ffffff',
    separator: '#e0e0e0',
    border: '#e0e0e0',
    primary: '#0070f3',
    primaryForeground: '#ffffff',
    primaryHover: '#0056b3',
    textInputBorder: '#bbbbbb',
    textInputBorderFocus: '#666666',
    textInputLabel: '#666666',
    textInputDisabledBackground: '#f5f5f5',
    tableHeaderBg: '#f7f7f7',
    ...base.colors,
  },
};
