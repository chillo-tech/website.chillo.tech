import { lang } from '@/lang';

export const SOCIALS_TITLES = {
  LINKEDIN: 'LinkedIn',
  TWITTER: 'Twitter',
  FACEBOOK: 'Facebook',
  WHATSAPP: 'Whatsapp',
  INSTAGRAM: 'Instagram',
};

export const SECTIONS_IDS = {
  HEADER: 'header',
  BANNER: 'banner',
  ABOUT_US: 'about-us',
  HOW_ITS_WORK: 'how-it-works',
  SERVICE: 'services',
  PRICING: 'pricing',
  FAQ: 'faq',
  FOOTER: 'footer',
};

interface Link {
  title: string;
  href: string;
}

export const linkLinkedIn: Link = {
  title: SOCIALS_TITLES.LINKEDIN,
  href: 'http://www.linkedin.com',
};
export const linkTwitter: Link = {
  title: SOCIALS_TITLES.TWITTER,
  href: 'http://twitter.com',
};
export const linkFacebook: Link = {
  title: SOCIALS_TITLES.FACEBOOK,
  href: 'http://',
};
export const linkWhatsapp: Link = {
  title: SOCIALS_TITLES.WHATSAPP,
  href: 'http://',
};
export const linkInstagram: Link = {
  title: SOCIALS_TITLES.INSTAGRAM,
  href: 'http://',
};

export const SOCIALS: Link[] = [
  linkLinkedIn,
  linkTwitter,
  linkFacebook,
  linkInstagram,
  linkWhatsapp,
];

export const privacyPolicyUrl: Link = {
  title: lang.footer.privacyPolicy,
  href: 'here paste the URL',
};
