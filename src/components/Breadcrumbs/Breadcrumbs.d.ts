import { default as React, FC } from '../../../node_modules/react';
interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
}
export declare const Breadcrumbs: FC<BreadcrumbsProps>;
export {};
//# sourceMappingURL=Breadcrumbs.d.ts.map