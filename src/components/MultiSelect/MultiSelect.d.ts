import { FC } from '../../../node_modules/react';
export interface MultiSelectOption {
    value: string;
    label: string;
}
interface MultiSelectProps {
    options: MultiSelectOption[];
    value: MultiSelectOption[];
    onChange: (selected: any) => void;
    label?: string;
}
export declare const MultiSelect: FC<MultiSelectProps>;
export {};
//# sourceMappingURL=MultiSelect.d.ts.map