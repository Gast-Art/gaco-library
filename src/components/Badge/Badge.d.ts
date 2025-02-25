import { FC, HTMLAttributes } from '../../../node_modules/react';
declare const badgeStyles: {
    default: import('styled-components').RuleSet<object>;
    outline: import('styled-components').RuleSet<object>;
    error: import('styled-components').RuleSet<object>;
    success: import('styled-components').RuleSet<object>;
    warning: import('styled-components').RuleSet<object>;
};
export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof badgeStyles;
}
export declare const Badge: FC<BadgeProps>;
export {};
//# sourceMappingURL=Badge.d.ts.map