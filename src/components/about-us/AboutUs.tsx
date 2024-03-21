'use client';

import { lang } from '@/lang';
import Section from '../commons/section/Section';
import SectionTitle from '../commons/section/SectionTitle';
import Card from '../commons/Card';
import { SECTIONS_IDS } from '@/config/links';
import { useEffect, useState } from 'react';
import { AboutUsPage } from '@/utils/types';
import { fetchAboutUsText } from '@/lang/fr/about-us';

const AboutUs = () => {
  const [text, setText] = useState<AboutUsPage | undefined>(undefined);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getContent = async () => {
    const content = await fetchAboutUsText();
    setText(content ?? lang.aboutUs);
  };

  useEffect(() => {
    getContent();
  }, [getContent, text]);

  return (
    <Section
      id={SECTIONS_IDS.ABOUT_US}
      className="bg-light-gray-50 px-12 pb-12">
      <SectionTitle subtitle={text?.subtitle}>{text?.title}</SectionTitle>
      <div className="md:flex gap-4 mx-auto">
        {text?.coreValues.map((value, index) => (
          <Card key={`core-value-${index}`} item={value} />
        ))}
      </div>
      <div className="mt-12 md:flex justify-around md:px-24 gap-8 mx-auto">
        {text?.cards?.map((value, index) => (
          <Card
            className="border border-black rounded-md w-full px-10"
            key={`card-${index}`}
            item={value}
          />
        ))}
      </div>
    </Section>
  );
};

export default AboutUs;
