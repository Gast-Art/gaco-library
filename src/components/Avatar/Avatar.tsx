import * as AvatarPrimitive from '@radix-ui/react-avatar';
import styled from 'styled-components';

export const Avatar = styled(AvatarPrimitive.Root)`
  position: relative;
  display: flex;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
`;

export const AvatarImage = styled(AvatarPrimitive.Image)`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
`;

export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mutedBg};
`;
