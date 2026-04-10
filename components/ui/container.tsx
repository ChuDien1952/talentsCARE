/**
 * Container Component
 * Responsive container with max-width variants
 */

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}

export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': size === 'default',
          'max-w-screen-2xl': size === 'wide',
          'max-w-4xl': size === 'narrow',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
