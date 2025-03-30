import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Card, CardSections, CardSize } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  render: ({ children, ...props }) => (
    <Card {...props}>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      {children}
    </Card>
  ),
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
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

export const Small: Story = {
  args: {
    size: CardSize.sm,
  },
};

export const AvatarInLeftColumn: Story = {
  render: ({ children }) => (
    <Card>
      <CardSections.LeftColumn>
        <img src="https://picsum.photos/72" alt="placeholder" />
      </CardSections.LeftColumn>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      {children}
    </Card>
  ),
  args: {
    children: 'This is the children of the card',
  },
};

export const ButtonsInRightColumn: Story = {
  render: ({ children }) => (
    <Card>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      <CardSections.RightColumn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Button variant="default">Button 1</Button>
          <Button variant="outline">Button 2</Button>
        </div>
      </CardSections.RightColumn>
      {children}
    </Card>
  ),
};

export const WithActions: Story = {
  render: ({ children }) => (
    <Card>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      <CardSections.Actions>
        <Button>Save</Button>
        <Button variant="outline">Cancel</Button>
      </CardSections.Actions>
      {children}
    </Card>
  ),
};
