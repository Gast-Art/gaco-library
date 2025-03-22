import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';
import { TooltipChart } from '../TooltipChart';
import { BarChart } from './BarChart';

const meta: Meta<typeof BarChart> = {
  title: 'Atoms/BarChart',
  component: BarChart,
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {
    tooltipContent: (props) => <TooltipChart {...props} tooltipValueFormatter={(val) => `€${val}`} />,
    labels: [
      {
        dataKey: 'sales',
        color: 'red',
      },
      {
        dataKey: 'sales2',
        color: 'blue',
      },
    ],
    data: [
      {
        name: 'Jan',
        sales: 4000,
        sales2: 2400,
      },
      {
        name: 'Feb',
        sales: 3000,
      },
      {
        name: 'Mar',
        sales: 2000,
      },
    ],
  },
};
