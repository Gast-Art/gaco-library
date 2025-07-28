import { ColumnDef, OnChangeFn, RowData, RowSelectionState } from '@tanstack/react-table';
export type ExtendedColumnDef<TData extends {
    [key: string]: any;
}> = ColumnDef<TData> & {
    updateGroup?: boolean;
};
declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (updater: (old: TData[]) => TData[]) => void;
    }
}
type TableProps<TData extends {
    [key: string]: any;
}> = {
    data: TData[];
    setData?: (data: TData[]) => void;
    columns: ExtendedColumnDef<TData>[];
    groupBy?: string;
    inline?: boolean;
    enableRowSelection?: boolean;
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    rowSelection?: RowSelectionState;
    groupSelectionLabel?: string;
};
export declare const Table: <TData extends {
    [key: string]: any;
}>({ data, setData, columns, groupBy, enableRowSelection, rowSelection, onRowSelectionChange, groupSelectionLabel, inline, }: TableProps<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map