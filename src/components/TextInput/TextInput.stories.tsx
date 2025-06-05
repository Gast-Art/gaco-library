import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/TextInput',
  component: TextInput,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const TypeNumber: Story = {
  args: {
    label: 'Number',
    type: 'number',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error',
    error: 'Error message',
  },
};
