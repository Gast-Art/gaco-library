import { FC } from '../../../node_modules/react';
import { ActionMeta } from 'react-select';
export interface MultiSelectOption {
    value: string;
    label: string;
}
interface MultiSelectProps {
    className?: string;
    options: MultiSelectOption[];
    value: MultiSelectOption[];
    onChange: (selected: MultiSelectOption[], actionMeta: ActionMeta<MultiSelectOption>) => void;
    label?: string;
}
export declare const MultiSelect: FC<MultiSelectProps>;
export {};
//# sourceMappingURL=MultiSelect.d.ts.map