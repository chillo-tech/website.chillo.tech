import { fetchData } from '@/services/fetch-data';
import { AboutUsPage, CardItem } from '../../utils/types';
import { ABOUT_US_PAGE } from '@/api';
import { FIELDS_ABOUT_US_PAGE } from '@/api/fields';
import { ABOUT_US_PAGE_DATA_ID } from '@/api/singleton_ids';

const fetchAboutUsText = async (): Promise<AboutUsPage | null> => {
  const response = await fetchData({
    path: `${ABOUT_US_PAGE}/${ABOUT_US_PAGE_DATA_ID}`,
    fields: FIELDS_ABOUT_US_PAGE,
  });

  if (response.data?.data) {
    // Load page informations
    const template = response.data.data;

    // Related models
    const coreValuesTemplate: any[] = template.coreValues;
    const coreValues: CardItem[] = coreValuesTemplate.map((value) => ({
      title: value.CardItem_id.title,
      subtitle: value.CardItem_id.subtitle,
      description: value.CardItem_id.description,
    }));

    const cardsTemplate: any[] = template.cards;
    const cards: CardItem[] = cardsTemplate.map((value) => ({
      title: value.CardItem_id.title,
      subtitle: value.CardItem_id.subtitle,
      description: value.CardItem_id.description,
    }));

    // Build page data
    let page: AboutUsPage = {
      title: template?.title,
      subtitle: template?.subtitle,
      coreValues,
      cards,
    };

    return page;
  }

  return null;
};

const aboutUs: AboutUsPage = {
  title: `À propos de nous.`,
  subtitle: `Évitez-vous la corvée de vérifier les développeurs ou de traiter avec l'externalisation - nous remplaçons les développeurs conventionnels et les agences coûteuses par un paiement mensuel simple.
    La solution parfaite pour les startups et les entreprises.`,
  coreValues: [
    {
      title: `Des coûts réduit`,
      description: `Minimize unnecessary costs hiring expensive or unqualified developers. Let us focus on high ROI development tasks while you focus on your business.`,
    },
    {
      title: `Expertise de pointe`,
      description: `Assurez-vous un développement de haute qualité en minimisant les malentendus et les incohérences grâce à la gestion de projet.`,
    },
    {
      title: `Vitesse augmentée`,
      description: `Éliminez les ralentissements avec des cycles de projet plus rapides et moins de réunions, accélérant votre processus de développement jusqu'à 4 fois plus vite.`,
    },
  ],
  cards: [
    {
      title: `Prêt à construire votre propre logiciel ?`,
      subtitle: `Pour les Startups`,
      description: `Dites adieu aux processus de codage conventionnels longs, laborieux et coûteux en ressources ! Avec Chillo Tech, 
      ouvrez la voie à une productivité accrue et à des résultats exceptionnels. Notre équipe d'experts chevronnés se tient à votre entière disposition pour vous aider à accélérer 
      votre développement et à concrétiser vos projets les plus ambitieux. Ne laissez plus le temps ni les ressources s'échapper inutilement, 
      faites confiance à Chillo Tech pour vous accompagner vers l'excellence technologique et l'efficacité opérationnelle.
      `,
    },
    {
      title: `Construisez des solutions personnalisées pour votre entreprise.`,
      subtitle: `Pour les entreprises`,
      description: `
      <p>Nous concevons des solutions sur-mesure pour répondre aux besoins uniques de votre entreprise. 
      Que vous ayez besoin d'un site web professionnel ou d'une application personnalisée, 
      notre équipe de développeurs expérimentés est là pour vous aider à atteindre vos objectifs.</p> 
      <p>Faites confiance à notre expertise pour 
      transformer vos idées en réalité numérique et propulser votre entreprise vers le succès en ligne.</p>
      `,
    },
  ],
};

export { fetchAboutUsText };
export default aboutUs;
