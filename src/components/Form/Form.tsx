import { yupResolver } from '@hookform/resolvers/yup';
import { createElement } from 'react';
import { DefaultValues, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import { Button } from '../Button';
import { getField } from './utils';

export enum FormFieldComponents {
  TEXT = 'text',
  SELECT = 'select',
}

interface FormProps<T extends FieldValues = FieldValues> {
  schema?: yup.ObjectSchema<any>;
  onSubmit: SubmitHandler<T>;
  labelSubmit?: string;
  fields: Array<{
    name: keyof T;
    label: string;
    component?: FormFieldComponents;
    type?: string;
  }>;
  isLoading?: boolean;
  initialValues?: DefaultValues<T>;
}

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Form = <T extends FieldValues = FieldValues>({
  schema,
  onSubmit,
  labelSubmit = 'Submit',
  fields,
  isLoading = false,
  initialValues,
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues: initialValues,
  });

  return (
    <>
      <FormElement onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={String(field.name)}>
            {createElement(getField(field.component), {
              id: field.name.toString(),
              label: field.label,
              type: field.type,
              error: errors[field.name]?.message?.toString(),
              ...register(field.name as any),
            })}
          </div>
        ))}

        <Button type="submit" disabled={isLoading} loading={isLoading}>
          {labelSubmit}
        </Button>
      </FormElement>
    </>
  );
};

export { Form };
