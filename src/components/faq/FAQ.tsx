'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import Section from '@/components/commons/section/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { paragraph } from '@/assets/fonts';
import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import SectionTitle from '@/components/commons/section/SectionTitle';
import { SECTIONS_IDS } from '@/config/links';
import { useContent } from '@/hooks';
import { fetchFAQSectionContent } from '@/lang/fr/faqs';
import { lang } from '@/lang';

interface FAQSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function FAQ({ className }: FAQSectionProps) {
  const text = useContent(fetchFAQSectionContent, lang.faq);

  return (
    <Section id={SECTIONS_IDS.FAQ} className={cn(className)}>
      <SectionTitle className="bg-light-gray-50" subtitle={text?.subtitle}>
        <RenderHtmlContent content={text?.title ?? ''} />
      </SectionTitle>
      <article className="container py-4 md:py-10 md:px-12 lg:px-24">
        <h3 className="font-semibold text-3xl mb-4">{text?.contentTitle}</h3>
        <Accordion type="single" collapsible className="w-full">
          {text?.items.map((faq, index) => (
            <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
              <AccordionTrigger className={cn('lg:py-12')}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className={cn(paragraph.className, 'leading-6 text-lg')}>
                <RenderHtmlContent content={faq.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </Section>
  );
}

export default FAQ;
