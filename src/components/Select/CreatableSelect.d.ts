import { FC } from '../../../node_modules/react';
import { SingleValue, ActionMeta } from 'react-select';
import { SelectOption } from './Select';
interface CreatableSelectProps {
    id: string;
    className?: string;
    options: SelectOption[];
    value?: SingleValue<SelectOption>;
    onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
    onCreateOption?: (inputValue: string) => void;
    label?: string;
    error?: string;
}
export declare const CreatableSelect: FC<CreatableSelectProps>;
export {};
//# sourceMappingURL=CreatableSelect.d.ts.map