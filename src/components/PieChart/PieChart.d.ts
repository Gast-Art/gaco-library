import { ResponsiveContainerProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ContentType } from 'recharts/types/component/Tooltip';
interface PieChartProps extends Omit<ResponsiveContainerProps, 'children'> {
    data: {
        name: string;
        value: number;
        color: string;
    }[];
    tooltipContent?: ContentType<ValueType, NameType>;
}
export declare const PieChart: ({ data, height, tooltipContent, ...props }: PieChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PieChart.d.ts.map