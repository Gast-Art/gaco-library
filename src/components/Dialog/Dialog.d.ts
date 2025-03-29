import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
interface DialogProps extends PropsWithChildren {
    trigger: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    content?: string;
}
export declare const Dialog: ({ trigger, open, onOpenChange, title, content, children }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Dialog.d.ts.map