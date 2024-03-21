import { lang } from '@/lang';
import { fetchBannerText } from '@/lang/fr/banner';
import { Banner } from '@/utils/types';
import { useEffect, useState } from 'react';

const useBannerContent = () => {
  const [text, setText] = useState<Banner>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getContent = async () => {
    const content = await fetchBannerText();

    setText(content ?? lang.banner);
  };

  useEffect(() => {
    getContent();
  }, []);

  return text;
};

export { useBannerContent };
