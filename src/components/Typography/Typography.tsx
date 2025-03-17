import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.sizes.fonts.xxl};
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.sizes.fonts.xl};
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.sizes.fonts.lg};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Small = styled.small`
  font-size: ${({ theme }) => theme.sizes.fonts.xxs};
`;
