import type { Meta, StoryObj } from '@storybook/react';

import { LogOut } from 'lucide-react';
import { Button } from '../Button';
import { DropdownMenu } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    trigger: <Button>Trigger</Button>,
    items: [
      {
        content: (
          <>
            <LogOut />
            Item 1
          </>
        ),
        onSelect: () => {},
      },
      { content: 'Item 2', onSelect: () => {} },
      'seperator',
      { content: 'Item 3', onSelect: () => {} },
    ],
  },
};
