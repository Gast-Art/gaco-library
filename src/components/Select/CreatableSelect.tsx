import { ChevronDown } from 'lucide-react';
import { FC, useState } from 'react';
import { ActionMeta, DropdownIndicatorProps, SingleValue, components } from 'react-select';
import CreatableSelectRoot from 'react-select/creatable';
import styled from 'styled-components';
import { SelectOption } from './Select';
import { Container, ErrorIcon, ErrorMessage, Label, SelectStyling } from './styles';

export interface CreatableSelectProps {
  id: string;
  className?: string;
  options: SelectOption[];
  value?: SingleValue<SelectOption>;
  defaultInputValue?: string;
  createOptionPosition?: 'first' | 'last';
  onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
  onCreateOption?: (inputValue: string) => void;
  filterOption?: (option: SelectOption, inputValue: string) => boolean;
  label?: string;
  error?: string;
  isClearable?: boolean;
}

const StyledCreatableSelect = styled(CreatableSelectRoot<SelectOption>)`
  ${SelectStyling}
`;

interface CreatableSelectIndicatorProps extends DropdownIndicatorProps<SelectOption, false> {
  error?: string;
}

const CreatableSelectDropdownIndicator = (props: CreatableSelectIndicatorProps) => {
  return <components.DropdownIndicator {...props}>{props.error ? <ErrorIcon /> : <ChevronDown />}</components.DropdownIndicator>;
};

export const CreatableSelect: FC<CreatableSelectProps> = ({
  id,
  className,
  options,
  value,
  defaultInputValue,
  error,
  createOptionPosition,
  onChange,
  onCreateOption,
  filterOption,
  label,
  isClearable = true,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = !!value?.value.length || !!defaultInputValue;

  return (
    <div className={className}>
      <Container $error={!!error}>
        <StyledCreatableSelect
          id={id}
          options={options}
          menuPortalTarget={document.body}
          isClearable={isClearable}
          value={value}
          defaultInputValue={defaultInputValue}
          createOptionPosition={createOptionPosition}
          onChange={(value, actionMeta) => onChange(value, actionMeta)}
          onCreateOption={onCreateOption}
          placeholder=" "
          classNamePrefix="react-select"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          filterOption={filterOption}
          components={{
            DropdownIndicator: (props) => <CreatableSelectDropdownIndicator {...props} error={error} />,
          }}
        />

        {label && <Label $active={hasValue || isFocused}>{label}</Label>}
      </Container>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </div>
  );
};
