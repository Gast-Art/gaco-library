import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';
import { useState } from 'react';
import { Button } from '../Button';

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
    content: 'This is a dialog description.',
    children: <p>This is the content of the dialog.</p>,
  },
};
