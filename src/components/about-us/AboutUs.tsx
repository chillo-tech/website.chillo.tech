import { lang } from '@/lang';
import Section from '../commons/section/Section';
import SectionTitle from '../commons/section/SectionTitle';
import Card from '../commons/Card';
import { SECTIONS_IDS } from '@/config/links';

const AboutUs = () => {
  return (
    <Section
      id={SECTIONS_IDS.ABOUT_US}
      className="bg-light-gray-50 px-12 pb-12">
      <SectionTitle subtitle={lang.aboutUs.subtitle}>
        {lang.aboutUs.title}
      </SectionTitle>
      <div className="md:flex gap-4 mx-auto">
        {lang.aboutUs.coreValues.map((value, index) => (
          <Card key={`core-value-${index}`} item={value} />
        ))}
      </div>
      <div className="mt-12 md:flex justify-around md:px-24 gap-8 mx-auto">
        {lang.aboutUs.cards?.map((value, index) => (
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
