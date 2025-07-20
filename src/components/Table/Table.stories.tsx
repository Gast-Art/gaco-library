import { Meta, StoryObj } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import { ComponentProps, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import { SelectOption, Select as SelectRoot } from '../Select';
import { TextInput } from '../TextInput';
import { Table } from './Table';

const meta: Meta<ComponentProps<typeof Table>> = {
  title: 'Molecules/Table',
  component: Table,
  args: {
    columns: [
      { id: 'name', accessorKey: 'name', header: 'Name', enableSorting: false },
      { id: 'age', accessorKey: 'age', header: 'Age' },
      { id: 'email', accessorKey: 'email', header: 'Email', enableSorting: false },
      { id: 'phone', accessorKey: 'phone', header: 'Phone', enableSorting: false },
      { id: 'address', accessorKey: 'address', header: 'Address', enableSorting: false },
    ],
    data: [
      { name: 'Alice', age: 28, email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St, Springfield' },
      { name: 'Bob', age: 34, email: 'bob@example.com', phone: '987-654-3210', address: '456 Elm St, Springfield' },
      { name: 'Charlie', age: 22, email: 'charlie@example.com', phone: '555-123-4567', address: '789 Oak St, Springfield' },
      { name: 'David', age: 45, email: 'david@example.com', phone: '444-555-6666', address: '321 Pine St, Springfield' },
    ],
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Table>> = {};

export const EmptyData: StoryObj<ComponentProps<typeof Table>> = {
  args: {
    data: [],
  },
};

export const InlineTable: StoryObj<ComponentProps<typeof Table>> = {
  args: {
    inline: true,
    columns: [
      { id: 'product', accessorKey: 'product', header: 'Product' },
      { id: 'price', accessorKey: 'price', header: 'Price' },
    ],
    data: [
      { product: 'Laptop', price: '$999' },
      { product: 'Smartphone', price: '$499' },
    ],
  },
};

export const GroupedRows: StoryObj<ComponentProps<typeof Table>> = {
  args: {
    groupBy: ['category'],
    columns: [
      { id: 'category', accessorKey: 'category', header: 'Category' },
      { id: 'item', accessorKey: 'item', header: 'Item' },
      { id: 'quantity', accessorKey: 'quantity', header: 'Quantity' },
    ],
    data: [
      { category: 'Fruits', item: 'Apple', quantity: 10 },
      { category: 'Fruits', item: 'Banana', quantity: 20 },
      { category: 'Vegetables', item: 'Carrot', quantity: 15 },
      { category: 'Vegetables', item: 'Broccoli', quantity: 5 },
    ],
  },
};

interface TextInputColumnProps {
  name: string;
  age: number;
  email: string;
}

export const TextInputColumn: StoryObj<ComponentProps<typeof Table> & { data: TextInputColumnProps[] }> = {
  render: (args) => {
    const [data, setData] = useState<TextInputColumnProps[]>(args.data);

    const columns: ColumnDef<TextInputColumnProps>[] = [
      {
        id: 'name',
        accessorKey: 'name',
        header: 'Name',
      },
      {
        id: 'age',
        accessorKey: 'age',
        header: 'Age',
      },
      {
        id: 'email',
        accessorKey: 'email',
        header: 'Email',
        cell: ({ getValue, row: { index }, column: { id }, table }) => {
          const initialValue = getValue();
          const [value, setValue] = useState(initialValue);

          const onBlur = () => {
            table.options.meta?.updateData(index, id, value);
          };

          useEffect(() => {
            setValue(initialValue);
          }, [initialValue]);

          return <TextInput id={id} value={value as string} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
        },
      },
    ];

    return <Table {...args} data={data} setData={setData} columns={columns} />;
  },
};

interface SelectInputColumnProps {
  name: string;
  favoriteColor: string;
  email: string;
}

const SELECT_OPTIONS: SelectOption[] = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow' },
];

const Select = styled(SelectRoot)`
  > div {
    padding-top: 0;
  }
`;

export const SelectColumn: StoryObj<ComponentProps<typeof Table> & { data: SelectInputColumnProps[] }> = {
  render: (args) => {
    const [data, setData] = useState<SelectInputColumnProps[]>(args.data);

    const columns: ColumnDef<SelectInputColumnProps>[] = [
      {
        id: 'name',
        accessorKey: 'name',
        header: 'Name',
      },
      {
        id: 'favoriteColor',
        accessorKey: 'favoriteColor',
        header: 'Favorite Color',
        cell: ({ getValue, row: { index }, column: { id }, table }) => {
          const initialValue = getValue();
          const [value, setValue] = useState<SelectOption>();

          const onBlur = () => {
            console.log('called', value);
            table.options.meta?.updateData(index, id, value?.value);
          };

          useEffect(() => {
            setValue(SELECT_OPTIONS.find((opt) => opt.value === initialValue) || SELECT_OPTIONS[0]);
          }, [initialValue]);

          return <Select id={id} value={value} options={SELECT_OPTIONS} onChange={(val) => val && setValue(val)} onBlur={onBlur} />;
        },
      },
      {
        id: 'email',
        accessorKey: 'email',
        header: 'Email',
      },
    ];

    return <Table {...args} data={data} setData={setData} columns={columns} />;
  },
  args: {
    data: [
      { name: 'Alice', favoriteColor: 'red', email: 'alice@email,com' },
      { name: 'Bob', favoriteColor: 'green', email: 'bob@email,com' },
      { name: 'Charlie', favoriteColor: 'red', email: 'charlie@email,com' },
      { name: 'David', favoriteColor: 'red', email: 'david@email,com' },
    ],
  },
  parameters: {
    controls: {
      exclude: ['data'],
    },
  },
  argTypes: {
    data: { control: 'object' },
  },
};
