import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'ghost' | 'underline';
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  error?: boolean;
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', resize = 'none', error, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            variant === 'ghost' && 'border-none bg-transparent',
            variant === 'underline' && 'border-0 border-b-2 rounded-none',
            error && 'border-destructive focus-visible:ring-destructive',
            resize === 'none' && 'resize-none',
            resize === 'both' && 'resize',
            resize === 'horizontal' && 'resize-x',
            resize === 'vertical' && 'resize-y',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }