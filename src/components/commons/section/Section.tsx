import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = ({ id, className, children, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn('relative', className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
