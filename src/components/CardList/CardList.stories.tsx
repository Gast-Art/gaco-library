import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { CardList } from './CardList';

const generateCards = (count: number) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push({
      id: i,
      title: `Card ${i}`,
      content: `This is card ${i}'s content. Lorum fucking ipsum. Dolores sit amet.`,
      rightColumn: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <p style={{ fontSize: 10 }}>Data 1/1/25</p>
            <Badge variant="success">Success</Badge>
          </div>
          <Button variant="outline">Action</Button>
        </div>
      ),
    });
  }
  return cards;
};

const meta: Meta<typeof CardList> = {
  title: 'Molecules/CardList',
  component: CardList,
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  args: {
    cards: generateCards(5),
  },
};
