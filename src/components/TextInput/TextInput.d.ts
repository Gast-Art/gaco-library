import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    type?: string;
    error?: string;
    icon?: ReactNode;
}
export declare const TextInput: ({ className, id, label, type, error, disabled, icon, ...props }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextInput.d.ts.map