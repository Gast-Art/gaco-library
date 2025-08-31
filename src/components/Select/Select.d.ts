import { FocusEvent } from '../../../node_modules/react';
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
    onBlur?: (event: FocusEvent<HTMLDivElement>) => void;
    onFocus?: (event: FocusEvent<HTMLDivElement>) => void;
    label?: string;
    error?: string;
    noOptionsMessage?: () => string;
}
export declare const Select: import('../../../node_modules/react').ForwardRefExoticComponent<SelectProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Select.d.ts.map