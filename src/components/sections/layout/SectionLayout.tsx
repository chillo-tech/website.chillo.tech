import { title2 } from '@/assets/fonts';
import { cn } from '@/lib/utils';
import React from 'react';
import RenderHtmlContent from '../../RenderHTMLContent';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  contentClassName?: string;
  subtitle?: string;
}

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const SectionTitle = ({
  subtitle,
  className,
  contentClassName,
  children,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        'w-full min-h-24 md:h-72 flex flex-col gap-4 justify-center items-center m-0 p-5',
        className
      )}>
      <h2
        className={cn(
          title2.className,
          'relative text-2xl lg:text-5xl leading-10 lg:leading-[4rem] text-center',
          contentClassName
        )}>
        {children}
      </h2>
      {subtitle && (
        <div className="mx-auto my-2 md:px-12 lg:px-24 text-center">
          <RenderHtmlContent content={subtitle} />
        </div>
      )}
    </div>
  );
};

const SectionLayout = ({ className, children }: SectionLayoutProps) => {
  return <div className={cn('relative', className)}>{children}</div>;
};

export { SectionTitle, SectionLayout };
