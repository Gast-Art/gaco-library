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
    apiKey: import.meta.env.VITE_MAPTILER_SDK_API_KEY,
  },
};

export const WithMarker: Story = {
  args: {
    ...Default.args,
    markersAddresses: ['Gasthuismolensteeg 3, Amsterdam', 'Dam Square, Amsterdam'],
  },
};
