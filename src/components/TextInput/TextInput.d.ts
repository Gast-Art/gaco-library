import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    type?: string;
    error?: string;
    icon?: ReactNode;
}
export declare const TextInput: import('../../../node_modules/react').ForwardRefExoticComponent<TextInputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextInput.d.ts.map