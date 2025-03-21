import { Bar, BarChart as BarChartRoot, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { Card, CardSections, CardSize } from '../Card';

interface BarChartTooltipProps extends TooltipProps<ValueType, NameType> {
  tooltipValueFormatter: (value: any) => string;
}

const BarChartTooltip = ({ active, payload, label, tooltipValueFormatter = (label) => label.toString() }: BarChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <Card size={CardSize.sm}>
        <CardSections.Title>{label}</CardSections.Title>
        <CardSections.Content>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`}>{`${entry.name}: ${tooltipValueFormatter(entry.value)}`}</div>
          ))}
        </CardSections.Content>
      </Card>
    );
  }

  return null;
};

interface BarChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any }[];
  labels: { dataKey: string; color: string }[];
  tooltipValueFormatter: (value: any) => string;
  showLegend?: boolean;
}

export const BarChart = ({ data, labels, showLegend, tooltipValueFormatter }: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartRoot data={data} width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={(props) => <BarChartTooltip {...props} tooltipValueFormatter={tooltipValueFormatter} />} />
        {showLegend && <Legend />}

        {labels.map(({ dataKey, color }) => (
          <Bar key={dataKey} dataKey={dataKey} fill={color} />
        ))}
      </BarChartRoot>
    </ResponsiveContainer>
  );
};
