import { FC } from 'react';

interface SpinnerProps {
  size?: number;
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ size = 2, className }) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white ${className}`}
      role="status"
      style={{ height: `${size}rem`, width: `${size}rem` }}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};
