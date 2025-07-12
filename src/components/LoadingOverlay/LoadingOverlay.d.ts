import { PropsWithChildren } from '../../../node_modules/react';
interface LoadingOverlayProps extends PropsWithChildren {
    info?: string | boolean;
    error?: string | boolean;
    className?: string;
}
export declare const LoadingOverlay: ({ children, info, error, className }: LoadingOverlayProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map