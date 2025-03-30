import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
interface DialogProps extends PropsWithChildren {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: ReactNode;
    title?: string;
    content?: ReactNode;
    actions?: ReactNode;
}
export declare const Dialog: ({ trigger, open, onOpenChange, title, content, actions, children }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Dialog.d.ts.map