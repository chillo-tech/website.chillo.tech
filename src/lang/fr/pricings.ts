import { PricingSection } from '../../utils/types';

const pricingSection: PricingSection = {
  title: 'Tarification',
  subtitle: `Un abonnement, des possibilités illimitées.`,
  description: `Notre modèle de tarification est aussi clair et simple que possible. 
    Payez un simple abonnement mensuel fixe et débloquez
    un accès illimité à nos solutions de développement. 
    Pas de frais cachés, pas de frais supplémentaires.
     Vous avez le plein contrôle pour annuler ou 
     mettre en pause votre abonnement à tout moment.
    <br/><br/>
    Profitez de demandes, révisions et tâches illimitées. 
    Cela signifie que nous ne cesserons pas de travailler 
    tant que vous n'êtes pas à 100% satisfait de nos solutions logicielles.`,
  currency: '€',
  defaultPeriodicity: 'mois',
  standard: {
    title: 'Standard',
    price: 10,
    subtitle: 'Vos projets et idées prennent vie !',
    services: [
      '1 sprint actif par semaine',
      'Développeur dédié',
      'Demandes de tâches illimitées',
      'Demandes de révisions illimitées',
      "Designer d'UI/UX dédié",
      'Chef de projet dédié',
    ],
  },
  pro: {
    title: 'Pro',
    price: 20,
    subtitle: 'Nous concevons et réalisons !',
    services: [
      '<b>02 sprint actif par semaine</b>',
      '<b>02 Développeur dédié</b>',
      'Demandes de tâches illimitées',
      'Demandes de révisions illimitées',
      "Designer d'UI/UX dédié",
      'Chef de projet dédié',
      'Réunion de travail 02 fois / semaine',
    ],
  },
};

export default pricingSection;
