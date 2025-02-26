import { FC, HTMLAttributes } from '../../../node_modules/react';
declare const badgeStyles: (hasOnClick: boolean) => {
    default: import('styled-components').RuleSet<object>;
    primary: import('styled-components').RuleSet<object>;
    outline: import('styled-components').RuleSet<object>;
    error: import('styled-components').RuleSet<object>;
    success: import('styled-components').RuleSet<object>;
    warning: import('styled-components').RuleSet<object>;
};
type variants = keyof ReturnType<typeof badgeStyles>;
export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: variants;
    onClick: () => void;
}
export declare const Badge: FC<BadgeProps>;
export {};
//# sourceMappingURL=Badge.d.ts.map