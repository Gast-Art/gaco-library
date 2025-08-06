import { ReactNode } from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { Card, CardSections, CardSize } from '../Card';
import { DetailsList } from '../DetailsList';

interface TooltipChartProps extends TooltipProps<ValueType, NameType> {
  tooltipValueFormatter?: (value: any) => string;
  tooltipLabelFormatter?: (label: string) => string;
  children?: ReactNode;
}

const TooltipChart = ({
  active,
  payload,
  label,
  tooltipLabelFormatter = (label) => label,
  tooltipValueFormatter = (label) => label,
  children,
}: TooltipChartProps) => {
  if (active) {
    return (
      <Card size={CardSize.sm}>
        {label && <CardSections.Title>{label}</CardSections.Title>}
        <CardSections.Content>
          <DetailsList>
            {payload?.map((entry: any, index: number) => (
              <>
                <dd key={`item-${index}`}>{tooltipLabelFormatter(entry.name)}</dd> <dt>{tooltipValueFormatter(entry.value)}</dt>
              </>
            ))}
          </DetailsList>

          {children}
        </CardSections.Content>
      </Card>
    );
  }

  return null;
};

export { TooltipChart };
