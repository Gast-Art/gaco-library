import { cloneElement, ReactElement } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as LineChartRoot,
  ResponsiveContainer,
  ResponsiveContainerProps,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { ContentType } from 'recharts/types/component/Tooltip';
import { TooltipChart } from '../TooltipChart';
import { ChartLabel } from './types';

interface LineChartProps extends Omit<ResponsiveContainerProps, 'children'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any }[];
  labels: ChartLabel[];
  tooltipContent?: ContentType<ValueType, NameType>;
  hideLegend?: boolean;
}

export const LineChart = ({ data, labels, height = 400, hideLegend, tooltipContent = TooltipChart, ...props }: LineChartProps) => {
  const labelFormatter = (value: string) => labels.find((label) => label.dataKey === value)?.label;

  // Wrap tooltipContent to inject labelFormatter
  const tooltipWithLabelFormatter = (tooltipProps: any) => {
    if (typeof tooltipContent === 'function') {
      return tooltipContent({
        ...tooltipProps,
        tooltipLabelFormatter: labelFormatter,
      });
    }
    // If tooltipContent is a React element, clone it with new props
    return cloneElement(tooltipContent as ReactElement, {
      ...tooltipProps,
      tooltipLabelFormatter: labelFormatter,
    });
  };

  return (
    <ResponsiveContainer width="100%" height={height} {...props}>
      <LineChartRoot data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={tooltipWithLabelFormatter} />
        {!hideLegend && <Legend formatter={labelFormatter} />}

        {labels.map((label) => (
          <Line key={label.dataKey} type="monotone" {...label} strokeWidth={2} />
        ))}
      </LineChartRoot>
    </ResponsiveContainer>
  );
};
