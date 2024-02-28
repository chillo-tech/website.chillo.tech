import React from 'react';
import { SectionLayout } from './layout/SectionLayout';
import { cn } from '@/lib/utils';

interface PricingPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

function PricingPanel({ className }: PricingPanelProps) {
  return (
    <SectionLayout
      className={cn(
        'rounded-md bg-gray p-5 m-4 mt-0 min-h-[30rem]',
        className
      )}></SectionLayout>
  );
}

export default PricingPanel;
