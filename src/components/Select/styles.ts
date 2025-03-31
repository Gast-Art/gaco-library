import styled, { css } from 'styled-components';
import { DropdownMenuContentStyling, DropdownMenuItemStyling } from '../DropdownMenu';

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

export { Container, ErrorMessage, Label, SelectStyling };
