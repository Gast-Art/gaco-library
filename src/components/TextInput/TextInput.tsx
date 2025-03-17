import { InputHTMLAttributes } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`;

const Label = styled.label`
  position: absolute;
  top: 0.5rem;
  left: 0.25rem;
  right: 0.25rem;
  color: ${({ theme }) => theme.colors.textInputLabel};
  pointer-events: none;
  transition: all 0.2s ease;

  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface InputProps {
  $error?: boolean;
}

const Input = styled.input<InputProps & { value: string }>`
  height: ${({ theme }) => theme.sizes.formControl};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem;
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.fonts.md};

  ${({ $error, theme }) => $error && `padding-right: 2rem; border-bottom-color: ${theme.colors.error};`}

  &:focus {
    ${({ theme, $error }) => !$error && `border-bottom-color: ${theme.colors.textInputBorderFocus};`}
    outline: none;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: -0.75rem;
    font-size: ${({ theme }) => theme.sizes.fonts.xs};
    color: ${({ theme }) => theme.colors.textInputLabel};
  }

  &:disabled {
    background-color: transparent;
    border-bottom-color: ${({ theme }) => theme.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`;

const Icon = styled(FaExclamationCircle)`
  position: absolute;
  right: 0.75rem;
  color: ${({ theme }) => theme.colors.error};
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  padding-top: 1rem;
`;

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
}

export const TextInput = ({ className, id, label, value, onChange, type = 'text', error, disabled, ...props }: TextInputProps) => {
  return (
    <Container className={className}>
      <InputWrapper>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-invalid={!!error}
          placeholder=" "
          aria-describedby={error ? `${id}-error` : undefined}
          $error={!!error}
          {...props}
        />
        {label && <Label htmlFor={id}>{label}</Label>}
        {error && <Icon />}
      </InputWrapper>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </Container>
  );
};
