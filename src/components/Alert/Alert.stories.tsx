import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'This is a default alert. It defaults to "info"',
  },
};

export const Error: Story = {
  args: {
    children: 'This is an error alert. Something went wrong!',
    type: 'error',
  },
};

export const Success: Story = {
  args: {
    children: 'This is a success alert. Everything went right!',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'This is a warning alert. Be careful!',
    type: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: 'This is an info alert. Just so you know.',
    type: 'info',
  },
};
