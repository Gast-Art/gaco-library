import { FC, ReactNode } from '../../../node_modules/react';
interface DropdownMenuProps {
    trigger: React.ReactNode;
    items: ({
        content: ReactNode;
        onSelect: () => void;
    } | 'seperator')[];
}
declare const DropdownMenu: FC<DropdownMenuProps>;
export { DropdownMenu };
//# sourceMappingURL=DropdownMenu.d.ts.map