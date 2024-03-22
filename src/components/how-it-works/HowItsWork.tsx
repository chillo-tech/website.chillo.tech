'use client';

import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import React from 'react';
import { cn } from '@/lib/utils';
import Section from '@/components/commons/section/Section';
import SectionTitle from '@/components/commons/section/SectionTitle';
import HowItWorkItem from '@/components/how-it-works/HowItWorkItem';
import { SECTIONS_IDS } from '@/config/links';
import { useContent } from '@/hooks';
import { fetchHowItWorkContent } from '@/lang/fr/howItWork';
import { lang } from '@/lang';

interface HowItsWorkProps extends React.HTMLAttributes<HTMLDivElement> {}

function HowItsWork({ className }: HowItsWorkProps) {
  const text = useContent(fetchHowItWorkContent, lang.howItWork);

  return (
    <Section
      id={SECTIONS_IDS.HOW_ITS_WORK}
      className={cn(className)}
      style={{ marginTop: 0 }}>
      <SectionTitle className="p-0 mb-4 md:mb-0" subtitle={text?.subtitle}>
        <RenderHtmlContent content={text?.title ?? ''} />
      </SectionTitle>
      <article className="relative wrap overflow-hidden">
        <div className="absolute border-blue h-full border md:left-1/2 sm:left-[4%]"></div>
        {text?.items.map((howItWork, index) => (
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

export default HowItsWork;
