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

const initialOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const Template = (args: ComponentProps<typeof CreatableSelect>) => {
  const [value, setValue] = useState<SelectOption | null>();
  const [options, setOptions] = useState<SelectOption[]>(initialOptions);

  const handleCreateOption = (inputValue: string) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setValue(newOption);
  };

  return (
    <CreatableSelect
      {...args}
      value={value}
      defaultInputValue={'test'}
      onChange={(value) => setValue(value)}
      onCreateOption={handleCreateOption}
      options={options}
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
