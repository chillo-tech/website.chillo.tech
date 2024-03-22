'use client';

import Section from '@/components/commons/section/Section';
import SectionTitle from '@/components/commons/section/SectionTitle';
import Card from '@/components/commons/Card';
import { SECTIONS_IDS } from '@/config/links';
import { useContent } from '@/hooks';
import { AboutUsPage } from '@/utils/types';
import { fetchAboutUsText } from '@/lang/fr/about-us';
import { lang } from '@/lang';

const AboutUs = () => {
  const text = useContent<AboutUsPage>(fetchAboutUsText, lang.aboutUs);

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
