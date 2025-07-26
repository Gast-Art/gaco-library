import { FC, ReactNode } from '../../../node_modules/react';
export interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: ReactNode;
}
export declare const Breadcrumbs: FC<BreadcrumbsProps>;
export {};
//# sourceMappingURL=Breadcrumbs.d.ts.map