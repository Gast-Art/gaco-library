interface BarChartProps {
    data: {
        [key: string]: any;
    }[];
    tooltipValueFormatter: (value: any) => string;
    showLegend?: boolean;
}
export declare const BarChart: ({ data, showLegend, tooltipValueFormatter }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BarChart.d.ts.map