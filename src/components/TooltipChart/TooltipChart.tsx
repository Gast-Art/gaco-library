import { ReactNode } from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { Card, CardSections, CardSize } from '../Card';

interface TooltipChartProps extends TooltipProps<ValueType, NameType> {
  tooltipValueFormatter?: (value: any) => string;
  children?: ReactNode;
}

const TooltipChart = ({ active, payload, label, tooltipValueFormatter = (label) => label.toString(), children }: TooltipChartProps) => {
  if (active) {
    return (
      <Card size={CardSize.sm}>
        {label && <CardSections.Title>{label}</CardSections.Title>}
        <CardSections.Content>
          {payload?.map((entry: any, index: number) => (
            <div key={`item-${index}`}>{`${entry.name}: ${tooltipValueFormatter(entry.value)}`}</div>
          ))}

          {children}
        </CardSections.Content>
      </Card>
    );
  }

  return null;
};

export { TooltipChart };
