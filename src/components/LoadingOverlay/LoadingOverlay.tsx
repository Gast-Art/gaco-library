import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Spinner as SpinnerRoot } from '../Spinner';

const OverlayWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  color: white;
  background-color: black;
  opacity: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled(SpinnerRoot)`
  margin-bottom: 1rem;

  border-color: white;
  border-right-color: transparent;
`;

export const LoadingOverlay = ({ children }: PropsWithChildren) => {
  return (
    <OverlayWrapper>
      <Spinner />
      {children}
    </OverlayWrapper>
  );
};
