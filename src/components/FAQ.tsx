import { cn } from '@/lib/utils';
import React from 'react';
import { Section } from './commons/section/Section';
import { lang } from '@/lang';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { paragraph } from '@/assets/fonts';
import RenderHtmlContent from './commons/RenderHTMLContent';
import { SectionTitle } from './commons/section/SectionTitle';

interface FAQSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function FAQ({ className }: FAQSectionProps) {
  return (
    <Section className={cn(className)}>
      <SectionTitle className="bg-light-gray" subtitle={lang.faq.subtitle}>
        <RenderHtmlContent content={lang.faq.title} />
      </SectionTitle>
      <article className="container py-4 md:py-10 md:px-12 lg:px-24">
        <h3 className="font-semibold text-3xl mb-4">{lang.faq.contentTitle}</h3>
        <Accordion type="single" collapsible className="w-full">
          {lang.faq.faqs.map((faq, index) => (
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
