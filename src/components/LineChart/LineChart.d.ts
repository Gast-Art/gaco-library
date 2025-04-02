import { ResponsiveContainerProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ContentType } from 'recharts/types/component/Tooltip';
interface LineChartProps extends Omit<ResponsiveContainerProps, 'children'> {
    data: {
        [key: string]: any;
    }[];
    labels: {
        dataKey: string;
        stroke: string;
        label: string;
    }[];
    tooltipContent?: ContentType<ValueType, NameType>;
}
export declare const LineChart: ({ data, labels, height, tooltipContent, ...props }: LineChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineChart.d.ts.map