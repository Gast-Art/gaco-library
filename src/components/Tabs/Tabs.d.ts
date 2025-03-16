import { Tabs, TabsContent, TabsListProps as TabsListPropsRoot, TabsTriggerProps as TabsTriggerPropsRoot } from '@radix-ui/react-tabs';
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