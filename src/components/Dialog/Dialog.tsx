import { X } from 'lucide-react';
import { Dialog as DialogRoot } from 'radix-ui';
import { PropsWithChildren, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Card, CardSections } from '../Card';

const DialogOverlay = styled(DialogRoot.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: ${({ theme }) => theme.zIndices.dialogOverlay};
`;

const DialogContent = styled(DialogRoot.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  z-index: ${({ theme }) => theme.zIndices.dialog};
  width: 90%;
  max-width: 30rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  transition: opacity 0.2s ease-in-out;
`;

interface DialogProps extends PropsWithChildren {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  title?: string;
  content?: ReactNode;
  actions?: ReactNode;
}

export const Dialog = ({ trigger, open, onOpenChange, title, content, actions, children }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenChange = (_open: boolean) => {
    setIsOpen(_open);
    onOpenChange?.(_open);
  };

  return (
    <DialogRoot.Root open={open !== undefined ? open : isOpen} onOpenChange={handleOpenChange}>
      {trigger && <DialogRoot.Trigger asChild>{trigger}</DialogRoot.Trigger>}
      <DialogRoot.Portal>
        <DialogOverlay>
          <DialogContent>
            <Card>
              <DialogRoot.Close asChild>
                <CloseButton>
                  <X />
                </CloseButton>
              </DialogRoot.Close>

              {title && (
                <DialogRoot.Title asChild>
                  <CardSections.Title>{title}</CardSections.Title>
                </DialogRoot.Title>
              )}
              {(content || children) && (
                <DialogRoot.Description asChild>
                  <>
                    <CardSections.Content>{content}</CardSections.Content>
                    {children}
                    {actions && <CardSections.Actions>{actions}</CardSections.Actions>}
                  </>
                </DialogRoot.Description>
              )}
            </Card>
          </DialogContent>
        </DialogOverlay>
      </DialogRoot.Portal>
    </DialogRoot.Root>
  );
};
