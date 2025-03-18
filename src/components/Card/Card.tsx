import { Children, CSSProperties, FC, isValidElement, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../theme';
import { LoadingOverlay } from '../LoadingOverlay';
import { H3 } from '../Typography';

export const CardContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.contentBg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  width: 100%;

  padding: 1rem 1.5rem;
  overflow: hidden;

  display: flex;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${media.md`
      max-height: none;
  `}
`;

const Title = styled(H3)`
  margin-top: 0;
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div``;

export const CardSections = Object.assign(
  {},
  {
    Title,
    Content,
    LeftColumn,
    RightColumn,
  },
);

interface CardProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  loading?: string | boolean;
}

export const Card: FC<CardProps> = ({ children, loading, ...props }) => {
  let slotTitle: ReactNode;
  let slotContent: ReactNode;
  let slotLeftColumn: ReactNode;
  let slotRightColumn: ReactNode;

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
    } else if (child.type === CardSections.LeftColumn) {
      slotLeftColumn = child;
      return false;
    } else if (child.type === CardSections.RightColumn) {
      slotRightColumn = child;
      return false;
    } else {
      return true;
    }
  });

  return (
    <CardContainer {...props}>
      {loading && <LoadingOverlay>{typeof loading === 'string' ? loading : undefined}</LoadingOverlay>}

      {slotLeftColumn}

      <CardInner>
        {slotTitle}
        {slotContent}
        {nonSlotChildren}
      </CardInner>

      {slotRightColumn}
    </CardContainer>
  );
};
