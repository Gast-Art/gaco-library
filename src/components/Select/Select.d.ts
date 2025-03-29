import { FC } from '../../../node_modules/react';
import { ActionMeta, SingleValue } from 'react-select';
export interface SelectOption {
    value: string;
    label: string;
    onClick?: () => void;
    border?: boolean;
}
export interface SelectProps {
    id: string;
    className?: string;
    options: SelectOption[];
    value?: SingleValue<SelectOption>;
    onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
    label?: string;
    error?: string;
}
export declare const Select: FC<SelectProps>;
//# sourceMappingURL=Select.d.ts.map