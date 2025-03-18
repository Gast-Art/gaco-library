import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface DropdownMenuProps {
  trigger: ReactNode;
  items: ({ content: ReactNode; onSelect?: () => void } | 'seperator')[];
}

const StyledContent = styled(RadixDropdownMenu.Content)`
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 10rem;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndicies.DropdownMenu};
`;

const StyledSeparator = styled(RadixDropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.separator};
`;

const StyledItem = styled(RadixDropdownMenu.Item)`
  padding: 0.5rem 1rem;
  color: #333333;
  cursor: pointer;
  transition: background-color 0.2s ease;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mutedBg};
  }

  &:focus {
    outline: none;
    background-color: #e0e0e0;
  }

  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
  }
`;

interface DropdownMenuProps {
  trigger: ReactNode;
  items: ({ content: ReactNode; onSelect?: () => void } | 'seperator')[];
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  side?: 'left' | 'right';
  sideOffset?: number;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ trigger, items, align, alignOffset, side, sideOffset }) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
      <StyledContent align={align} alignOffset={alignOffset} side={side} sideOffset={sideOffset}>
        {items.map((item, index) =>
          item === 'seperator' ? (
            <StyledSeparator key={index} />
          ) : (
            <StyledItem key={index} onSelect={item.onSelect}>
              {item.content}
            </StyledItem>
          ),
        )}
      </StyledContent>
    </RadixDropdownMenu.Root>
  );
};

export { DropdownMenu };
