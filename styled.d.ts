import { theme } from 'src/theme';
import 'styled-components';

declare module 'styled-components' {
  type MyTheme = typeof theme;

  export interface DefaultTheme extends MyTheme {}
}
