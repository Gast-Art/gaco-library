import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="sales">Sales</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="artists">Artists</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">This is the tabs content for overview</TabsContent>
      <TabsContent value="sales">This is the tab content for sales</TabsContent>
    </Tabs>
  ),
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

export const Large: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview" size="lg">
          Overview
        </TabsTrigger>
        <TabsTrigger value="sales" size="lg">
          Sales
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
    </Tabs>
  ),
};
