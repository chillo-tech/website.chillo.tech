import * as links from './links';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: 'Chillo Tech | Des devs hautement qualifiés pour atteindre vos objectifs commerciaux',
  description:
    'Des devs hautement qualifiés pour atteindre vos objectifs commerciaux. Faites confiance à notre expertise et obtenez des résultats concrets dès maintenant',
  mainNavLinks: links.navigations,
  links,
};
