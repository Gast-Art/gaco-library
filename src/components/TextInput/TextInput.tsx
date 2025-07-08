import { CircleAlert } from 'lucide-react';
import { InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding-top: 0.75rem;
`;

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
  left: 0;
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
  $hasIcon?: boolean;
}

const Input = styled.input<InputProps>`
  height: ${({ theme }) => theme.sizes.formControl};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem 0;
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.fonts.md};

  ${({ $hasIcon, $error }) => ($hasIcon || $error) && 'padding-right: 2rem;'}
  ${({ $error, theme }) => $error && `border-bottom-color: ${theme.colors.error};`}

  &:focus {
    ${({ theme, $error }) => !$error && `border-bottom-color: ${theme.colors.textInputBorderFocus};`}
    outline: none;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: -0.75rem;
    left: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.xs};
    color: ${({ theme }) => theme.colors.textInputLabel};
  }

  &:disabled {
    background-color: transparent;
    border-bottom-color: ${({ theme }) => theme.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`;

const ErrorIcon = styled(CircleAlert)`
  position: absolute;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.error};
  width: 1rem;
  pointer-events: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  pointer-events: none;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${({ theme }) => theme.colors.textInputIcon};
  }
`;

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type?: string;
  error?: string;
  icon?: ReactNode;
}

export const TextInput = ({ className, id, label, type = 'text', error, disabled, icon, ...props }: TextInputProps) => {
  return (
    <Container className={className}>
      <InputWrapper>
        <Input
          id={id}
          type={type}
          disabled={disabled}
          aria-invalid={!!error}
          placeholder=" "
          aria-describedby={error ? `${id}-error` : undefined}
          $error={!!error}
          $hasIcon={!!icon || !!error}
          {...(error ? { 'aria-errormessage': `${id}-error` } : {})}
          {...(label ? { 'aria-label': label } : {})}
          {...props}
        />
        {label && <Label htmlFor={id}>{label}</Label>}
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {error && (
          <IconWrapper>
            <ErrorIcon />
          </IconWrapper>
        )}
      </InputWrapper>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </Container>
  );
};
