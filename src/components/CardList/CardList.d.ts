import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { CardSize } from '../Card';
export interface CardProps extends PropsWithChildren {
    className?: string;
    id: string | number;
    size?: CardSize;
    title?: ReactNode;
    content?: ReactNode;
    rightColumn?: ReactNode;
    leftColumn?: ReactNode;
    onClick?: () => void;
}
interface CardListProps extends PropsWithChildren {
    cards?: CardProps[];
    loading?: string | boolean;
    columns?: number;
}
export declare const CardList: ({ children, cards, loading }: CardListProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CardList.d.ts.map