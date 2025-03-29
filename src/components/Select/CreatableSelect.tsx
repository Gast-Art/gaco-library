import { CircleAlert, ChevronDown } from 'lucide-react';
import { FC, useState } from 'react';
import { SingleValue, ActionMeta, DropdownIndicatorProps, components } from 'react-select';
import styled from 'styled-components';
import { SelectOption } from './Select';
import CreatableSelectRoot from 'react-select/creatable';
import { SelectStyling, Container, ErrorMessage, Label } from './styles';

interface CreatableSelectProps {
  id: string;
  className?: string;
  options: SelectOption[];
  value?: SingleValue<SelectOption>;
  defaultInputValue?: string;
  onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
  onCreateOption?: (inputValue: string) => void;
  filterOption?: (option: SelectOption, inputValue: string) => boolean;
  label?: string;
  error?: string;
}

const StyledCreatableSelect = styled(CreatableSelectRoot<SelectOption>)`
  ${SelectStyling}
`;

interface CreatableSelectIndicatorProps extends DropdownIndicatorProps<SelectOption, false> {
  error?: string;
}

const CreatableSelectDropdownIndicator = (props: CreatableSelectIndicatorProps) => {
  return <components.DropdownIndicator {...props}>{props.error ? <CircleAlert /> : <ChevronDown />}</components.DropdownIndicator>;
};

export const CreatableSelect: FC<CreatableSelectProps> = ({
  id,
  className,
  options,
  value,
  defaultInputValue,
  error,
  onChange,
  onCreateOption,
  filterOption,
  label,
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
          isClearable
          value={value}
          defaultInputValue={defaultInputValue}
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
