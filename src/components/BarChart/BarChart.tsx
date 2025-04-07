import {
  Bar,
  BarChart as BarChartRoot,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ResponsiveContainerProps,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ContentType } from 'recharts/types/component/Tooltip';
import { TooltipChart } from '../TooltipChart';

interface BarChartProps extends Omit<ResponsiveContainerProps, 'children'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any }[];
  labels: { dataKey: string; label: string; color: string }[];
  tooltipContent?: ContentType<ValueType, NameType>;
  hideLegend?: boolean;
}

export const BarChart = ({ data, labels, height = 400, hideLegend, tooltipContent = TooltipChart }: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChartRoot data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={tooltipContent} />
        {!hideLegend && <Legend />}

        {labels.map(({ dataKey, label, color }) => (
          <Bar key={dataKey} dataKey={dataKey} name={label} fill={color} />
        ))}
      </BarChartRoot>
    </ResponsiveContainer>
  );
};
