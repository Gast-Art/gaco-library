import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, ReactNode, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

export const DropdownMenuContentStyling = css`
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 10rem;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndices.dropdownMenu};
`;

const DropdownMenuContent = styled(RadixDropdownMenu.Content)<{ $hide?: boolean }>`
  ${DropdownMenuContentStyling}
  display: ${({ $hide }) => ($hide ? 'none' : 'block')};
`;

const Separator = styled(RadixDropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.separator};
`;

export const DropdownMenuItemStyling = css`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background-color 0.2s ease;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mutedBg};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.mutedBg};
  }

  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.75rem;
  }
`;

const DropdownMenuItem = styled(RadixDropdownMenu.Item)<{ disabled?: boolean }>`
  ${DropdownMenuItemStyling}

  ${({ disabled, theme }) =>
    disabled
      ? `
    color: ${theme.colors.textMuted};
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
    }
  `
      : ''}
`;

interface DropdownMenuProps {
  items: ({ disabled?: boolean; content: ReactNode; onSelect?: (e: Event) => void } | 'seperator')[];
  trigger?: ReactNode;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  side?: 'left' | 'right';
  sideOffset?: number;
  dialogOpen?: boolean;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ trigger, items, align, alignOffset, side, sideOffset, dialogOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dialogOpen) {
      setOpen(false);
    }
  }, [dialogOpen]);

  return (
    <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
      {trigger && <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>}

      <RadixDropdownMenu.Portal>
        <DropdownMenuContent align={align} alignOffset={alignOffset} side={side} sideOffset={sideOffset}>
          {items.map((item, index) =>
            item === 'seperator' ? (
              <Separator key={index} />
            ) : (
              <DropdownMenuItem key={index} onSelect={item.onSelect} disabled={item.disabled}>
                {item.content}
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

export { DropdownMenu };
