import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
    };
    shadows: {
      [key: string]: string;
    };
    zIndices: {
      [key: string]: number;
    };
    fonts: {
      [key: string]: string;
    };
    sizes: {
      [key: string]: any;
    };
  }
}
