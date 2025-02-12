import styled from 'styled-components';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
  font-weight: bold;
  margin-bottom: 0.25rem;
  display: block;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface InputProps {
  $error?: boolean;
}

const Input = styled.input<InputProps>`
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.textInputBorder};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  padding: 0.5rem 1rem;
  width: 100%;

  ${({ $error }) => $error && `padding-right: 2rem;`}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textInputDisabledBackground};
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
  margin-bottom: 1.5rem;
`;

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}

export const TextInput = ({ id, label, value, onChange, placeholder, type = 'text', error, disabled, ...props }: TextInputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          $error={!!error}
          {...props}
        />
        {error && <Icon />}
      </InputWrapper>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </Container>
  );
};
