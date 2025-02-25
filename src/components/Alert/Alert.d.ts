import { FC, PropsWithChildren } from '../../../node_modules/react';
type AlertType = 'error' | 'warning' | 'success' | 'info';
interface AlertProps extends PropsWithChildren {
    type: AlertType;
}
export declare const Alert: FC<AlertProps>;
export {};
//# sourceMappingURL=Alert.d.ts.map