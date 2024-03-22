'use client';

import { title2 } from '@/assets/fonts';
import { SECTIONS_IDS } from '@/config/links';
import { useContent } from '@/hooks';
import { lang } from '@/lang';
import { fetchNavigationMenu } from '@/lang/fr/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavigationLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  linkClassName?: string;
  closeMenu?: any;
}

interface NavLink {
  title?: string;
  href: string;
}

function NavigationLinks({
  className,
  linkClassName,
  closeMenu = () => 1,
}: NavigationLinksProps) {
  const text = useContent(fetchNavigationMenu, lang.navigation);

  const navigations: NavLink[] = [
    { title: text?.about, href: `/#${SECTIONS_IDS.ABOUT_US}` },
    {
      title: text?.how_it_works,
      href: `/#${SECTIONS_IDS.HOW_ITS_WORK}`,
    },
    { title: text?.services, href: `/#${SECTIONS_IDS.SERVICE}` },
    { title: text?.pricing, href: `/#${SECTIONS_IDS.PRICING}` },
    { title: text?.faq, href: `/#${SECTIONS_IDS.FAQ}` },
  ];

  return (
    <nav
      className={cn(
        'flex justify-center w-fit md:items-center flex-col md:flex-row gap-3 md:gap-6',
        className
      )}>
      {navigations.map((link, index) => (
        <Link
          key={`${index}-${link.href}`}
          className={cn(
            title2.className,
            'text-blue font-light relative after:bg-gradient-to-r from-[#AAB6867E] to-[#98C11F] after:absolute after:h-1 after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300',
            linkClassName
          )}
          onClick={(e) => closeMenu(e)}
          href={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationLinks;
