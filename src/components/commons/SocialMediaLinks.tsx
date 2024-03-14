import Link from 'next/link';
import Icons from '@/components/commons/Icons';
import { SOCIALS_TITLES, SOCIALS } from '@/config/links';
import { cn } from '@/lib/utils';
import React from 'react';

const icon = (label: string) => {
  switch (label) {
    case SOCIALS_TITLES.INSTAGRAM:
      return <Icons.instagram className="w-6 h-6" />;
    case SOCIALS_TITLES.LINKEDIN:
      return <Icons.in className="w-6 h-6" />;
    case SOCIALS_TITLES.FACEBOOK:
      return <Icons.facebook className="w-6 h-6" />;
    case SOCIALS_TITLES.WHATSAPP:
      return <Icons.whatsapp className="w-6 h-6" />;
  }
};

const SocialMediaLinks = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex justify-between items-center gap-3', className)}>
      {SOCIALS.map((social, index) => (
        <Link key={index} href={social.href} title={social.title}>
          {icon(social.title)}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
