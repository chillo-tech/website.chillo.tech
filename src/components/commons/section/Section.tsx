import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}


const Section = ({ className, children }: SectionProps) => {
  return <div className={cn('relative', className)}>{children}</div>;
};

export { Section };
