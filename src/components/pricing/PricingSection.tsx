import React from 'react';
import Section from '@/components/commons/section/Section';
import { cn } from '@/lib/utils';
import { lang } from '@/lang';
import { paragraph, title2 } from '@/assets/fonts';
import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import PriceTable from '@/components/pricing/PriceTable';
import { SECTIONS_IDS } from '@/config/links';

interface PricingSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function PricingSection({ className }: PricingSectionProps) {
  return (
    <Section
      id={SECTIONS_IDS.PRICING}
      className={cn(
        'rounded-md md:flex gap-2 justify-between bg-gray p-5 min-h-[30rem]',
        className
      )}>
      <div className={cn('space-y-4 py-4 md:max-w-80')}>
        <h2
          className={cn(
            title2.className,
            'text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue via-gradient-end text-2xl font-bold truncate md:text-4xl'
          )}>
          {lang.pricing.title}
        </h2>
        <h3
          className={cn(
            title2.className,
            'text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue via-gradient-end pl-2 text-xl'
          )}>
          {lang.pricing.subtitle}
        </h3>
        {lang.pricing.description && (
          <div className={cn(paragraph.className, 'text-black pl-3 pb-8')}>
            <RenderHtmlContent content={lang.pricing.description} />
          </div>
        )}
      </div>

      <div
        className={cn(
          'self-center lg:flex mt-8 md:mt-4 space-y-8 md:space-y-0 justify-between items-center gap-4'
        )}>
        <PriceTable
          variant={'standard'}
          price={lang.pricing.standard.price}
          services={lang.pricing.standard.services}
          title={lang.pricing.standard.title}
          subtitle={lang.pricing.standard.subtitle}
          pricePrefix={lang.pricing.currency}
          priceSuffix={`\\${lang.pricing.defaultPeriodicity}`}
        />
        <PriceTable
          variant={'pro'}
          size={'large'}
          price={lang.pricing.pro.price}
          services={lang.pricing.pro.services}
          title={lang.pricing.pro.title}
          subtitle={lang.pricing.pro.subtitle}
          pricePrefix={lang.pricing.currency}
          priceSuffix={`\\${lang.pricing.defaultPeriodicity}`}
        />
      </div>
    </Section>
  );
}

export default PricingSection;
