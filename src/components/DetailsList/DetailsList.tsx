import styled from 'styled-components';

export const DetailsList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-row-gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;

  dt,
  dd {
    margin: 0;
    padding: 0 0 0.125rem;
    border-bottom: 1px ${({ theme }) => theme.colors.mutedBg} solid;
  }

  dd {
    font-weight: 500;
    padding-left: 0.5rem;
  }

  dt {
    padding: 0;
  }

  dt:last-of-type,
  dd:last-of-type {
    border-bottom: none;
  }
`;
