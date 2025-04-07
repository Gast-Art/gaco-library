import { ResponsiveContainerProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ContentType } from 'recharts/types/component/Tooltip';
import { ChartLabel } from '../PieChart';
interface LineChartProps extends Omit<ResponsiveContainerProps, 'children'> {
    data: {
        [key: string]: any;
    }[];
    labels: ChartLabel[];
    tooltipContent?: ContentType<ValueType, NameType>;
    hideLegend?: boolean;
}
export declare const LineChart: ({ data, labels, height, hideLegend, tooltipContent, ...props }: LineChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineChart.d.ts.map