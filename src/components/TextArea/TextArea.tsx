import { CircleAlert } from 'lucide-react';
import { TextareaHTMLAttributes } from 'react';
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

const TextareaWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface TextareaProps {
  $error?: boolean;
}

const StyledTextarea = styled.textarea<TextareaProps>`
  min-height: 4rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem;
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  font-family: ${({ theme }) => theme.fonts.body};
  resize: vertical;

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

const ErrorIcon = styled(CircleAlert)`
  width: 0.875rem;
  height: 0.875rem;
  position: absolute;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.error};
  pointer-events: none;
`;

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  error?: string;
}

export const TextArea = ({ className, id, label, error, disabled, ...props }: TextAreaProps) => {
  return (
    <Container className={className}>
      <TextareaWrapper>
        <StyledTextarea
          id={id}
          disabled={disabled}
          aria-invalid={!!error}
          placeholder=" "
          aria-describedby={error ? `${id}-error` : undefined}
          $error={!!error}
          {...props}
        />
        {label && <Label htmlFor={id}>{label}</Label>}
        {error && <ErrorIcon />}
      </TextareaWrapper>
      {error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
    </Container>
  );
};
