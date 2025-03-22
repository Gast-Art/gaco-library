import type { Meta, StoryObj } from '@storybook/react';

import { TooltipChart } from './TooltipChart';

const meta: Meta<typeof TooltipChart> = {
  title: 'Atoms/TooltipChart',
  component: TooltipChart,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof TooltipChart>;

export const Default: Story = {
  args: {
    label: 'Tooltip Label',
    active: true,

    payload: [
      { name: 'Name 1', value: 100 },
      { name: 'Name 2', value: 200 },
    ],

    tooltipValueFormatter: (value) => `€${value}`,

    children: <div>Children</div>,
  },
};
