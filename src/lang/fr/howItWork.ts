import { fetchData } from '@/services/fetch-data';
import { HowItWorkItem, HowItWorkSection } from '../../utils/types';
import { HOW_IT_WORK_SECTION } from '@/api';
import { HOW_IT_WORK_SECTION_DATA_ID } from '@/api/singleton_ids';
import { FIELDS_HOW_IT_WORK_SECTION } from '@/api/fields';

const fetchHowItWorkContent = async (): Promise<HowItWorkSection | null> => {
  const response = await fetchData({
    path: `${HOW_IT_WORK_SECTION}/${HOW_IT_WORK_SECTION_DATA_ID}`,
    fields: FIELDS_HOW_IT_WORK_SECTION,
  });

  if (response.data?.data) {
    const template = response.data.data;

    const items: HowItWorkItem[] = template.items.map((val: any) => ({
      id: val.HowItWorkItem_id.id,
      title: val.HowItWorkItem_id.title,
      subtitle: val.HowItWorkItem_id.subtitle,
      description: val.HowItWorkItem_id.description,
    }));

    const howItWorkSection: HowItWorkSection = {
      title: template.title,
      subtitle: template.subtitle,
      items,
    };

    return howItWorkSection;
  }

  return null;
};

const howItWorksItems: HowItWorkItem[] = [
  {
    id: 1,
    title: 'Réservez une discussion',
    subtitle: `Parlons de votre business...`,
    description: `Planifie un appel de découverte avec nous pour comprendre ton business 
      ton idée de projet et clarifier ta vision. On va examiner tes systèmes actuels et créer des prochaines étapes concrètes 
      tout en répondant à toutes les questions que tu pourrais avoir sur notre service.`,
  },
  {
    id: 2,
    title: 'Souscrivez à une offre',
    subtitle: `Il est temps de mettre en place votre tableau de gestion de projet...`,
    description: `Une fois abonné, ajoutez les détails de votre projet à votre tableau Trello. Cela inclut le téléchargement des designs,
      la définition des fonctionnalités et la fourniture de toutes les informations qui guideront le processus de développement.
      Ne vous inquiétez pas, nous vous guiderons pour configurer correctement votre tableau de projet.`,
  },
  {
    id: 3,
    title: 'Créez vos tâches de projet',
    subtitle: `Nous créons vos tâches et mettons en place des Sprints hebdomadaires...`,
    description: `Nous décomposons les détails de votre projet en tâches de développement réalisables.
      Votre développeur créera ensuite un cycle de « Sprint » hebdomadaire composé de plusieurs tâches
      qui devront être terminées en fin de semaine. Chaque tâche effectuée durant la semaine sera marquée pour révision une fois terminée.`,
  },
  {
    id: 4,
    title: 'Suivre et gérer votre progression',
    subtitle: `Regardez comment nous donnons vie à votre idée...`,
    description: `Il vous suffit de vous connecter et de suivre la progression de vos projets avec Trello.
      Nous facilitons la révision des tâches, l'attribution des révisions, l'ajout de commentaires,
      la consultation des liens et le partage de nouveaux détails avec votre développeur.
      Nous comprenons que les besoins en développement peuvent fluctuer. C'est pourquoi vous pouvez mettre en pause votre abonnement
      si vous n'avez pas de tâches et le reprendre lorsque vous en avez`,
  },
];

const howItWorks: HowItWorkSection = {
  title: 'Comment ça marche ?',
  subtitle: `Nous avons simplifié le processus de développement de logiciels pour vous. Avec notre service, vous pouvez lancer votre projet en quelques jours, pas en quelques mois.`,
  items: howItWorksItems,
};

export { fetchHowItWorkContent };
export default howItWorks;
