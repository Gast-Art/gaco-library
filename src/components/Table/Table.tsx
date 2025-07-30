import {
  ColumnDef,
  ColumnOrderState,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  GroupingState,
  OnChangeFn,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronRight as ChevronRightRoot } from 'lucide-react';
import { DragEvent, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { Checkbox } from '../Checkbox';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (updater: (old: TData[]) => TData[]) => void;
  }
}

const TableContainer = styled.div<{ $inline?: boolean }>`
  width: ${({ $inline }) => ($inline ? 'auto' : '100%')};
  display: ${({ $inline }) => ($inline ? 'inline-block' : 'block')};
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTh = styled.th<{ $isDragging?: boolean; $isDropTarget?: 'left' | 'right'; $sortable?: boolean; $sticky?: boolean }>`
  position: ${({ $sticky }) => ($sticky ? 'sticky' : 'static')};
  top: 0;
  z-index: 1;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.tableHeaderBg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  font-weight: normal;
  cursor: ${({ $sortable }) => ($sortable ? 'pointer' : 'grab')};
  color: ${({ $isDragging, theme }) => ($isDragging ? theme.colors.textMuted : theme.colors.text)};
  transition: background-color 0.2s ease-in-out;
  border-left: ${({ $isDropTarget, theme }) => ($isDropTarget === 'left' ? `1px solid ${theme.colors.border}` : 'none')};
  border-right: ${({ $isDropTarget, theme }) => ($isDropTarget === 'right' ? `1px solid ${theme.colors.border}` : 'none')};
  user-select: none;
  white-space: nowrap;
`;

const StyledTd = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const GroupRow = styled.tr`
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.tableGroupBg || theme.colors.tableHeaderBg};
`;

const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const ChevronRight = styled(ChevronRightRoot)<{ $expanded: boolean }>`
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-right: 0.5rem;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(90deg)' : 'rotate(0)')};
  transition: transform 0.2s ease-in-out;
`;

const SortIcon = styled(ArrowUpDown)<{ $direction?: 'asc' | 'desc' }>`
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  ${({ $direction }) => ($direction === 'asc' ? 'transform: rotate(180deg);' : $direction === 'desc' ? '' : 'opacity: 0.5;')}
`;

const GroupCount = styled.span`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const GroupSelectionLabel = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
`;

type TableProps<TData extends { [key: string]: any }> = {
  className?: string;
  data: TData[];
  setData?: (data: TData[]) => void;
  columns: ColumnDef<TData, any>[];
  groupBy?: string;
  inline?: boolean;
  enableRowSelection?: boolean;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  rowSelection?: RowSelectionState;
  groupSelectionLabel?: string;
  stickyHeader?: boolean;
};

function useSkipper() {
  const shouldSkipRef = useRef(true);
  const shouldSkip = shouldSkipRef.current;

  // Wrap a function with this to skip a pagination reset temporarily
  const skip = useCallback(() => {
    shouldSkipRef.current = false;
  }, []);

  useEffect(() => {
    shouldSkipRef.current = true;
  });

  return [shouldSkip, skip] as const;
}

export const Table = function Table<TData extends { [key: string]: any }>({
  className,
  data,
  setData,
  columns,
  groupBy,
  enableRowSelection,
  rowSelection,
  onRowSelectionChange,
  groupSelectionLabel,
  inline = false,
  stickyHeader = false,
}: TableProps<TData>) {
  const [grouping, setGrouping] = useState<GroupingState>(groupBy ? [groupBy] : []);
  const columnIds = columns.map((col) => col.id ?? '');
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(columnIds);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();
  const dragColId = useRef<string | null>(null);
  const [dropTargetId, setDropTargetId] = useState<{
    id: string;
    side: 'left' | 'right';
  } | null>(null);

  const table = useReactTable<TData>({
    data,
    columns,
    state: { grouping, columnOrder, sorting, expanded, rowSelection },
    onGroupingChange: setGrouping,
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange,
    enableRowSelection: enableRowSelection && !!onRowSelectionChange,
    autoResetPageIndex,
    autoResetExpanded: false,
    meta: {
      updateData: (updater: (old: TData[]) => TData[]) => {
        skipAutoResetPageIndex();
        const prevExpanded = expanded;
        setData?.(updater(data));
        setExpanded(prevExpanded);
      },
    },
  });

  const handleDragStart = (colId: string) => {
    dragColId.current = colId;
  };

  const handleDragOver = (e: DragEvent<HTMLTableHeaderCellElement>, colId: string) => {
    e.preventDefault();

    if (dragColId.current && dragColId.current !== colId) {
      setDropTargetId({
        id: colId,
        side: e.clientX < e.currentTarget.getBoundingClientRect().left + e.currentTarget.offsetWidth / 2 ? 'left' : 'right',
      });
    }
  };

  const handleDragLeave = () => {
    setDropTargetId(null);
  };

  const handleDrop = (e: DragEvent, toId: string) => {
    const fromId = dragColId.current;
    if (!fromId || fromId === toId) return;

    const target = e.currentTarget as HTMLTableHeaderCellElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX;

    const isLeft = x < rect.left + rect.width / 2;
    const newOrder = [...columnOrder];
    const fromIdx = newOrder.indexOf(fromId);
    const toIdx = newOrder.indexOf(toId);
    newOrder.splice(fromIdx, 1);

    const insertIdx = isLeft ? toIdx : toIdx + 1;
    newOrder.splice(insertIdx > fromIdx ? insertIdx - 1 : insertIdx, 0, fromId);

    setColumnOrder(newOrder);
    dragColId.current = null;
    setDropTargetId(null);
  };

  const handleDragEnd = () => {
    setDropTargetId(null);
  };

  const handleGroupToggle = (row: Row<TData>) => {
    row.toggleExpanded();
  };

  const renderRow = (row: Row<TData>) => {
    if (row.getIsGrouped()) {
      const canGroupSelect = row.getCanSelect();
      const colSpan = row.getVisibleCells().length - (canGroupSelect ? 1 : 0);

      return (
        <Fragment key={row.id}>
          <GroupRow onClick={() => handleGroupToggle(row)}>
            <StyledTd colSpan={colSpan}>
              <ChevronRight $expanded={row.getIsExpanded()} />
              {row.getGroupingValue(row.groupingColumnId ?? '')?.toString() ?? ''}
              <GroupCount>({row.subRows.length})</GroupCount>
            </StyledTd>

            {canGroupSelect && (
              <StyledTd style={{ textAlign: 'end' }}>
                <CheckboxContainer>
                  <GroupSelectionLabel>{groupSelectionLabel}</GroupSelectionLabel>
                  <Checkbox checked={row.getIsSelected()} onChange={() => row.toggleSelected()} style={{ marginLeft: '0.5rem' }} />
                </CheckboxContainer>
              </StyledTd>
            )}
          </GroupRow>
          {row.getIsExpanded() && row.subRows.map((subRow) => renderRow(subRow))}
        </Fragment>
      );
    } else {
      return (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <StyledTd key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</StyledTd>
          ))}
        </tr>
      );
    }
  };

  return (
    <TableContainer $inline={inline} className={className}>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const colId = header.column.id;
                const isSortable = header.column.getCanSort();
                const sortDirection = header.column.getIsSorted();

                return (
                  <StyledTh
                    key={header.id}
                    draggable
                    onDragStart={() => handleDragStart(colId)}
                    onDragOver={(e) => handleDragOver(e, colId)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, colId)}
                    onDragEnd={handleDragEnd}
                    $isDragging={dragColId.current === colId}
                    $isDropTarget={dropTargetId?.id === colId ? dropTargetId.side : undefined}
                    $sticky={stickyHeader}
                    $sortable={isSortable}
                    onClick={isSortable ? header.column.getToggleSortingHandler() : undefined}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}

                    {isSortable && (
                      <SortIcon
                        $direction={sortDirection === false ? undefined : sortDirection === 'asc' ? 'asc' : 'desc'}
                        aria-label={sortDirection ? `Sorted ${sortDirection}` : 'Not sorted'}
                      />
                    )}
                  </StyledTh>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>{table.getRowModel().rows.map((row) => renderRow(row))}</tbody>
      </StyledTable>
    </TableContainer>
  );
};
