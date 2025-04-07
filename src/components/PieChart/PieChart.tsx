import { Cell, Legend, Pie, PieChart as PieChartRoot, ResponsiveContainer, ResponsiveContainerProps, Tooltip } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ContentType } from 'recharts/types/component/Tooltip';
import { TooltipChart } from '../TooltipChart';

interface PieChartProps extends Omit<ResponsiveContainerProps, 'children'> {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  tooltipContent?: ContentType<ValueType, NameType>;
}

export const PieChart = ({ data, height = 400, tooltipContent = TooltipChart, ...props }: PieChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={height} {...props}>
      <PieChartRoot>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={140} innerRadius={120} paddingAngle={3}>
          {data.map(({ color }, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Pie>
        <Tooltip content={tooltipContent} />
        <Legend />
      </PieChartRoot>
    </ResponsiveContainer>
  );
};
