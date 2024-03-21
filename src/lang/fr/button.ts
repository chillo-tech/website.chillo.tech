import { BUTTON_COLLECTION } from '@/api';
import { FIELDS_BUTTON } from '@/api/fields';
import { BUTTON_DATA_ID } from '@/api/singleton_ids';
import { fetchData } from '@/services/fetch-data';
import { ButtonInfo } from '@/utils/types';

const fetchButtonInfo = async (): Promise<ButtonInfo | null> => {
  const response = await fetchData({
    path: `${BUTTON_COLLECTION}/${BUTTON_DATA_ID}`,
    fields: FIELDS_BUTTON,
  });

  if (response.data?.data) {
    const template = response.data?.data;

    const button: ButtonInfo = {
      send: template?.send,
      contact: template?.contact,
      subscribe: template?.subscribe,
    };

    return button;
  }

  return null;
};

const button: ButtonInfo = {
  contact: 'Contactez-nous',
  send: 'Envoyez',
  subscribe: 'Souscrire',
};

export { fetchButtonInfo };
export default button;
