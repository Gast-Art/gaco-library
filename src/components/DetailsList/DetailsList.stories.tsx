import type { Meta, StoryObj } from '@storybook/react';

import { DetailsList } from './DetailsList';

const meta: Meta<typeof DetailsList> = {
  title: 'Atoms/DetailsList',
  component: DetailsList,
  decorators: [
    (Story) => (
      <div style={{ width: '320px', padding: '2rem', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DetailsList>;

export const Default: Story = {
  args: {
    children: (
      <>
        <dd>Item 1</dd>
        <dt>Detail 1</dt>
        <dd>Item 2</dd>
        <dt>Detail 2</dt>
        <dd>Item 3</dd>
        <dt>Detail 3</dt>
      </>
    ),
  },
};
