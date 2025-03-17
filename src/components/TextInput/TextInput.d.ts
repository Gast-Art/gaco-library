import { InputHTMLAttributes } from '../../../node_modules/react';
interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    id: string;
    label?: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: string;
}
export declare const TextInput: ({ className, id, label, value, onChange, type, error, disabled, ...props }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TextInput.d.ts.map