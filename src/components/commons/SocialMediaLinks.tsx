import Link from 'next/link';
import Icons from '@/components/commons/Icons';
import {
    SOCIALS_TITLES,
    socials,
} from '@/config/links';
import {cn} from "@/lib/utils";
import {title2} from "@/assets/fonts";

const icon = (label) => {
    switch (label) {
        case SOCIALS_TITLES.INSTAGRAM :
            return <Icons.instagram className="w-6 h-6" />
        case SOCIALS_TITLES.LINKEDIN :
            return <Icons.in className="w-6 h-6" />
        case SOCIALS_TITLES.FACEBOOK :
            return <Icons.facebook className="w-6 h-6" />
        case SOCIALS_TITLES.WHATSAPP :
            return <Icons.whatsapp className="w-6 h-6" />
    }
}

const SocialMediaLinks = ({className}) => {
  return (
    <div className={cn(
      'flex justify-between items-center gap-3',
        className
    )}>
        {socials.map((social, index) => (
            <Link href={social.href} title={social.title}>
                {icon(social.title)}
            </Link>
        ))}
    </div>
  );
};

export default SocialMediaLinks;
