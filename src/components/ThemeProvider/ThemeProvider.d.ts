import { ReactNode, FC } from '../../../node_modules/react';
export declare enum ThemeOptions {
    light = "light",
    dark = "dark"
}
interface ThemeClientProps {
    children: ReactNode;
    theme?: ThemeOptions;
}
export declare const ThemeProvider: FC<ThemeClientProps>;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map