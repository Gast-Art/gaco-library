import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Molecules/ButtonGroup',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>Button One</Button>
        <Button>Button Two</Button>
      </>
    ),
  },
};

export const Three: Story = {
  args: {
    children: (
      <>
        <Button>Button One</Button>
        <Button>Button Two</Button>
        <Button variant="outline">Button Three</Button>
      </>
    ),
  },
};
