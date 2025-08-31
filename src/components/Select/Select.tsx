import { ChevronDown } from 'lucide-react';
import { FocusEvent, forwardRef, useState } from 'react';
import SelectRoot, { ActionMeta, components, DropdownIndicatorProps, OptionsOrGroups, SingleValue } from 'react-select';

import styled, { useTheme } from 'styled-components';
import { Container, ErrorIcon, ErrorMessage, Label, SelectStyling } from './styles';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id: string;
  className?: string;
  options: OptionsOrGroups<SelectOption, { label: string; options: SelectOption[] }>;
  menuPortalTarget?: HTMLElement;
  value?: SingleValue<SelectOption>;
  onChange: (selected: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
  onBlur?: (event: FocusEvent<HTMLDivElement>) => void;
  onFocus?: (event: FocusEvent<HTMLDivElement>) => void;
  label?: string;
  error?: string;
  noOptionsMessage?: () => string;
}

const StyledSelect = styled(SelectRoot<SelectOption>)`
  ${SelectStyling}
`;

interface SelectIndicatorProps extends DropdownIndicatorProps<SelectOption, false> {
  error?: string;
}

const SelectDropdownIndicator = (props: SelectIndicatorProps) => {
  return <components.DropdownIndicator {...props}>{props.error ? <ErrorIcon /> : <ChevronDown />}</components.DropdownIndicator>;
};

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ id, className, options, value, error, onChange, onBlur, onFocus, label, menuPortalTarget = document.body, noOptionsMessage }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();

    return (
      <div className={className} ref={ref}>
        <Container $error={!!error}>
          <StyledSelect
            id={id}
            options={options}
            menuPortalTarget={menuPortalTarget}
            value={value}
            onChange={(value, actionMeta) => onChange(value, actionMeta)}
            placeholder=" "
            classNamePrefix="react-select"
            noOptionsMessage={noOptionsMessage}
            styles={{
              menuPortal: (base) => ({ ...base, pointerEvents: 'auto', zIndex: theme.zIndices.dropdownMenu }),
            }}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            components={{
              DropdownIndicator: (props) => <SelectDropdownIndicator {...props} error={error} />,
            }}
          />

          {label && <Label $active={!!value?.value.length || isFocused}>{label}</Label>}
        </Container>
        {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
      </div>
    );
  },
);

Select.displayName = 'Select';
