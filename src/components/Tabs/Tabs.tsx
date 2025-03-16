import {
  Tabs,
  TabsContent,
  TabsListProps as TabsListPropsRoot,
  TabsList as TabsListRoot,
  TabsTriggerProps as TabsTriggerPropsRoot,
  TabsTrigger as TabsTriggerRoot,
} from '@radix-ui/react-tabs';
import { ComponentRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledTabsList = styled(TabsListRoot)<{ inline?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.grayLighter};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};

  ${({ inline }) =>
    !inline &&
    css`
      width: 100%;
      > * {
        flex: 1;
      }
    `}
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
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  background-color: transparent;

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

interface TabsProps extends TabsListPropsRoot {
  inline?: boolean;
}

const TabsList = forwardRef<ComponentRef<typeof TabsListRoot>, TabsProps>((props, ref) => <StyledTabsList ref={ref} {...props} />);

interface TabsTriggerProps extends TabsTriggerPropsRoot {
  'data-state'?: string;
  size?: keyof typeof triggerSizes;
}

const TabsTrigger = forwardRef<ComponentRef<typeof TabsTriggerRoot>, TabsTriggerProps>(({ children, ...props }, ref) => {
  return (
    <StyledTabsTrigger ref={ref} {...props}>
      {children}
    </StyledTabsTrigger>
  );
});

export { Tabs, TabsContent, TabsList, TabsTrigger };
