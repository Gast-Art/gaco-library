import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const badgeStyles = {
  default: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  outline: css`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  `,
  error: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.error};
    color: #fff;
    &:hover {
      background-color: ${({ theme }) => theme.colors.errorHover};
    }
  `,
  success: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.success};
    color: #fff;
    &:hover {
      background-color: ${({ theme }) => theme.colors.successHover};
    }
  `,
  warning: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.warning};
    color: #fff;
    &:hover {
      background-color: ${({ theme }) => theme.colors.warningHover};
    }
  `,
};

const StyledBadge = styled.div<{ variant: keyof typeof badgeStyles }>`
  display: inline-flex;
  align-items: center;
  padding: 0.3125rem 0.725rem;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  font-size: ${({ theme }) => theme.sizes.fonts.xs};
  font-weight: 600;
  transition: all 0.2s;
  outline: none;

  ${({ variant }) => badgeStyles[variant]}
`;

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeStyles;
}

export const Badge: FC<BadgeProps> = ({ className, variant = 'default', ...props }) => {
  return <StyledBadge className={className} variant={variant} {...props} />;
};
