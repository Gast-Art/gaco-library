import type { Meta, StoryObj } from '@storybook/react';

import { Map } from './Map';

const meta: Meta<typeof Map> = {
  title: 'Atoms/Map',
  component: Map,
  decorators: [
    (Story) => (
      <div style={{ width: '480px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  args: {
    apiKey: 'td8t8MMaJB3fGJyGiTae',
    markersAddresses: ['Gasthuismolensteeg 3, Amsterdam'],
    // zoom: 4,
  },
};
