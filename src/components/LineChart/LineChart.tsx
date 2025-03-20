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

interface LineChartProps extends Omit<ResponsiveContainerProps, 'children'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any }[];
  labels: { dataKey: string; stroke: string }[];
}

export const LineChart = ({ data, labels, height = 400, ...props }: LineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={height} {...props}>
      <LineChartRoot data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {labels.map((label) => (
          <Line key={label.dataKey} type="monotone" dataKey={label.dataKey} stroke={label.stroke} />
        ))}
      </LineChartRoot>
    </ResponsiveContainer>
  );
};
