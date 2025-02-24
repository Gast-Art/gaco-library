import type { Meta, StoryObj } from '@storybook/react';

import { LoadingOverlay } from './LoadingOverlay';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Molecules/LoadingOverlay',
  component: LoadingOverlay,
  decorators: [
    (Story) => (
      <div style={{ width: '640px', height: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Default: Story = {
  args: {
    children: 'Loading...',
  },
};
