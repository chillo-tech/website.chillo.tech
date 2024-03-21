import { FOOTER } from '@/api';
import { FIELDS_FOOTER } from '@/api/fields';
import { FOOTER_DATA_ID } from '@/api/singleton_ids';
import { fetchData } from '@/services/fetch-data';
import { FooterSection } from '@/utils/types';

const fetchFooterContent = async (): Promise<FooterSection | null> => {
  const response = await fetchData({
    path: `${FOOTER}/${FOOTER_DATA_ID}`,
    fields: FIELDS_FOOTER,
  });

  if (response.data?.data) {
    const template = response.data.data;

    let footer: FooterSection = {
      title: template?.title,
      subtitle: template?.subtitle,
      privacyPolicy: template?.privacyPolicy,
      copyright: template?.copyright,
    };

    return footer;
  }

  return null;
};

// Default data
const footer: FooterSection = {
  copyright: '© Copyright 2024 Chillo Tech. Tous droits réservés.',
  privacyPolicy: 'Politique de confidentialité',
  subtitle:
    'CHILLO est une société de conseil en nouvelles technologies. Nous concevons et developpons des applications',
  title: 'CHILLO accélère la performance business et digitale des entreprises.',
};

export { fetchFooterContent };
export default footer;
