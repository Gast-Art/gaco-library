import styled from 'styled-components';

export const DetailsList = styled.dl<{ $hideBorder?: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
  width: max-content;

  dt,
  dd {
    margin: 0;
    padding: 0 0.5rem 0.125rem;
    ${({ theme, $hideBorder }) => ($hideBorder ? `border-bottom: 1px ${theme.colors.mutedBg} solid;` : '')};
  }

  dd {
    font-weight: 600;
  }

  dt:last-of-type,
  dd:last-of-type {
    border-bottom: none;
  }
`;
