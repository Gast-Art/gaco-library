import { FC, PropsWithChildren } from '../../../node_modules/react';
export type AlertType = 'error' | 'warning' | 'success' | 'info';
export interface AlertProps extends PropsWithChildren {
    type: AlertType;
    className?: string;
}
export declare const Alert: FC<AlertProps>;
//# sourceMappingURL=Alert.d.ts.map