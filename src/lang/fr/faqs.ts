import { fetchData } from '@/services/fetch-data';
import { FAQItem, FAQSection } from '../../utils/types';
import { FAQ_SECTION } from '@/api';
import { FAQ_SECTION_DATA_ID } from '@/api/singleton_ids';
import { FIELDS_FAQ_SECTION } from '@/api/fields';

const fetchFAQSectionContent = async (): Promise<FAQSection | null> => {
  const response = await fetchData({
    path: `${FAQ_SECTION}/${FAQ_SECTION_DATA_ID}`,
    fields: FIELDS_FAQ_SECTION,
  });

  if (response.data?.data) {
    const template = response.data.data;

    const items: FAQItem[] = template.items.map((val: any) => ({
      answer: val.answer,
      question: val.question,
    }));

    const faqsSection: FAQSection = {
      title: template.title,
      subtitle: template.subtitle,
      contentTitle: template.contentTitle,
      items,
    };

    return faqsSection;
  }

  return null;
};

const faqsItems: FAQItem[] = [
  {
    question: 'Qui est le client idéal de Chillo Tech ?',
    answer: `Chillo Services est le partenaire parfait pour les entrepreneurs et les entreprises de toutes tailles qui cherchent à développer des logiciels ou à améliorer leurs opérations avec la puissance de la technologie avancée. Nous comprenons les obstacles liés à l'embauche d'un développeur à plein temps - le temps passé à vérifier les candidats, les coûts élevés et le risque de compétences inadaptées.<br/><br/>
      Au lieu de cela, Chillo Services propose une solution bien plus efficace et économique. Nous offrons un accès à un vaste pool de développeurs multi-talentueux, pré-vérifiés pour leurs compétences exceptionnelles et leur expertise diversifiée. Cela vous permet d'utiliser des compétences de développement de haute qualité sans supporter le fardeau d'un salaire à plein temps, vous faisant économiser des ressources substantielles.<br/><br/>
      Mais ce n'est pas tout. Avec notre système de gestion de projet robuste, 
      la création de nouvelles tâches et le suivi de la progression n'ont jamais été aussi faciles. 
      Il vous suffit d'ajouter vos exigences et de suivre la progression en temps réel, garantissant que votre projet est toujours sur la bonne voie. Ainsi, si vous cherchez à optimiser votre entreprise, à élever votre paysage numérique et ce, de manière économique, Chillo Services est votre choix idéal. Laissez-nous gérer les complexités du développement logiciel pendant que vous vous concentrez sur ce qui importe le plus - faire croître votre entreprise.
      `,
  },
  {
    question: 'Pourquoi pas employé juste un développeur ?',
    answer: `Excellente question !<br/><br/> 
      Engager un développeur senior à temps plein peut être coûteux, 
      avec un salaire annuel moyen dépassant les 120 000 $, auxquels s'ajoutent les coûts 
      supplémentaires des avantages sociaux. Le processus d'embauche lui-même peut également être long et difficile.<br/><br/>
      Plus important encore, votre charge de travail peut fluctuer, ce qui peut entraîner des périodes où vous n'avez pas suffisamment de tâches pour utiliser pleinement un développeur à temps plein. En utilisant notre adhésion à l'agence d'abonnement, vous ne payez que pour le travail de développement dont vous avez besoin, profitez de la flexibilité pour mettre en pause ou reprendre votre abonnement selon vos besoins, 
      et évitez le fardeau financier d'un développeur interne sous-utilisé.`,
  },
  {
    question: `Que ce passe t-il si je n’ai pas besoin de travail pour un mois en particulier ?`,
    answer: `Si vous n'avez pas besoin de travail pour un mois spécifique, vous pouvez mettre en pause 
      votre abonnement<br/> et le reprendre lorsque vous aurez à nouveau besoin de nos services.<br/><br/>
      Il n'y a pas de pénalités ni de frais supplémentaires pour mettre en pause votre abonnement.`,
  },
];

const faqsSection: FAQSection = {
  contentTitle: 'Les Bases.',
  items: faqsItems,
  subtitle: `Nous avons rassemblé certaines des questions les plus populaires posées par les clients comme ressource pour vous.<br/>
  N'hésitez pas à nous contacter directement si vous avez d'autres questions<br/> qui ne sont pas abordées ici.`,
  title: 'Questions fréquemment posées ?',
};

export { fetchFAQSectionContent };
export default faqsSection;
