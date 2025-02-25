import { Tabs, TabsContent, TabsTriggerProps } from '@radix-ui/react-tabs';
declare const triggerSizes: {
    default: import('styled-components').RuleSet<object>;
    lg: import('styled-components').RuleSet<object>;
};
declare const TabsList: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-tabs').TabsListProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
interface ExtendedTabsTriggerProps extends TabsTriggerProps {
    'data-state'?: string;
    size?: keyof typeof triggerSizes;
}
declare const TabsTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<ExtendedTabsTriggerProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export { Tabs, TabsContent, TabsList, TabsTrigger };
//# sourceMappingURL=Tabs.d.ts.map