import type { Meta, StoryObj } from '@storybook/react';

import { BarChart } from './BarChart';

const meta: Meta<typeof BarChart> = {
  title: 'Atoms/BarChart',
  component: BarChart,
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#fff', height: '480px', width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {
    tooltipValueFormatter: (value: any) => `$${value}`,
    data: [
      {
        name: 'Jan',
        sales: 4000,
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
