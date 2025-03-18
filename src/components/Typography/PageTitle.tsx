import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.fonts.xxxl};
  font-family: 'Lora', serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 1rem;
`;
