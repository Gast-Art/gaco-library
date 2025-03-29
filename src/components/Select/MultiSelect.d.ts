import { FC } from '../../../node_modules/react';
import { ActionMeta } from 'react-select';
import { SelectOption } from './Select';
interface MultiSelectProps {
    id: string;
    className?: string;
    options: SelectOption[];
    value?: SelectOption[];
    onChange: (selected: SelectOption[], actionMeta: ActionMeta<SelectOption>) => void;
    label?: string;
    error?: string;
}
export declare const MultiSelect: FC<MultiSelectProps>;
export {};
//# sourceMappingURL=MultiSelect.d.ts.map