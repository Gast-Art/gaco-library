import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from './DatePicker';
import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
  render: (args) => {
    const [date, setDate] = useState('');

    return <DatePicker {...args} onChange={(e) => setDate(e.target.value)} value={date} />;
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Date',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error',
    error: 'This is an error message',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Date',
    min: '2021-01-01',
    max: '2021-12-31',
  },
};
