import { ChevronDown, CircleAlert } from 'lucide-react';
import { FC, useState } from 'react';
import SelectRoot, { ActionMeta, components, DropdownIndicatorProps, SingleValue } from 'react-select';
import styled, { css } from 'styled-components';
import { DropdownMenuContentStyling, DropdownMenuItemStyling } from '../DropdownMenu';

export interface SelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  id: string;
  className?: string;
  options: SelectOption[];
  value?: SelectOption[];
  onChange: (selected: SelectOption[], actionMeta: ActionMeta<SelectOption>) => void;
  label?: string;
  error?: string;
}

const Container = styled.div<{ $error?: boolean }>`
  position: relative;
  padding-top: 0.75rem;

  && {
    .react-select__control {
      ${({ $error, theme }) =>
        $error &&
        `
      border-bottom-color: ${theme.colors.error};
      svg {
        color: ${theme.colors.error};
      }
      &:hover, .react-select__control--is-focused {
        border-bottom-color: ${theme.colors.error};
      }
      .react-select__indicator-separator {
        background-color: ${theme.colors.error};
      }
      `}
    }
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`;

const Label = styled.label<{ $active?: boolean }>`
  position: absolute;
  left: 0.25rem;
  color: ${({ theme }) => theme.colors.textInputLabel};
  pointer-events: none;
  transition: all 0.2s ease;

  ${({ $active, theme }) =>
    $active
      ? `
        top: 0rem;
        font-size: ${theme.sizes.fonts.xs};
        `
      : `
        top: 50%;
        font-size: ${theme.sizes.fonts.md};
  `}
`;

const SelectStyling = css`
  .react-select__control {
    min-height: ${({ theme }) => theme.sizes.formControl};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textInputBorder};
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.textInputBorderFocus};
    }
  }

  .react-select__control--is-focused {
    border-bottom-color: ${({ theme }) => theme.colors.textInputBorderFocus};
  }

  .react-select__menu {
    margin: 0;
    ${DropdownMenuContentStyling}
  }

  .react-select__menu-list {
    padding: 0;
  }

  .react-select__option {
    ${DropdownMenuItemStyling}
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors.mutedBg};
  }

  .react-select__multi-value {
    .react-select__multi-value__label {
      font-size: ${({ theme }) => theme.sizes.fonts.xxs};
    }
    .react-select__multi-value__remove {
      padding-left: 2px;
      padding-right: 2px;
    }

    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 2px 4px;
  }
`;

const StyledMultiSelect = styled(SelectRoot<SelectOption, true>)`
  ${SelectStyling}
`;

interface MultiSelectIndicatorProps extends DropdownIndicatorProps<SelectOption, true> {
  error?: string;
}

const MultiSelectDropdownIndicator = (props: MultiSelectIndicatorProps) => {
  return <components.DropdownIndicator {...props}>{props.error ? <CircleAlert /> : <ChevronDown />}</components.DropdownIndicator>;
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

export interface SelectProps {
  id: string;
  className?: string;
  options: SelectOption[];
  value?: string;
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

export const Select: FC<SelectProps> = ({ id, className, options, value, error, onChange, label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const optionValue = options.find((option) => option.value === value);

  return (
    <div className={className}>
      <Container $error={!!error}>
        <StyledSelect
          id={id}
          options={options}
          menuPortalTarget={document.body}
          value={optionValue}
          onChange={(value, actionMeta) => onChange(value, actionMeta)}
          placeholder=" "
          classNamePrefix="react-select"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          components={{
            DropdownIndicator: (props) => <SelectDropdownIndicator {...props} error={error} />,
          }}
        />

        {label && <Label $active={!!optionValue?.value.length || isFocused}>{label}</Label>}
      </Container>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </div>
  );
};
