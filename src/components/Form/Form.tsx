'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentProps, useEffect, useMemo } from 'react';
import { Controller, DefaultValues, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import { Button as ButtonRoot } from '../Button';
import { DatePicker } from '../DatePicker';
import { CreatableSelect, MultiSelect, Select } from '../Select';
import { TextArea } from '../TextArea';
import { TextInput } from '../TextInput';
import { H4 } from '../Typography';

export enum FormFieldComponents {
  TEXT = 'text',
  SELECT = 'select',
  MULTI_SELECT = 'multiSelect',
  CREATABLE_SELECT = 'creatableSelect',
  TEXT_AREA = 'textArea',
  DATE_PICKER = 'datePicker',
}

type FormField<T extends FieldValues = FieldValues> =
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
      component: FormFieldComponents.CREATABLE_SELECT;
    } & Omit<ComponentProps<typeof CreatableSelect>, 'id' | 'error' | 'onChange'>)
  | ({
      name: Path<T>;
      component: FormFieldComponents.TEXT_AREA;
    } & Omit<ComponentProps<typeof TextArea>, 'id' | 'error'>)
  | ({
      name: Path<T>;
      component: FormFieldComponents.DATE_PICKER;
    } & Omit<ComponentProps<typeof DatePicker>, 'id' | 'error'>);

interface FormGroup<T extends FieldValues = FieldValues> {
  title?: string;
  columns?: number;
  fields: FormField<T>[];
}

interface FormProps<T extends FieldValues = FieldValues> {
  schema?: yup.ObjectSchema<any>;
  onSubmit: SubmitHandler<T>;
  labelSubmit?: string;
  fields: Array<FormField<T> | FormGroup<T>>;
  isLoading?: boolean;
  initialValues?: DefaultValues<T>;
  className?: string;
  inline?: boolean;
}

const SubmitButton = styled(ButtonRoot)`
  align-self: flex-start;
`;

const FormElement = styled.form<{ $inline?: boolean }>`
  display: flex;
  flex-direction: ${({ $inline }) => ($inline ? 'row' : 'column')};
  gap: 0.5rem;

  ${({ $inline }) =>
    $inline &&
    `
    & > div {
      flex: 1;
    }
    & > ${SubmitButton} {
      align-self: flex-end;
    }
  `}
`;

const FormGroupContainer = styled.div<{ $columns?: number }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => ($columns ? `repeat(${$columns}, 1fr)` : '1fr')};
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const FormGroupTitle = styled(H4)`
  margin: 0 0 0.125rem 0;
`;

const Form = <T extends FieldValues = FieldValues>({
  schema,
  onSubmit,
  labelSubmit = 'Submit',
  fields,
  inline,
  isLoading = false,
  initialValues,
  className,
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

  const describedSchema = useMemo(() => {
    return schema?.describe();
  }, [schema]);

  const renderField = (field: FormField<T>) => {
    const isRequired =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      describedSchema?.fields && describedSchema.fields[field.name]?.tests?.find(({ name }: { name: string }) => name === 'required');

    const controllerProps = {
      name: field.name,
      control,
      disabled: isLoading,
    };
    const fieldProps = {
      id: field.name.toString(),
      error: errors[field.name]?.message?.toString(),
    };
    const labelWithAsterisk = field.label && isRequired ? `${field.label}*` : field.label;

    if (field.component === FormFieldComponents.TEXT) {
      return (
        <Controller
          key={String(field.name)}
          {...controllerProps}
          render={({ field: fieldController }) => <TextInput {...fieldProps} {...field} {...fieldController} label={labelWithAsterisk} />}
        />
      );
    }

    if (field.component === FormFieldComponents.TEXT_AREA) {
      return (
        <Controller
          key={String(field.name)}
          {...controllerProps}
          render={({ field: fieldController }) => <TextArea {...fieldProps} {...field} {...fieldController} label={labelWithAsterisk} />}
        />
      );
    }

    if (field.component === FormFieldComponents.SELECT) {
      const flatOptions = field.options.flatMap((option) => {
        if ('options' in option) {
          return option.options;
        }
        return option;
      });
      return (
        <Controller
          key={String(field.name)}
          {...controllerProps}
          render={({ field: fieldController }) => (
            <Select
              {...fieldProps}
              {...field}
              onChange={(value) => fieldController.onChange(value?.value)}
              value={flatOptions.find((option) => option.value === fieldController.value)}
              label={labelWithAsterisk}
            />
          )}
        />
      );
    }

    if (field.component === FormFieldComponents.MULTI_SELECT) {
      return (
        <Controller
          key={String(field.name)}
          {...controllerProps}
          render={({ field: fieldController }) => (
            <MultiSelect
              {...fieldProps}
              {...field}
              onChange={(value) => fieldController.onChange(value)}
              value={fieldController.value}
              label={labelWithAsterisk}
            />
          )}
        />
      );
    }

    if (field.component === FormFieldComponents.CREATABLE_SELECT) {
      return (
        <Controller
          key={String(field.name)}
          {...controllerProps}
          render={({ field: fieldController }) => (
            <CreatableSelect
              {...fieldProps}
              {...field}
              onChange={(value) => fieldController.onChange(value?.value)}
              value={field.options.find((option) => option.value === fieldController.value)}
              label={labelWithAsterisk}
            />
          )}
        />
      );
    }

    if (field.component === FormFieldComponents.DATE_PICKER) {
      return (
        <Controller
          key={String(field.name)}
          {...controllerProps}
          render={({ field: fieldController }) => <DatePicker {...fieldProps} {...field} {...fieldController} label={labelWithAsterisk} />}
        />
      );
    }
  };

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)} className={className} $inline={inline}>
      {fields.map((fieldOrGroup, index) => {
        if ('fields' in fieldOrGroup) {
          return (
            <div key={fieldOrGroup.title || index}>
              {fieldOrGroup.title && <FormGroupTitle>{fieldOrGroup.title}</FormGroupTitle>}
              <FormGroupContainer key={index} $columns={fieldOrGroup.columns}>
                {fieldOrGroup.fields.map((field) => renderField(field))}
              </FormGroupContainer>
            </div>
          );
        }

        return renderField(fieldOrGroup);
      })}

      <SubmitButton type="submit" disabled={!isValid || isLoading || Object.keys(errors).length > 0} loading={isLoading}>
        {labelSubmit}
      </SubmitButton>
    </FormElement>
  );
};

export { Form };
