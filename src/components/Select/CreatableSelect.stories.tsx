import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps, useState } from 'react';
import { SelectOption } from './Select';
import { CreatableSelect } from './CreatableSelect';

const meta: Meta<typeof CreatableSelect> = {
  title: 'Atoms/CreatableSelect',
  component: CreatableSelect,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CreatableSelect>;

const Template = (args: ComponentProps<typeof CreatableSelect>) => {
  const [value, setValue] = useState<SelectOption | null>();

  return (
    <CreatableSelect
      {...args}
      value={value}
      onChange={(value) => setValue(value)}
      onCreateOption={(option) => console.log('creating option', option)}
    />
  );
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
