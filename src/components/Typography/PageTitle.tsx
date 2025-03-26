import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.fonts.xxxl};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 1rem;
`;
