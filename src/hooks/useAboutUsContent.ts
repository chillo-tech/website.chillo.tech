import { lang } from '@/lang';
import { fetchAboutUsText } from '@/lang/fr/about-us';
import { AboutUsPage } from '@/utils/types';
import { useEffect, useState } from 'react';

const useAboutUsContent = () => {
  const [text, setText] = useState<AboutUsPage | undefined>(undefined);

  const getContent = async () => {
    const content = await fetchAboutUsText();
    setText(content ?? lang.aboutUs);
  };

  useEffect(() => {
    getContent();
  }, []);

  return text;
};

export { useAboutUsContent };