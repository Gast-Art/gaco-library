import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { CardContainer, Card as CardRoot, CardSections, CardSize } from '../Card';

export interface CardProps extends PropsWithChildren {
  className?: string;
  id: string | number;
  size?: CardSize;
  title?: ReactNode;
  // subtitle?: string;
  content?: ReactNode;
  rightColumn?: ReactNode;
  leftColumn?: ReactNode;
  onClick?: () => void;
}

const Card = (card: CardProps) => {
  return (
    <CardRoot onClick={card.onClick} className={card.className} size={card.size}>
      {card.title && <CardSections.Title>{card.title}</CardSections.Title>}
      {/* {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>} */}
      {card.content && <CardSections.Content>{card.content}</CardSections.Content>}
      {card.rightColumn && <CardSections.RightColumn>{card.rightColumn}</CardSections.RightColumn>}
      {card.leftColumn && <CardSections.LeftColumn>{card.leftColumn}</CardSections.LeftColumn>}
    </CardRoot>
  );
};

const CardListContainer = styled.div`
  > ${CardContainer} {
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLighter};

    &:first-of-type {
      border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius};
      border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius};
    }

    &:last-of-type {
      border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};
      border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius};
      border: 0;
    }
  }
`;

interface CardListProps extends PropsWithChildren {
  cards?: CardProps[];
  columns?: number;
}

export const CardList = ({ children, cards }: CardListProps) => {
  return (
    <CardListContainer>
      {cards?.map((card) => <Card key={card.id} {...card} />)}
      {children}
    </CardListContainer>
  );
};
