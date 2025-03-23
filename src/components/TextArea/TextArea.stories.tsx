import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error',
    error: 'Error message',
  },
};
