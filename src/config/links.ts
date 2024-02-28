import { lang } from '@/lang';

interface Link {
  title: string;
  href: string;
}

export const linkLinkedIn: Link = {
  title: 'LinkedIn',
  href: 'http://www.linkedin.com',
};
export const linkTwitter: Link = {
  title: 'Twitter',
  href: 'http://twitter.com',
};
export const linkFacebook: Link = { title: 'Facebook', href: 'http://' };
export const linkWhatsapp: Link = { title: 'Whatsapp', href: 'http://' };
export const linkInstagram: Link = { title: 'Instagram', href: 'http://' };

export const socials: Link[] = [
  linkLinkedIn,
  linkTwitter,
  linkFacebook,
  linkInstagram,
  linkWhatsapp
];

export const navigations: Link[] = [
  { title: lang.navigation.about, href: '#about-us' },
  { title: lang.navigation.how_it_works, href: '#how-it-works' },
  { title: lang.navigation.services, href: '#services' },
  { title: lang.navigation.pricing, href: '#tarifs' },
  { title: lang.navigation.faq, href: '#faq' },
];

export const privacyPolicyUrl: Link = {
  title: lang.footer.privacyPolicy,
  href: '#',
};
