import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps, useState } from 'react';
import { SelectOption } from './Select';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Atoms/MultiSelect',
  component: MultiSelect,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const Template = (args: ComponentProps<typeof MultiSelect>) => {
  const [value, setValue] = useState<SelectOption[]>([]);

  return <MultiSelect {...args} value={value} onChange={(newValue) => setValue(newValue)} />;
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
