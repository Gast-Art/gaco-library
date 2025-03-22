import { ReactNode } from '../../../node_modules/react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
interface TooltipChartProps extends TooltipProps<ValueType, NameType> {
    tooltipValueFormatter?: (value: any) => string;
    children?: ReactNode;
}
declare const TooltipChart: ({ active, payload, label, tooltipValueFormatter, children }: TooltipChartProps) => import("react/jsx-runtime").JSX.Element | null;
export { TooltipChart };
//# sourceMappingURL=TooltipChart.d.ts.map