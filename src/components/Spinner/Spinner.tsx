import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<{ size: number }>`
  display: inline-block;
  border: 4px solid ${({ theme }) => theme?.colors?.text};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
  position: relative;
  text-indent: -9999px;
  overflow: hidden;
  white-space: nowrap;
`;

interface SpinnerProps {
  size?: number;
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ size = 2, className }) => {
  return (
    <SpinnerWrapper size={size} className={className} role="status">
      Loading...
    </SpinnerWrapper>
  );
};
