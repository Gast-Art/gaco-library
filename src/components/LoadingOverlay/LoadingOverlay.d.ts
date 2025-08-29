import { PropsWithChildren } from '../../../node_modules/react';
interface LoadingOverlayProps extends PropsWithChildren {
    info?: string | boolean;
    error?: string | boolean;
    success?: string | boolean;
    className?: string;
}
export declare const LoadingOverlay: ({ children, info, error, success, className }: LoadingOverlayProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map