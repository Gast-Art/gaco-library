import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Spinner as SpinnerRoot } from '../Spinner';

const Spinner = styled(SpinnerRoot)`
  margin-right: 0.5rem;
`;

const buttonVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
    ${Spinner} {
      border-color: ${({ theme }) => theme.colors.primaryForeground};
      border-right-color: transparent;
    }
  `,
  outline: css`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary}10;
      border-color: ${({ theme }) => theme.colors.primaryHover};
      color: ${({ theme }) => theme.colors.primaryHover};
    }
    ${Spinner} {
      border-color: ${({ theme }) => theme.colors.primary};
      border-right-color: transparent;
    }
  `,
  ghost: css`
    background-color: 'transparent';
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
    ${Spinner} {
      border-color: ${({ theme }) => theme.colors.primary};
      border-right-color: transparent;
    }
  `,
  destructive: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.errorForeground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.errorHover};
    }
    ${Spinner} {
      border-color: ${({ theme }) => theme.colors.errorForeground};
      border-right-color: transparent;
    }
  `,
};

const buttonSizes = {
  sm: css`
    height: 1.5rem;
    padding: 0 0.75rem;
  `,
  default: css`
    height: ${({ theme }) => theme.sizes.formControl};
    padding: 0 1rem;
  `,
  lg: css`
    height: 2.5rem;
    padding: 0 2rem;
  `,
  icon: css`
    height: 2.25rem;
    width: 2.25rem;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.default};
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
  transition: all 0.2s;
  outline: none;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ variant = 'default' }) => buttonVariants[variant]}
  ${({ size = 'default' }) => buttonSizes[size]}

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ loading = false, disabled, ...props }, ref) => {
  return (
    <StyledButton ref={ref} disabled={loading || disabled} {...props}>
      {loading && <Spinner size={1} className="mr-2" />} {props.children}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export { Button };
