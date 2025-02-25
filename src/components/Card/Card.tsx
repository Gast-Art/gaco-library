import { Children, isValidElement, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../theme';
import { H2 } from '../Typography';

const CardContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.contentBg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  width: 100%;
  height: 100%;

  flex: 1;
  padding: 1rem 1.5rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${media.md`
      max-height: none;
  `}
`;

const Title = styled(H2)`
  margin-top: 0;
`;

export const CardSections = Object.assign(
  {},
  {
    Title,
    Content,
  },
);

export const Card = ({ children, ...props }: PropsWithChildren) => {
  let slotTitle: ReactNode;
  let slotContent: ReactNode;

  const nonSlotChildren = Children.toArray(children).filter((child) => {
    if (typeof child === 'string') {
      return true;
    }

    if (!isValidElement(child)) {
      return false;
    }

    if (child.type === CardSections.Title) {
      slotTitle = child;
      return false;
    } else if (child.type === CardSections.Content) {
      slotContent = child;
      return false;
    } else {
      return true;
    }
  });

  return (
    <CardContainer {...props}>
      {slotTitle}

      {nonSlotChildren}

      {slotContent}
    </CardContainer>
  );
};
