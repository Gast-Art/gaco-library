import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [
    (Story) => (
      <div style={{ width: '320px', padding: '2rem', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [{ label: 'Home', href: '/' }, { label: 'Library', href: '/library' }, { label: 'Data' }],
  },
};
