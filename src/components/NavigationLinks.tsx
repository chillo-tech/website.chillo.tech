import { title2 } from '@/assets/fonts';
import { siteConfig } from '@/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function NavigationLinks() {
  return (
    <nav className="flex justify-center items-center flex-col md:flex-row gap-6">
      {siteConfig.mainNavLinks.map((link, index) => (
        <Link
          key={`${index}-${link.href}`}
          className={cn(
            title2.className,
            'text-blue font-light relative after:bg-gradient-to-r from-[#AAB6867E] to-[#98C11F] after:absolute after:h-1 after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300'
          )}
          href={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationLinks;
