import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { InputHTMLAttributes, forwardRef } from 'react';
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
  left: 0.25rem;
  top: -0.75rem;
  color: ${({ theme }) => theme.colors.textInputLabel};
  font-size: ${({ theme }) => theme.sizes.fonts.xs};
  pointer-events: none;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input<{ $error?: boolean }>`
  height: ${({ theme }) => theme.sizes.formControl};
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.textInputBorder)};
  background-color: transparent;
  padding: 0.25rem;
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  font-family: ${({ theme }) => theme.fonts.body};

  &:focus {
    border-bottom-color: ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.textInputBorderFocus)};
    outline: none;
  }

  appearance: none; /* Remove browser default icon */
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
`;

const IconWrapper = styled.div<{ $error?: boolean }>`
  position: absolute;
  right: 0.5rem;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $error, theme }) => $error && `color: ${theme.colors.error};`}
`;

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({ id, label, error, value, ...props }, ref) => {
  const formattedValue = typeof value === 'string' ? value : value instanceof Date ? format(value, 'yyyy-MM-dd') : undefined;

  return (
    <Container>
      <InputWrapper>
        <Input id={id} type="date" $error={!!error} value={formattedValue} ref={ref} {...props} />
        <IconWrapper $error={!!error}>
          <Calendar size={16} />
        </IconWrapper>
        {label && <Label htmlFor={id}>{label}</Label>}
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
});

DatePicker.displayName = 'DatePicker';
