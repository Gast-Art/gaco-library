import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardSections } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  render: ({ children }) => (
    <Card>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      {children}
    </Card>
  ),
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is the children of the card',
  },
};
