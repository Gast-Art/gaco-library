import { ActionMeta, SingleValue } from 'react-select';
import { SelectOption } from './Select';
export interface CreatableSelectProps {
    id: string;
    className?: string;
    options: SelectOption[];
    value?: SingleValue<SelectOption>;
    defaultInputValue?: string;
    createOptionPosition?: 'first' | 'last';
    onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
    onCreateOption?: (inputValue: string) => void;
    filterOption?: (option: SelectOption, inputValue: string) => boolean;
    label?: string;
    error?: string;
    isClearable?: boolean;
    noOptionsMessage?: () => string;
}
export declare const CreatableSelect: import('../../../node_modules/react').ForwardRefExoticComponent<CreatableSelectProps & import('../../../node_modules/react').RefAttributes<any>>;
//# sourceMappingURL=CreatableSelect.d.ts.map