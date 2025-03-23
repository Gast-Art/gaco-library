import { TextareaHTMLAttributes } from '../../../node_modules/react';
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    label?: string;
    error?: string;
}
export declare const TextArea: ({ className, id, label, error, disabled, ...props }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextArea.d.ts.map