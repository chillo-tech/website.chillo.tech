import { lang } from '@/lang';
import { fetchFooterContent } from '@/lang/fr/footer';
import { FooterSection } from '@/utils/types';
import { useEffect, useState } from 'react';

const useFooterContent = () => {
  const [text, setText] = useState<FooterSection>();

  const getContent = async () => {
    const content = await fetchFooterContent();
    setText(content ?? lang.footer);
  };

  useEffect(() => {
    getContent();
  }, []);

  return text;
};

export { useFooterContent };
