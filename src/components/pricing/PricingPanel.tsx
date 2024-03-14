import React from 'react';
import Section from '@/components/commons/section/Section';
import {cn} from '@/lib/utils';
import {lang} from '@/lang';
import {paragraph, title2} from '@/assets/fonts';
import RenderHtmlContent from "@/components/commons/RenderHTMLContent";
import PriceTable from "@/components/pricing/PriceTable";
import {SECTIONS_IDS} from "@/config/links";

interface PricingPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

function PricingPanel({ className }: PricingPanelProps) {
  return (
      <Section
          id={SECTIONS_IDS.PRICING}
      className={cn(
        'rounded-md md:flex justify-between bg-light-gray-50 p-5 min-h-[30rem]',
        className
      )}>
      <section className={cn('space-y-4 py-4 md:max-w-80')}>
        <h2 className={cn(title2.className, 'text-blue text-2xl md:text-4xl')}>
          {lang.pricing.title}
        </h2>
        <h3 className={cn(title2.className, 'text-blue pl-2 truncate text-xl')}>
          {lang.pricing.subtitle}
        </h3>
        <div className={cn(paragraph.className, 'text-black pl-3')}>
          <RenderHtmlContent content={lang.pricing.description} />
        </div>
      </section>

      <div
        className={cn(
          'self-center md:flex mt-8 md:mt-4 space-y-8 md:space-y-0 justify-between items-center gap-4'
        )}>
        <PriceTable
          variant={'standard'}
          price={10}
          services={lang.pricing.standard.services}
          title={lang.pricing.standard.title}
          subtitle={lang.pricing.standard.subtitle}
          pricePrefix={lang.pricing.currency}
          priceSuffix={`\\${lang.pricing.defaultPeriodicity}`}
        />
        <PriceTable
          variant={'pro'}
          size={'large'}
          price={15.5}
          services={[
            ...lang.pricing.standard.services,
            ...lang.pricing.pro.services,
          ]}
          title={lang.pricing.pro.title}
          subtitle={lang.pricing.pro.subtitle}
          pricePrefix={lang.pricing.currency}
          priceSuffix={`\\${lang.pricing.defaultPeriodicity}`}
        />
      </div>
      </Section>
  );
}

export default PricingPanel;
