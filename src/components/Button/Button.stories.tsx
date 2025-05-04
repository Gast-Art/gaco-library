import type { Meta, StoryObj } from '@storybook/react';

import { Store } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    loading: true,
  },
};

export const Icon: Story = {
  args: {
    icon: <Store />,
    variant: 'ghost',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Store />
        With Icon
      </>
    ),
  },
};

export const Upload: Story = {
  args: {
    children: 'Upload',
    type: 'file',
    onFileChange: (files) => {
      console.log(files);
    },
  },
};
