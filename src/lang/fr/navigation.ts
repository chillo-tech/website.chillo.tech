import { NAVIGATION_MENU } from '@/api';
import { FIELDS_NAVIGATION } from '@/api/fields';
import { NAVIGATION_MENU_DATA_ID } from '@/api/singleton_ids';
import { fetchData } from '@/services/fetch-data';
import { Navigation } from '@/utils/types';

const fetchNavigationMenu = async (): Promise<Navigation | null> => {
  const response = await fetchData({
    path: `${NAVIGATION_MENU}/${NAVIGATION_MENU_DATA_ID}`,
    fields: FIELDS_NAVIGATION,
  });

  if (response.data?.data) {
    const template = response.data.data;

    let navigation: Navigation = {
      about: template?.about,
      faq: template?.faqs,
      services: template?.services,
      how_it_works: template?.howItWork,
      pricing: template?.pricing,
    };

    return navigation;
  }

  return null;
};

const navigation: Navigation = {
  about: 'À propos de nous',
  faq: 'FAQ',
  how_it_works: 'Comment ça marche',
  pricing: 'Tarifs',
  services: 'Services',
};

export { fetchNavigationMenu };
export default navigation;
