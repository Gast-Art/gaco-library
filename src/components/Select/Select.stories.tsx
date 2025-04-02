import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps, useState } from 'react';
import { Select, SelectOption } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const Template = (args: ComponentProps<typeof Select>) => {
  const [value, setValue] = useState<SelectOption | null>();

  return <Select {...args} value={value} onChange={(newValue) => setValue(newValue)} />;
};

export const Default: Story = {
  render: Template,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    label: 'Select an option',
  },
};

export const GroupedOptions: Story = {
  render: Template,
  args: {
    options: [
      {
        label: 'Group 1',
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ],
      },
      {
        label: 'Group 2',
        options: [
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
        ],
      },
    ],
    label: 'Select an option',
  },
};
