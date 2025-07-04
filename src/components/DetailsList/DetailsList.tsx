import styled from 'styled-components';

export const DetailsList = styled.dl`
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
    border-bottom: 1px ${({ theme }) => theme.colors.mutedBg} solid;
  }

  dd {
    font-weight: 500;
  }

  dt:last-of-type,
  dd:last-of-type {
    border-bottom: none;
  }
`;
