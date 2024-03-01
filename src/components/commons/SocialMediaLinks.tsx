import Link from 'next/link';
import { Icons } from './Icons';
import {
  linkFacebook,
  linkInstagram,
  linkLinkedIn,
  linkWhatsapp,
} from '@/config/links';

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-between items-center gap-3">
      <Link href={linkLinkedIn.href} title={linkLinkedIn.title}>
        <Icons.in className="w-6 h-6" />
      </Link>
      <Link href={linkInstagram.href} title={linkInstagram.title}>
        <Icons.instagram className="w-6 h-6" />
      </Link>
      <Link href={linkFacebook.href} title={linkFacebook.title}>
        <Icons.facebook className="w-6 h-6" />
      </Link>
      <Link href={linkWhatsapp.href} title={linkWhatsapp.title}>
        <Icons.whatsapp className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
