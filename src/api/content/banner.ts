import { fetchData } from '@/services/fetch-data';
import { BANNER_COLLECTION } from '..';

// Fetch data of the banner from the api
const dynamicBannerContent = async () =>
  fetchData({
    path: BANNER_COLLECTION,
    fields: `*`,
  });

export { dynamicBannerContent };
