import { Children, CSSProperties, FC, isValidElement, PropsWithChildren, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../theme';
import { LoadingOverlay } from '../LoadingOverlay';
import { H3 } from '../Typography';

export enum CardSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export const CardContainer = styled.div<{ $size?: CardSize }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.contentBg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};

  ${({ $size, theme }) => {
    switch ($size) {
      case CardSize.sm:
        return css`
          font-size: ${theme.sizes.fonts.sm};
          padding: 0.5rem;
          h3 {
            font-size: ${theme.sizes.fonts.sm};
          }
          ${media.md`
            padding: 0.75rem;
            h3 {
              font-size: ${theme.sizes.fonts.md};
            }
          `}
        `;
      case CardSize.md:
      default:
        return css`
          padding: 0.75rem;
          font-size: ${theme.sizes.fonts.md};
          h3 {
            font-size: ${theme.sizes.fonts.md};
          }
          ${media.md`
            padding: 1rem;
            h3 {
              font-size: ${theme.sizes.fonts.lg};
            }
          `}
        `;
      case CardSize.lg:
        return css`
          padding: 1.5rem;
          font-size: ${theme.sizes.fonts.md};
          h3 {
            font-size: ${theme.sizes.fonts.xl};
          }
          ${media.md`
            padding: 2rem;
            h3 {
             font-size: ${theme.sizes.fonts.xxl};
            }
          `}
        `;
    }
  }}
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

interface CardProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  loading?: string | boolean;
  size?: CardSize;
}

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
  size?: CardSize;
}

export const Card: FC<CardProps> = ({ children, loading, size = CardSize.md, ...props }) => {
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
    <CardContainer $size={size} {...props}>
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
