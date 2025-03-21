import { FC, ReactNode } from '../../../node_modules/react';
export declare const DropdownMenuContentStyling: import('styled-components').RuleSet<object>;
export declare const DropdownMenuItemStyling: import('styled-components').RuleSet<object>;
interface DropdownMenuProps {
    items: ({
        content: ReactNode;
        onSelect?: () => void;
    } | 'seperator')[];
    trigger?: ReactNode;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
    side?: 'left' | 'right';
    sideOffset?: number;
}
declare const DropdownMenu: FC<DropdownMenuProps>;
export { DropdownMenu };
//# sourceMappingURL=DropdownMenu.d.ts.map