import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'ghost' | 'underline';
  icon?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'default', icon, error, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              variant === 'ghost' && 'border-none bg-transparent',
              variant === 'underline' && 'border-0 border-b-2 rounded-none',
              error && 'border-destructive focus-visible:ring-destructive',
              icon && 'pl-10',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };