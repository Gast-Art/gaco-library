import { InputHTMLAttributes } from '../../../node_modules/react';
interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    error?: string;
}
export declare const DatePicker: ({ id, label, error, value, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DatePicker.d.ts.map