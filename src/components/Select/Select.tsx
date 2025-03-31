import { ChevronDown, CircleAlert } from 'lucide-react';
import { FC, useState } from 'react';
import SelectRoot, { ActionMeta, components, DropdownIndicatorProps, SingleValue } from 'react-select';

import styled, { useTheme } from 'styled-components';
import { Container, ErrorMessage, Label, SelectStyling } from './styles';

export interface SelectOption {
  value: string;
  label: string;
  onClick?: () => void;
  border?: boolean;
}

export interface SelectProps {
  id: string;
  className?: string;
  options: SelectOption[];
  menuPortalTarget?: HTMLElement;
  value?: SingleValue<SelectOption>;
  onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
  label?: string;
  error?: string;
}

const StyledSelect = styled(SelectRoot<SelectOption>)`
  ${SelectStyling}
`;

interface SelectIndicatorProps extends DropdownIndicatorProps<SelectOption, false> {
  error?: string;
}

const SelectDropdownIndicator = (props: SelectIndicatorProps) => {
  return <components.DropdownIndicator {...props}>{props.error ? <CircleAlert /> : <ChevronDown />}</components.DropdownIndicator>;
};

export const Select: FC<SelectProps> = ({ id, className, options, value, error, onChange, label, menuPortalTarget = document.body }) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  return (
    <div className={className}>
      <Container $error={!!error}>
        <StyledSelect
          id={id}
          options={options}
          menuPortalTarget={menuPortalTarget}
          value={value}
          onChange={(value, actionMeta) => onChange(value, actionMeta)}
          placeholder=" "
          classNamePrefix="react-select"
          styles={{
            menuPortal: (base) => ({ ...base, pointerEvents: 'auto', zIndex: theme.zIndicies.dropdownMenu }),
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          components={{
            DropdownIndicator: (props) => <SelectDropdownIndicator {...props} error={error} />,
          }}
        />

        {label && <Label $active={!!value?.value.length || isFocused}>{label}</Label>}
      </Container>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </div>
  );
};
