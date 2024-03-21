import { BANNER_COLLECTION } from '@/api';
import { FIELDS_BANNER } from '@/api/fields';
import { BANNER_DATA_ID } from '@/api/singleton_ids';
import { fetchData } from '@/services/fetch-data';
import { Banner } from '@/utils/types';

const fetchBannerText = async (): Promise<Banner | null> => {
  const response = await fetchData({
    path: `${BANNER_COLLECTION}/${BANNER_DATA_ID}`,
    fields: FIELDS_BANNER,
  });

  if (response.data?.data) {
    const template = response.data.data;

    let banner: Banner = {
      title: template?.title,
      subtitle: template?.subtitle,
      contentTitle: template?.description,
    };

    return banner;
  }

  return null;
};

const banner: Banner = {
  title: 'Local : Boostez votre entreprise',
  subtitle: 'Votre projet, notre priorité',
  contentTitle: `Des <span className="font-bold">solutions IT exclusives</span> pour atteindre vos objectifs 
        commerciaux. Faites confiance à notre expertise et obtenez des résultats concrets dès maintenant.`,
};

export { fetchBannerText };
export default banner;
