import { ColumnDef, OnChangeFn, RowData, RowSelectionState } from '@tanstack/react-table';
declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (updater: (old: TData[]) => TData[]) => void;
    }
}
type TableProps<TData extends {
    [key: string]: any;
}> = {
    className?: string;
    data: TData[];
    setData?: (data: TData[]) => void;
    columns: ColumnDef<TData, any>[];
    groupBy?: string;
    inline?: boolean;
    enableRowSelection?: boolean;
    enableGroupSelection?: boolean;
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    rowSelection?: RowSelectionState;
    groupSelectionLabel?: string;
    stickyHeader?: boolean;
};
export declare const Table: <TData extends {
    [key: string]: any;
}>({ className, data, setData, columns, groupBy, enableRowSelection, enableGroupSelection, rowSelection, onRowSelectionChange, groupSelectionLabel, inline, stickyHeader, }: TableProps<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map