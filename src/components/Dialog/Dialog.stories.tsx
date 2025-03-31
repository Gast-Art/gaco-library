import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { Button } from '../Button';
import { Select } from '../Select';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Molecules/Dialog',
  component: Dialog,
  render: (args) => {
    const [open, setOpen] = useState(false);

    return <Dialog {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open dialog</Button>} />;
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    title: 'Dialog Title',
    content: 'This is dialog content.',
    children: <p>This is the children of the dialog.</p>,
    actions: (
      <>
        <Button>Confirm</Button>
        <Button variant="outline">Cancel</Button>
      </>
    ),
  },
};

export const NoOutideState: Story = {
  render: (args) => {
    return <Dialog {...args} trigger={<Button>Open dialog</Button>} />;
  },
  args: {
    ...Default.args,
  },
};

export const WithDropdown: Story = {
  args: {
    ...Default.args,
    children: (
      <Select
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
          { value: 'option4', label: 'Option 4' },
          { value: 'option5', label: 'Option 5' },
          { value: 'option6', label: 'Option 6' },
          { value: 'option7', label: 'Option 7' },
          { value: 'option8', label: 'Option 8' },
          { value: 'option9', label: 'Option 9' },
          { value: 'option10', label: 'Option 10' },
          { value: 'option11', label: 'Option 11' },
          { value: 'option12', label: 'Option 12' },
          { value: 'option13', label: 'Option 13' },
          { value: 'option14', label: 'Option 14' },
          { value: 'option15', label: 'Option 15' },
          { value: 'option16', label: 'Option 16' },
        ]}
        id="select"
        onChange={() => {}}
      />
    ),
  },
};
