import { FC } from '../../../node_modules/react';
import { SingleValue, ActionMeta } from 'react-select';
import { SelectOption } from './Select';
interface CreatableSelectProps {
    id: string;
    className?: string;
    options: SelectOption[];
    value?: SingleValue<SelectOption>;
    defaultInputValue?: string;
    onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
    onCreateOption?: (inputValue: string) => void;
    filterOption?: (option: SelectOption, inputValue: string) => boolean;
    label?: string;
    error?: string;
}
export declare const CreatableSelect: FC<CreatableSelectProps>;
export {};
//# sourceMappingURL=CreatableSelect.d.ts.map