import { ResponsiveContainerProps } from 'recharts';
interface LineChartProps extends Omit<ResponsiveContainerProps, 'children'> {
    data: {
        [key: string]: any;
    }[];
    labels: {
        dataKey: string;
        stroke: string;
    }[];
}
export declare const LineChart: ({ data, labels, height, ...props }: LineChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineChart.d.ts.map