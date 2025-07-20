import { ColumnDef, RowData } from '@tanstack/react-table';
declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    }
}
type TableProps<TData extends object> = {
    data: TData[];
    setData: (data: TData[]) => void;
    columns: ColumnDef<TData>[];
    groupBy?: string[];
    inline?: boolean;
};
export declare const Table: <TData extends object>({ data, setData, columns, groupBy, inline }: TableProps<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map