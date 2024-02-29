import { lang } from '@/lang';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { title2, title1, paragraph } from '@/assets/fonts';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import { Separator } from './ui/separator';
import SocialMediaLinks from './SocialMediaLinks';
import { siteConfig } from '@/config';
import Link from 'next/link';

function Footer() {
  return (
    <footer
      className={cn(
        paragraph.className,
        'container w-full min-h-96 p-4 pt-8 md:p-12 text-black'
      )}>
      <div className="container w-full md:w-[60%] text-center space-y-5 mx-auto">
        <h2
          className={cn(
            title1.className,
            'text-blue font-semibold leading-10 text-2xl md:text-3xl'
          )}>
          {lang.footer.title}
        </h2>
        <p className="w-[70%] mx-auto">{lang.footer.subtitle}</p>
        <Button
          variant={'outline'}
          className={cn(
            'bg-green border-none font-semibold text-white hover:bg-green/80 rounded-full',
            title2.className
          )}>
          {lang.contact_btn}
        </Button>
      </div>
      <div className="mt-16 w-full flex flex-col lg:flex-row gap-8 md:gap-0 justify-between">
        <Logo />
        <NavigationLinks className="ml-4" />
      </div>
      <Separator className="my-4" />
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center text-center">
        <span className="inline-block">{lang.footer.copyright}</span>
        <span className="inline-block">
          <Link
            href={siteConfig.links.privacyPolicyUrl}
            className="hover:text-blue">
            {siteConfig.links.privacyPolicyUrl.title}
          </Link>
        </span>
        <SocialMediaLinks />
      </div>
    </footer>
  );
}

export default Footer;
