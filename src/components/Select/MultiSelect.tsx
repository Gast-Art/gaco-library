import { ChevronDown } from 'lucide-react';
import { FC, useState } from 'react';
import SelectRoot, { ActionMeta, components, DropdownIndicatorProps, OptionsOrGroups } from 'react-select';
import styled from 'styled-components';
import { SelectOption } from './Select';
import { Container, ErrorIcon, ErrorMessage, Label, SelectStyling } from './styles';

interface MultiSelectProps {
  id: string;
  className?: string;
  options: OptionsOrGroups<SelectOption, { label: string; options: SelectOption[] }>;
  value?: SelectOption[];
  onChange: (selected: SelectOption[], actionMeta: ActionMeta<SelectOption>) => void;
  label?: string;
  error?: string;
}

const StyledMultiSelect = styled(SelectRoot<SelectOption, true>)`
  ${SelectStyling}
`;

interface MultiSelectIndicatorProps extends DropdownIndicatorProps<SelectOption, true> {
  error?: string;
}

const MultiSelectDropdownIndicator = (props: MultiSelectIndicatorProps) => {
  return <components.DropdownIndicator {...props}>{props.error ? <ErrorIcon /> : <ChevronDown />}</components.DropdownIndicator>;
};

export const MultiSelect: FC<MultiSelectProps> = ({ id, className, options, value, onChange, label, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={className}>
      <Container $error={!!error}>
        <StyledMultiSelect
          id={id}
          isMulti
          menuPortalTarget={document.body}
          options={options}
          value={value}
          onChange={(values, actionMeta) => onChange([...values], actionMeta)}
          placeholder=" "
          classNamePrefix="react-select"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          components={{
            DropdownIndicator: (props) => <MultiSelectDropdownIndicator {...props} error={error} />,
          }}
        />

        {label && <Label $active={!!value?.length || isFocused}>{label}</Label>}
      </Container>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </div>
  );
};
