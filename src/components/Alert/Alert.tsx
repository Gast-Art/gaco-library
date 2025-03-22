import { Ban, CircleAlert, CircleCheck, Info } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div<{ type: AlertType }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  margin: 0.5rem 0;
  color: white;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      case 'success':
        return theme.colors.success;
      case 'info':
        return theme.colors.info;
      default:
        return theme.colors.info;
    }
  }};
  border-bottom: 4px solid
    ${({ type, theme }) => {
      switch (type) {
        case 'error':
          return theme.colors.errorHover;
        case 'warning':
          return theme.colors.warningHover;
        case 'success':
          return theme.colors.successHover;
        case 'info':
          return theme.colors.infoHover;
        default:
          return theme.colors.infoHover;
      }
    }};

  a {
    color: white;
    text-decoration: underline;

    &:hover {
      color: white;
    }
  }
`;

const Icon = styled.span`
  margin-right: 1rem;
`;

type AlertType = 'error' | 'warning' | 'success' | 'info';

interface AlertProps extends PropsWithChildren {
  type: AlertType;
  className?: string;
}

export const Alert: FC<AlertProps> = ({ type, className, children }) => {
  const renderIcon = () => {
    switch (type) {
      case 'error':
        return <Ban />;
      case 'warning':
        return <CircleAlert />;
      case 'success':
        return <CircleCheck />;
      case 'info':
        return <Info />;
      default:
        return <Info />;
    }
  };

  return (
    <AlertWrapper type={type} className={className}>
      <Icon>{renderIcon()}</Icon>
      {children}
    </AlertWrapper>
  );
};
