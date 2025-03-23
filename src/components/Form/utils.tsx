import { Select } from '../Select';
import { TextInput } from '../TextInput';
import { FormFieldComponents } from './Form';

export const getField = (componentType?: FormFieldComponents) => {
  switch (componentType) {
    case FormFieldComponents.TEXT:
      return TextInput;
    case FormFieldComponents.SELECT:
      return Select;
    default:
      return TextInput;
  }
};
