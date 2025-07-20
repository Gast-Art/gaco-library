import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Table } from './Table';
declare const meta: Meta<ComponentProps<typeof Table>>;
export default meta;
export declare const Default: StoryObj<ComponentProps<typeof Table>>;
export declare const EmptyData: StoryObj<ComponentProps<typeof Table>>;
export declare const InlineTable: StoryObj<ComponentProps<typeof Table>>;
export declare const GroupedRows: StoryObj<ComponentProps<typeof Table>>;
interface TextInputColumnProps {
    name: string;
    age: number;
    email: string;
}
export declare const TextInputColumn: StoryObj<ComponentProps<typeof Table> & {
    data: TextInputColumnProps[];
}>;
interface SelectInputColumnProps {
    name: string;
    favoriteColor: string;
    email: string;
}
export declare const SelectColumn: StoryObj<ComponentProps<typeof Table> & {
    data: SelectInputColumnProps[];
}>;
//# sourceMappingURL=Table.stories.d.ts.map