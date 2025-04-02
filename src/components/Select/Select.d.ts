import { FC } from '../../../node_modules/react';
import { ActionMeta, OptionsOrGroups, SingleValue } from 'react-select';
export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps {
    id: string;
    className?: string;
    options: OptionsOrGroups<SelectOption, {
        label: string;
        options: SelectOption[];
    }>;
    menuPortalTarget?: HTMLElement;
    value?: SingleValue<SelectOption>;
    onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
    label?: string;
    error?: string;
}
export declare const Select: FC<SelectProps>;
//# sourceMappingURL=Select.d.ts.map