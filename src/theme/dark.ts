import { base } from './base';

export const darkTheme = {
  ...base,
  colors: {
    bg: '#000',
    text: '#fff',
    contentBg: '#ffffff',
    primary: '#0070f3',
    primaryForeground: '#ffffff',
    primaryHover: '#0056b3',
    textInputBorder: '#bbbbbb',
    textInputBorderFocus: '#666666',
    textInputLabel: '#666666',
    textInputDisabledBackground: '#f5f5f5',
    ...base.colors,
  },
};
