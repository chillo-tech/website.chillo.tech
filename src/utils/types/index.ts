export type AboutUsPage = {
  cards?: CardItem[];
  coreValues: CardItem[];
  subtitle?: string;
  title: string;
};

export type Banner = {
  contentTitle: string;
  subtitle: string;
  title: string;
};

export type ButtonInfo = {
  contact?: string;
  send?: string;
  subscribe?: string;
};

export type CardItem = {
  description: string;
  subtitle?: string;
  title: string;
};

export type ContactFormFields = {
  [key: string]: {
    defaultValue?: string | number | readonly string[] | undefined;
    label: string;
    pattern?: RegExp;
    placeholder?: string | undefined;
    required?: boolean;
  };
};

export type ContactPage = {
  form: {
    fields: ContactFormFields;
    legend: string;
    submitButton: string;
    thanks?: string;
  };
  subtitle?: string;
  title: string;
};

export type FAQItem = {
  answer: string;
  question: string;
};

export type FAQSection = {
  contentTitle: string;
  items: FAQItem[];
  subtitle?: string;
  title: string;
};

export type FooterSection = {
  copyright?: string;
  privacyPolicy?: string;
  subtitle?: string;
  title: string;
};

export type HowItWorkItem = {
  description: string;
  id: number;
  subtitle: string;
  title: string;
};

export type HowItWorkSection = {
  items: HowItWorkItem[];
  subtitle: string;
  title: string;
};

export type Navigation = {
  about: string;
  faq: string;
  how_it_works: string;
  pricing: string;
  services: string;
};

export type PricingOffer = {
  price: number;
  services: string[];
  subtitle?: string;
  title: string;
  slug?: string;
};

export type PricingSection = {
  currency?: string;
  defaultPeriodicity: 'mois' | 'an';
  description?: string;
  pro?: PricingOffer;
  standard?: PricingOffer;
  subtitle?: string;
  title: string;
};

export type Service = {
  content: string;
  icon: string;
  id: number;
  subject?: string;
  title: string;
};

export type ServiceSection = {
  services: Service[];
  subtitle: string;
  title: string;
  topServices: Service[];
};
