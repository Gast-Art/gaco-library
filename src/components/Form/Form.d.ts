import { ComponentProps } from '../../../node_modules/react';
import { DefaultValues, FieldValues, Path, SubmitHandler } from 'react-hook-form';
import { MultiSelect, Select } from '../Select';
import { TextInput } from '../TextInput';
import * as yup from 'yup';
export declare enum FormFieldComponents {
    TEXT = "text",
    SELECT = "select",
    MULTI_SELECT = "multiSelect"
}
interface FormProps<T extends FieldValues = FieldValues> {
    schema?: yup.ObjectSchema<any>;
    onSubmit: SubmitHandler<T>;
    labelSubmit?: string;
    fields: Array<({
        name: Path<T>;
        component: FormFieldComponents.TEXT;
    } & Omit<ComponentProps<typeof TextInput>, 'id' | 'error'>) | ({
        name: Path<T>;
        component: FormFieldComponents.SELECT;
    } & Omit<ComponentProps<typeof Select>, 'id' | 'error' | 'onChange'>) | ({
        name: Path<T>;
        component: FormFieldComponents.MULTI_SELECT;
    } & Omit<ComponentProps<typeof MultiSelect>, 'id' | 'error' | 'onChange'>)>;
    isLoading?: boolean;
    initialValues?: DefaultValues<T>;
}
declare const Form: <T extends FieldValues = FieldValues>({ schema, onSubmit, labelSubmit, fields, isLoading, initialValues, }: FormProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Form };
//# sourceMappingURL=Form.d.ts.map