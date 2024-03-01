import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import React from 'react';
import { cn } from '@/lib/utils';
import { lang } from '@/lang';
import { Section } from '@/components/commons/section/Section';
import { SectionTitle } from '../commons/section/SectionTitle';
import { HowItWorkItem } from './HowItWorkItem';

interface HowItsWorkProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function HowItsWork({ className }: HowItsWorkProps) {
  return (
    <Section className={cn(className)}>
      <SectionTitle
        className="p-0 mb-4 md:mb-0"
        subtitle={lang.how_its_work.subtitle}>
        <RenderHtmlContent content={lang.how_its_work.title} />
      </SectionTitle>
      <article className="relative wrap overflow-hidden">
        <div className="absolute border-blue h-full border md:left-1/2 sm:left-[4%]"></div>
        {lang.how_its_work.howItWorks.map((howItWork, index) => (
          <HowItWorkItem
            key={index}
            item={howItWork}
            reverse={index % 2 === 0}
          />
        ))}
      </article>
    </Section>
  );
}
