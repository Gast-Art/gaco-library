import React, { FC } from 'react';
import styled from 'styled-components';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.span<{ $checked: boolean }>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: ${({ $checked, theme }) => ($checked ? theme.colors.primary : '#fff')};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  transition: all 150ms;
  margin-right: 0.5rem;
  position: relative;

  &:after {
    content: '';
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    position: absolute;
    left: 5px;
    top: 1px;
    width: 0.25rem;
    height: 0.5rem;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const Checkbox: FC<CheckboxProps> = ({ label, checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox $checked={!!checked} />
    {label && <span>{label}</span>}
  </CheckboxContainer>
);
