import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const badgeStyles = (hasOnClick: boolean) => ({
  default: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => {
      if (hasOnClick) {
        return `
          cursor: pointer;
          &:hover {
            background-color: ${theme.colors.grayLighter};
          }`;
      }
    }}
  `,
  primary: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
    ${({ theme }) => {
      if (hasOnClick) {
        return `
          cursor: pointer;
          &:hover {
            background-color: ${theme.colors.primaryHover};
          }`;
      }
    }}
  `,
  outline: css`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  `,
  error: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.error};
    color: #fff;
    ${({ theme }) => {
      if (hasOnClick) {
        return `
          cursor: pointer;
          &:hover {
            background-color: ${theme.colors.errorHover};
          }`;
      }
    }}
  `,
  success: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.success};
    color: #fff;
    ${({ theme }) => {
      if (hasOnClick) {
        return `
          cursor: pointer;
          &:hover {
            background-color: ${theme.colors.errorHover};
          }`;
      }
    }}
  `,
  warning: css`
    border: transparent;
    background-color: ${({ theme }) => theme.colors.warning};
    color: #fff;
      ${({ theme }) => {
        if (hasOnClick) {
          return `
          cursor: pointer;
          &:hover {
            background-color: ${theme.colors.warningHover};
          }`;
        }
      }}}
  `,
});

type variants = keyof ReturnType<typeof badgeStyles>;

const StyledBadge = styled.div<{ $variant: variants }>`
  display: inline-flex;
  align-items: center;
  padding: 0.3125rem 0.725rem;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  font-size: ${({ theme }) => theme.sizes.fonts.xs};
  font-weight: 600;
  transition: all 0.2s;
  outline: none;

  ${({ $variant, onClick }) => badgeStyles(!!onClick)[$variant]}
`;

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: variants;
  onClick?: () => void;
}

export const Badge: FC<BadgeProps> = ({ className, variant = 'default', ...props }) => {
  return <StyledBadge className={className} $variant={variant} {...props} />;
};
