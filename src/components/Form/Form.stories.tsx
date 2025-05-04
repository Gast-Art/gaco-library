import type { Meta, StoryObj } from '@storybook/react';
import * as yup from 'yup';
import { Card, CardSections } from '../Card';
import { Form, FormFieldComponents } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Molecules/Form',
  render: (props) => (
    <Card>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>
        <Form {...props}></Form>
      </CardSections.Content>
    </Card>
  ),
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    fields: [
      {
        name: 'email',
        label: 'Email',
        component: FormFieldComponents.TEXT,
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        component: FormFieldComponents.TEXT,
        type: 'password',
      },
      {
        name: 'select',
        label: 'Select',
        component: FormFieldComponents.SELECT,
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ],
      },
      {
        name: 'groupedSelect',
        label: 'Grouped Select',
        component: FormFieldComponents.SELECT,
        options: [
          {
            label: 'Group 1',
            options: [
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ],
          },
          {
            label: 'Group 2',
            options: [
              { value: '3', label: 'Option 3' },
              { value: '4', label: 'Option 4' },
            ],
          },
        ],
      },
      {
        name: 'multiSelect',
        label: 'Multi Select',
        component: FormFieldComponents.MULTI_SELECT,
        options: [
          {
            label: 'Group 1',
            options: [
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ],
          },
          {
            label: 'Group 2',
            options: [
              { value: '3', label: 'Option 3' },
              { value: '4', label: 'Option 4' },
            ],
          },
        ],
      },
      {
        name: 'creatableSelect',
        label: 'Creatable Select',
        component: FormFieldComponents.CREATABLE_SELECT,
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ],
        onCreateOption: (inputValue) => {
          console.log('Create option:', inputValue);
          return { value: inputValue, label: inputValue };
        },
      },
      {
        name: 'textArea',
        label: 'Text Area',
        component: FormFieldComponents.TEXT_AREA,
      },
      {
        name: 'date',
        label: 'Date',
        component: FormFieldComponents.DATE_PICKER,
      },
    ],
    schema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      select: yup.string().required(),
      multiSelect: yup.array().min(1).required(),
      creatableSelect: yup.string().required(),
      textArea: yup.string().required(),
      date: yup.date().required(),
    }),
    initialValues: {
      email: 'email@email.com',
      password: undefined,
      date: new Date(),
    },
    onSubmit: (data) => console.log(data),
  },
};

export const Inline: Story = {
  args: {
    fields: [
      {
        name: 'email',
        label: 'Email',
        component: FormFieldComponents.TEXT,
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        component: FormFieldComponents.TEXT,
        type: 'password',
      },
    ],
    schema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: (data) => console.log(data),
    inline: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const Groups: Story = {
  args: {
    fields: [
      {
        title: 'Group 1',
        columns: 2,
        fields: [
          {
            name: 'email',
            label: 'Email',
            component: FormFieldComponents.TEXT,
            type: 'email',
          },
          {
            name: 'password',
            label: 'Password',
            component: FormFieldComponents.TEXT,
            type: 'password',
          },
        ],
      },
      {
        title: 'Group 2',
        fields: [
          {
            name: 'select',
            label: 'Select',
            component: FormFieldComponents.SELECT,
            options: [
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ],
          },
        ],
      },
      {
        title: 'Address',
        columns: 2,
        fields: [
          {
            name: 'address',
            label: 'Address',
            component: FormFieldComponents.TEXT,
            type: 'text',
          },
          {
            name: 'city',
            label: 'City',
            component: FormFieldComponents.TEXT,
            type: 'text',
          },
          {
            name: 'state',
            label: 'State',
            component: FormFieldComponents.TEXT,
            type: 'text',
          },
          {
            name: 'zip',
            label: 'Zip Code',
            component: FormFieldComponents.TEXT,
            type: 'text',
          },
        ],
      },
    ],
    schema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      select: yup.string().required(),
      address: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      zip: yup.string().required(),
    }),
    onSubmit: (data) => console.log(data),
  },
};
