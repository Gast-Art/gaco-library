import { ResponsiveContainerProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ContentType } from 'recharts/types/component/Tooltip';
interface BarChartProps extends Omit<ResponsiveContainerProps, 'children'> {
    data: {
        [key: string]: any;
    }[];
    labels: {
        dataKey: string;
        label: string;
        color: string;
    }[];
    tooltipContent?: ContentType<ValueType, NameType>;
    hideLegend?: boolean;
}
export declare const BarChart: ({ data, labels, height, hideLegend, tooltipContent }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BarChart.d.ts.map