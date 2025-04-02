import { ComponentProps } from '../../../node_modules/react';
import { DefaultValues, FieldValues, Path, SubmitHandler } from 'react-hook-form';
import { DatePicker } from '../DatePicker';
import { CreatableSelect, MultiSelect, Select } from '../Select';
import { TextArea } from '../TextArea';
import { TextInput } from '../TextInput';
import * as yup from 'yup';
export declare enum FormFieldComponents {
    TEXT = "text",
    SELECT = "select",
    MULTI_SELECT = "multiSelect",
    CREATABLE_SELECT = "creatableSelect",
    TEXT_AREA = "textArea",
    DATE_PICKER = "datePicker"
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
    } & Omit<ComponentProps<typeof MultiSelect>, 'id' | 'error' | 'onChange'>) | ({
        name: Path<T>;
        component: FormFieldComponents.CREATABLE_SELECT;
    } & Omit<ComponentProps<typeof CreatableSelect>, 'id' | 'error' | 'onChange'>) | ({
        name: Path<T>;
        component: FormFieldComponents.TEXT_AREA;
    } & Omit<ComponentProps<typeof TextArea>, 'id' | 'error'>) | ({
        name: Path<T>;
        component: FormFieldComponents.DATE_PICKER;
    } & Omit<ComponentProps<typeof DatePicker>, 'id' | 'error'>)>;
    isLoading?: boolean;
    initialValues?: DefaultValues<T>;
    className?: string;
    inline?: boolean;
}
declare const Form: <T extends FieldValues = FieldValues>({ schema, onSubmit, labelSubmit, fields, inline, isLoading, initialValues, className, }: FormProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Form };
//# sourceMappingURL=Form.d.ts.map