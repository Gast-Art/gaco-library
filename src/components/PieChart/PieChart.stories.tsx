import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';
import { TooltipChart } from '../TooltipChart';
import { PieChart } from './PieChart';
import { pieChartData } from './mock-data';

const meta: Meta<typeof PieChart> = {
  title: 'Atoms/PieChart',
  component: PieChart,
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Default: Story = {
  args: {
    tooltipContent: (props) => <TooltipChart {...props} tooltipValueFormatter={(val) => `€${val}`} />,
    data: pieChartData,
  },
};
