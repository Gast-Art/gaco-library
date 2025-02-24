import { ButtonHTMLAttributes } from '../../../node_modules/react';
declare const buttonVariants: {
    default: import('styled-components').RuleSet<object>;
    outline: import('styled-components').RuleSet<object>;
    ghost: import('styled-components').RuleSet<object>;
    destructive: import('styled-components').RuleSet<object>;
};
declare const buttonSizes: {
    default: import('styled-components').RuleSet<object>;
    lg: import('styled-components').RuleSet<object>;
    icon: import('styled-components').RuleSet<object>;
};
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
}
declare const Button: import('../../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export { Button };
//# sourceMappingURL=Button.d.ts.map