import { SERVICES_SECTION } from '@/api';
import { FIELDS_SERVICES_SECTION } from '@/api/fields';
import { SERVICES_SECTION_DATA_ID } from '@/api/singleton_ids';
import { fetchData } from '@/services/fetch-data';
import { Service, ServiceSection } from '@/utils/types';

const fetchServiceSectionContent = async (): Promise<ServiceSection | null> => {
  const response = await fetchData({
    path: `${SERVICES_SECTION}/${SERVICES_SECTION_DATA_ID}`,
    fields: FIELDS_SERVICES_SECTION,
  });

  if (response.data?.data) {
    const template = response.data.data;

    const serviceSection: ServiceSection = {
      title: template.title,
      subtitle: template.subtitle,
      topServices: template.topServices.map((service: any) => ({
        id: service.ServiceCard_id.id,
        icon: service.ServiceCard_id.icon,
        subject: service.ServiceCard_id.subject,
        title: service.ServiceCard_id.title,
        content: service.ServiceCard_id.content,
      })),
      services: template.services.map((service: any) => ({
        id: service.ServiceCard_id.id,
        icon: service.ServiceCard_id.icon,
        subject: service.ServiceCard_id.subject,
        title: service.ServiceCard_id.title,
        content: service.ServiceCard_id.content,
      })),
    };

    return serviceSection;
  }

  return null;
};

const SERVICES_ICONS = {
  CODE: 'code',
  BUSINESS: 'business',
  ART: 'art',
  CHROME: 'chrome',
  DEV: 'dev',
};

const topServices: Service[] = [
  {
    id: 1,
    icon: '',
    subject: 'SAAS Development',
    title: `Software application`,
    content: `Develop your very own Software Business! We convert your wireframe designs into robust and user-friendly applications using Bubble.io that align with your project requirements. Simply share your idea and project details then watch our developers bring your idea to life.`,
  },
  {
    id: 2,
    icon: '',
    subject: 'Custom Business Solutions',
    title: `For business entreprise`,
    content: `Revolutionize your business by building custom solutions or seamlessly integrating all your internal tools into a tailored, single-point dashboard. Develop your own systems such as CRMs and Business Management Tools, tailored specifically to your business. You can even supercharge this with our Artificial Intelligence solutions.`,
  },
  {
    id: 3,
    icon: '',
    subject: 'Custom AI Solutions & Automations',
    title: `Artificial intelligence`,
    content: `Develop custom AI and Automation solutions tailored to your business. Harness the power of Artificial Intelligence to streamline daily tasks and transform your operations from Sales, Lead Generation, Customer Support, and beyond. Our AI solutions easily integrate into the applications your business uses daily, ensuring flexibility and compatibility with your existing systems. Paving the way for smarter, more productive workflows.`,
  },
];

const servicesItems: Service[] = [
  {
    id: 1,
    icon: SERVICES_ICONS.CODE,
    title: `Software application`,
    content: `Develop your software application MVP faster than ever. Speed is your friend.`,
  },
  {
    id: 2,
    icon: SERVICES_ICONS.BUSINESS,
    title: `Business Management`,
    content: `Revolutionize your business by building custom solutions or seamlessly integrating all your internal tools into a tailored, single-point dashboard. Develop your own systems such as CRMs and Business Management Tools, tailored specifically to your business. You can even supercharge this with our Artificial Intelligence solutions.`,
  },
  {
    id: 3,
    icon: SERVICES_ICONS.ART,
    title: `Artificial intelligence`,
    content: `Develop Simple to Advanced AI Applications using Large Language Models.`,
  },
  {
    id: 4,
    icon: SERVICES_ICONS.CHROME,
    title: `Custom CRM Systems`,
    content: `Develop CRM systems for your business tailored specifically to your clients. No More 3rd Party Apps.`,
  },
  {
    id: 5,
    icon: SERVICES_ICONS.DEV,
    title: `Custom AI Chatbots`,
    content: `Build custom knowledge based AI chatbot systems that can be applied with a variety of use cases.`,
  },
];

const serviceSection: ServiceSection = {
  services: servicesItems,
  subtitle: `Nous n'avons pas seulement réinventé le développement de logiciels - nous l'avons rendu accessible, efficace et abordable. L'ère du codage traditionnel est révolue. <br/> <br/>
        Découvrez le rythme accéléré du développement No Code, qui permet d'accélérer jusqu'à 5 fois l'achèvement du projet, avec une première tâche achevée dans les 72 heures.`,
  title: 'Ce que nous faisons le mieux',
  topServices,
};

export { SERVICES_ICONS, fetchServiceSectionContent };
export default serviceSection;
