import { Ban, Info } from 'lucide-react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Spinner as SpinnerRoot } from '../Spinner';

const OverlayWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndicies.LoadingOverlay};

  color: white;
  background-color: black;
  opacity: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 1rem;
  }
`;

const Spinner = styled(SpinnerRoot)`
  margin-bottom: 1rem;

  border-color: white;
  border-right-color: transparent;
`;

interface LoadingOverlayProps extends PropsWithChildren {
  info?: string | boolean;
  error?: string | boolean;
}

export const LoadingOverlay = ({ children, info, error }: LoadingOverlayProps) => {
  return (
    <OverlayWrapper>
      {!error && !info && <Spinner />}
      {error && (
        <>
          <Ban /> {error}
        </>
      )}
      {info && (
        <>
          <Info /> {info}
        </>
      )}
      {children}
    </OverlayWrapper>
  );
};
