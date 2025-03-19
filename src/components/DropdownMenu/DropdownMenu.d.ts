import { FC, ReactNode } from '../../../node_modules/react';
interface DropdownMenuProps {
    trigger: ReactNode;
    items: ({
        content: ReactNode;
        onSelect?: () => void;
    } | 'seperator')[];
}
interface DropdownMenuProps {
    trigger: ReactNode;
    items: ({
        content: ReactNode;
        onSelect?: () => void;
    } | 'seperator')[];
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
    side?: 'left' | 'right';
    sideOffset?: number;
}
declare const DropdownMenu: FC<DropdownMenuProps>;
export { DropdownMenu };
//# sourceMappingURL=DropdownMenu.d.ts.map