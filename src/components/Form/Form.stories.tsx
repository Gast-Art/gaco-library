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
        name: 'multiSelect',
        label: 'Multi Select',
        component: FormFieldComponents.MULTI_SELECT,
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ],
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
      textArea: yup.string().required(),
      date: yup.date().required(),
    }),
    initialValues: {
      email: 'email@email.com',
      password: undefined,
    },
    onSubmit: (data) => console.log(data),
  },
};

export const Small: Story = {
  args: {},
};
