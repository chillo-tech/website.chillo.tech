'use client';

import React from 'react';
import Section from '@/components/commons/section/Section';
import { cn } from '@/lib/utils';
import { lang } from '@/lang';
import { paragraph, title2 } from '@/assets/fonts';
import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import PriceTable from '@/components/pricing/PriceTable';
import { SECTIONS_IDS } from '@/config/links';
import { useContent } from '@/hooks';
import { fetchPricingSectionContent } from '@/lang/fr/pricings';

interface PricingSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function PricingSection({ className }: PricingSectionProps) {
  const text = useContent(fetchPricingSectionContent, lang.pricing);

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
          {text?.title}
        </h2>
        <h3
          className={cn(
            title2.className,
            'text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue via-gradient-end pl-2 text-xl'
          )}>
          {text?.subtitle}
        </h3>
        {text?.description && (
          <div className={cn(paragraph.className, 'text-black pl-3 pb-8')}>
            <RenderHtmlContent content={text?.description} />
          </div>
        )}
      </div>

      <div
        className={cn(
          'self-center lg:flex mt-8 md:mt-4 space-y-8 md:space-y-0 justify-between items-center gap-4'
        )}>
        <PriceTable
          variant={'standard'}
          price={text?.standard?.price ?? -1}
          services={text?.standard?.services ?? []}
          title={text?.standard?.title ?? ''}
          subtitle={text?.standard?.subtitle}
          pricePrefix={text?.currency}
          priceSuffix={`\\${text?.defaultPeriodicity}`}
        />
        <PriceTable
          variant={'pro'}
          size={'large'}
          price={text?.pro?.price ?? -1}
          services={text?.pro?.services ?? []}
          title={text?.pro?.title ?? ''}
          subtitle={text?.pro?.subtitle}
          pricePrefix={text?.currency}
          priceSuffix={`\\${text?.defaultPeriodicity}`}
        />
      </div>
    </Section>
  );
}

export default PricingSection;
