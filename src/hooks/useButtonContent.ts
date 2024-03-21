import { lang } from '@/lang';
import { fetchButtonInfo } from '@/lang/fr/button';
import { ButtonInfo } from '@/utils/types';
import { useEffect, useState } from 'react';

const useButtonInfoContent = () => {
  const [buttonText, setButtonText] = useState<ButtonInfo>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getContent = async () => {
    const buttonContent = await fetchButtonInfo();

    setButtonText(buttonContent ?? lang.button);
  };

  useEffect(() => {
    getContent();
  }, []);

  return buttonText;
};

export { useButtonInfoContent };
