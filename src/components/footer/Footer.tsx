'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { title1, paragraph } from '@/assets/fonts';
import Logo from '@/components/commons/Logo';
import NavigationLinks from '@/components/commons/NavigationLinks';
import { Separator } from '@/components/ui/separator';
import SocialMediaLinks from '@/components/commons/SocialMediaLinks';
import { siteConfig } from '@/config';
import Link from 'next/link';
import { ROUTE_CONTACT } from '@/config/routes';
import { SECTIONS_IDS } from '@/config/links';
import { useFooterContent } from '@/hooks/useFooterContent';
import { useButtonInfoContent } from '@/hooks/useButtonContent';

function Footer() {
  const text = useFooterContent();
  const buttonText = useButtonInfoContent();

  return (
    <footer id={SECTIONS_IDS.FOOTER} className="bg-dark-gray-08">
      <div
        className={cn(
          paragraph.className,
          'container w-full min-h-96 p-4 pt-8 md:p-12 text-black'
        )}>
        <div className="container w-full md:w-[60%] text-center space-y-5 mx-auto">
          <h2
            className={cn(
              title1.className,
              'text-blue font-bold leading-10 text-xl md:text-2xl'
            )}>
            {text?.title}
          </h2>
          <p className="w-[70%] mx-auto">{text?.subtitle}</p>
          <Link className="inline-flex mt-2" href={ROUTE_CONTACT}>
            <Button variant={'primary'}>{buttonText?.contact}</Button>
          </Link>
        </div>
        <div className="mt-16 w-full flex flex-col lg:flex-row gap-8 md:gap-0 justify-between">
          <Logo />
          <NavigationLinks className="ml-4" />
        </div>
        <Separator className="my-4" />
        <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center text-center">
          <span className="inline-block">{text?.copyright}</span>
          <span className="inline-block">
            <Link
              href={siteConfig.links.privacyPolicyUrl}
              className="hover:text-blue">
              {text?.privacyPolicy}
            </Link>
          </span>
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
