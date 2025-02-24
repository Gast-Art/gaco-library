import { Meta, StoryObj } from '@storybook/react';

const AnchorExample = () => (
  <>
    <h2>Styled Anchor Tags</h2>
    <p>
      Check out{' '}
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Example
      </a>{' '}
      for more info.
    </p>
    <p>
      Visit{' '}
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        Google
      </a>{' '}
      to search the web.
    </p>
  </>
);

const meta: Meta<typeof AnchorExample> = {
  title: 'Typography/Anchor',
  component: AnchorExample,
};

export default meta;

type Story = StoryObj<typeof AnchorExample>;

export const Default: Story = {};
