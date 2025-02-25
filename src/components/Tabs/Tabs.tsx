import { Tabs, TabsContent, TabsList as TabsListRoot, TabsTriggerProps, TabsTrigger as TabsTriggerRoot } from '@radix-ui/react-tabs';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledTabsList = styled(TabsListRoot)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const triggerSizes = {
  default: css`
    height: ${({ theme }) => theme.sizes.formControl};
    font-size: ${({ theme }) => theme.sizes.fonts.sm};
    padding: 0 1rem;
  `,
  lg: css`
    height: 2.5rem;
    font-size: ${({ theme }) => theme.sizes.fonts.md};
    padding: 0 2rem;
  `,
};

const StyledTabsTrigger = styled(TabsTriggerRoot)<{ active?: boolean; size?: keyof typeof triggerSizes }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &[data-state='active'] {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.contentBg};
    color: var(--color-foreground);
    box-shadow: ${({ theme }) => theme.shadows.default};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
  }

  ${({ size = 'default' }) => triggerSizes[size]}
`;

const TabsList = forwardRef<ComponentRef<typeof TabsListRoot>, ComponentPropsWithoutRef<typeof TabsListRoot>>((props, ref) => (
  <StyledTabsList ref={ref} {...props} />
));

interface ExtendedTabsTriggerProps extends TabsTriggerProps {
  'data-state'?: string;
  size?: keyof typeof triggerSizes;
}

const TabsTrigger = forwardRef<ComponentRef<typeof TabsTriggerRoot>, ExtendedTabsTriggerProps>(({ children, ...props }, ref) => (
  <StyledTabsTrigger ref={ref} {...props}>
    {children}
  </StyledTabsTrigger>
));

export { Tabs, TabsContent, TabsList, TabsTrigger };
