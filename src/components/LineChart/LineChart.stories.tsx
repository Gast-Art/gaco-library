import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from './LineChart';
import { salesData, salesLabels } from './mock-data';

const meta: Meta<typeof LineChart> = {
  title: 'Atoms/LineChart',
  component: LineChart,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {
    data: salesData,
    labels: salesLabels,
  },
};
