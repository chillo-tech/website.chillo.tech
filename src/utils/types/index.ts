export type CardItem = {
  title: string;
  subtitle?: string;
  description: string;
};

export type AboutUsPage = {
  title: string;
  subtitle?: string;
  coreValues: CardItem[];
  cards?: CardItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type HowItWork = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
};

export type Service = {
  id: number;
  icon: string;
  subject?: string,
  title: string,
  content: string
};

export type PricingOffer = {
  title: string;
  subtitle?: string;
  price: number;
  services: string[];
};

export type PricingSection = {
  title: string;
  subtitle?: string;
  description?: string;
  currency?: string;
  defaultPeriodicity: 'mois' | 'an';
  standard: PricingOffer;
  pro: PricingOffer;
};

export type ContactFormFields = {
  [key: string]: {
    label: string;
    placeholder?: string | undefined;
    required?: boolean;
    pattern?: RegExp;
    defaultValue?: string | number | readonly string[] | undefined;
  };
};

export type ContactPage = {
  title: string;
  subtitle?: string;
  form: {
    legend: string;
    fields: ContactFormFields;
    submitButton: string;
    thanks?: string;
  };
};
