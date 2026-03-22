import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type TextSize = 'sm' | 'base' | 'lg' | 'xl';
type TextColour = 'primary' | 'secondary' | 'muted';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  colour?: TextColour;
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
}

const sizeStyles: Record<TextSize, string> = {
  sm: 'text-sm leading-relaxed',
  base: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed',
  xl: 'text-xl leading-relaxed',
};

const colourStyles: Record<TextColour, string> = {
  primary: 'text-foreground',
  secondary: 'text-foreground-secondary',
  muted: 'text-foreground-muted',
};

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = 'base', colour = 'secondary', as: Tag = 'p', className, children, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(sizeStyles[size], colourStyles[colour], className)}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Text.displayName = 'Text';

export { Text, type TextProps };
