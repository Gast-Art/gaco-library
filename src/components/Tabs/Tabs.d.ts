import { TabsContent, TabsListProps as TabsListPropsRoot, TabsTriggerProps as TabsTriggerPropsRoot } from '@radix-ui/react-tabs';
declare const Tabs: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('@radix-ui/react-tabs').TabsProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>, never>> & string & Omit<import('../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-tabs').TabsProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../node_modules/react').Component<any, {}, any>>;
declare const triggerSizes: {
    default: import('styled-components').RuleSet<object>;
    lg: import('styled-components').RuleSet<object>;
};
interface TabsProps extends TabsListPropsRoot {
    inline?: boolean;
}
declare const TabsList: import('../../../node_modules/react').ForwardRefExoticComponent<TabsProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
interface TabsTriggerProps extends TabsTriggerPropsRoot {
    'data-state'?: string;
    size?: keyof typeof triggerSizes;
}
declare const TabsTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<TabsTriggerProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export { Tabs, TabsContent, TabsList, TabsTrigger };
//# sourceMappingURL=Tabs.d.ts.map