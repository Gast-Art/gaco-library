import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';
import { TooltipChart } from '../TooltipChart';
import { LineChart } from './LineChart';
import { salesData, salesLabels } from './mock-data';

const meta: Meta<typeof LineChart> = {
  title: 'Atoms/LineChart',
  component: LineChart,
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {
    tooltipContent: (props) => <TooltipChart {...props} tooltipValueFormatter={(val) => `€${val}`} />,
    data: salesData,
    labels: salesLabels,
  },
};
