import { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from './PageTitle';

const HierarchyExample = () => (
  <>
    <PageTitle>PageTitle</PageTitle>
    <h2>H2 Heading</h2>
    <h3>H2 Heading</h3>
  </>
);

const meta: Meta<typeof HierarchyExample> = {
  title: 'Typography/Hierarchy',
  component: HierarchyExample,
};

export default meta;

type Story = StoryObj<typeof HierarchyExample>;

export const Default: Story = {};
