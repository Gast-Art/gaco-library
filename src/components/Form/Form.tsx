import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentProps, useEffect } from 'react';
import { Controller, DefaultValues, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import { Button } from '../Button';
import { MultiSelect, Select } from '../Select';
import { TextInput } from '../TextInput';
import { TextArea } from '../TextArea';

export enum FormFieldComponents {
  TEXT = 'text',
  SELECT = 'select',
  MULTI_SELECT = 'multiSelect',
  TEXT_AREA = 'textArea',
}

interface FormProps<T extends FieldValues = FieldValues> {
  schema?: yup.ObjectSchema<any>;
  onSubmit: SubmitHandler<T>;
  labelSubmit?: string;
  fields: Array<
    | ({
        name: Path<T>;
        component: FormFieldComponents.TEXT;
      } & Omit<ComponentProps<typeof TextInput>, 'id' | 'error'>)
    | ({
        name: Path<T>;
        component: FormFieldComponents.SELECT;
      } & Omit<ComponentProps<typeof Select>, 'id' | 'error' | 'onChange'>)
    | ({
        name: Path<T>;
        component: FormFieldComponents.MULTI_SELECT;
      } & Omit<ComponentProps<typeof MultiSelect>, 'id' | 'error' | 'onChange'>)
    | ({
        name: Path<T>;
        component: FormFieldComponents.TEXT_AREA;
      } & Omit<ComponentProps<typeof TextArea>, 'id' | 'error'>)
  >;
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
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<T>({
    mode: 'onChange',
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues: initialValues,
  });

  useEffect(() => reset(initialValues), [reset, initialValues]);

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => {
        if (field.component === FormFieldComponents.TEXT) {
          return (
            <Controller
              key={String(field.name)}
              name={field.name}
              control={control}
              render={({ field: fieldController }) => (
                <TextInput
                  id={field.name.toString()}
                  error={errors[field.name]?.message?.toString()}
                  {...field}
                  onChange={fieldController.onChange}
                  onBlur={fieldController.onBlur}
                  value={fieldController.value}
                />
              )}
            />
          );
        }

        if (field.component === FormFieldComponents.TEXT_AREA) {
          return (
            <Controller
              key={String(field.name)}
              name={field.name}
              control={control}
              render={({ field: fieldController }) => (
                <TextArea
                  id={field.name.toString()}
                  error={errors[field.name]?.message?.toString()}
                  {...field}
                  onChange={fieldController.onChange}
                  onBlur={fieldController.onBlur}
                  value={fieldController.value}
                />
              )}
            />
          );
        }

        if (field.component === FormFieldComponents.SELECT) {
          return (
            <Controller
              key={String(field.name)}
              name={field.name}
              control={control}
              render={({ field: fieldController }) => (
                <Select
                  id={field.name.toString()}
                  error={errors[field.name]?.message?.toString()}
                  {...field}
                  onChange={(value) => fieldController.onChange(value?.value)}
                  value={field.options.find((option) => option.value === fieldController.value)}
                />
              )}
            />
          );
        }

        if (field.component === FormFieldComponents.MULTI_SELECT) {
          return (
            <Controller
              key={String(field.name)}
              name={field.name}
              control={control}
              render={({ field: fieldController }) => (
                <MultiSelect
                  id={field.name.toString()}
                  error={errors[field.name]?.message?.toString()}
                  {...field}
                  onChange={(value) => fieldController.onChange(value)}
                  value={fieldController.value}
                />
              )}
            />
          );
        }
      })}

      <Button type="submit" disabled={!isValid || isLoading || Object.keys(errors).length > 0} loading={isLoading}>
        {labelSubmit}
      </Button>
    </FormElement>
  );
};

export { Form };
