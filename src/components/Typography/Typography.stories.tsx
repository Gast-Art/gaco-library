import { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from './PageTitle';
import { H1, H2, H3, H4 } from './Typography';

const HierarchyExample = () => (
  <>
    <PageTitle>PageTitle</PageTitle>
    <H1>H1 Heading</H1>
    <H2>H2 Heading</H2>
    <H3>H3 Heading</H3>
    <H4>H4 Heading</H4>
    <H1 as="p">H1 Heading as P</H1>
    <p>Lorum ispum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </>
);

const meta: Meta<typeof HierarchyExample> = {
  title: 'Typography/Hierarchy',
  component: HierarchyExample,
};

export default meta;

type Story = StoryObj<typeof HierarchyExample>;

export const Default: Story = {};
