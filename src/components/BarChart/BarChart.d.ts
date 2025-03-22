import { ResponsiveContainerProps } from 'recharts';
interface BarChartProps extends Omit<ResponsiveContainerProps, 'children'> {
    data: {
        [key: string]: any;
    }[];
    labels: {
        dataKey: string;
        color: string;
    }[];
    tooltipValueFormatter: (value: any) => string;
    showLegend?: boolean;
}
export declare const BarChart: ({ data, labels, height, showLegend, tooltipValueFormatter }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BarChart.d.ts.map