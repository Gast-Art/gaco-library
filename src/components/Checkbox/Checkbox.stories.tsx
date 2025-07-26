import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    label: 'Default Checkbox',
    checked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked Checkbox',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Checkbox',
  },
};

export const Controlled: Story = {
  render: (args: ComponentProps<typeof Checkbox>) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} label="Controlled Checkbox" />;
  },
};
