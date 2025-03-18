import { CSSProperties, FC, PropsWithChildren } from '../../../node_modules/react';
export declare const CardContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const CardSections: {
    Title: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>, never>> & string;
    Content: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    LeftColumn: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    RightColumn: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};
interface CardProps extends PropsWithChildren {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    loading?: string;
}
export declare const Card: FC<CardProps>;
export {};
//# sourceMappingURL=Card.d.ts.map