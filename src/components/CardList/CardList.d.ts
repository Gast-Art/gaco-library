import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
export interface CardProps extends PropsWithChildren {
    className?: string;
    id: string | number;
    title?: ReactNode;
    content?: ReactNode;
    rightColumn?: ReactNode;
    leftColumn?: ReactNode;
    onClick?: () => void;
}
interface CardListProps extends PropsWithChildren {
    cards?: CardProps[];
    columns?: number;
}
export declare const CardList: ({ children, cards, columns }: CardListProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CardList.d.ts.map