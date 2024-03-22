import { fetchData } from '@/services/fetch-data';
import { PricingOffer, PricingSection } from '../../utils/types';
import { PRICING_SECTION } from '@/api';
import { PRICING_SECTION_DATA_ID } from '@/api/singleton_ids';
import { FIELDS_PRICING_SECTION } from '@/api/fields';

const fetchPricingSectionContent = async (): Promise<PricingSection | null> => {
  const response = await fetchData({
    path: `${PRICING_SECTION}/${PRICING_SECTION_DATA_ID}`,
    fields: FIELDS_PRICING_SECTION,
  });

  if (response.data?.data) {
    const template = response.data.data;

    const offers: PricingOffer[] = template.offers.map((offer: any) => ({
      title: offer.PricingOffer_id.title,
      slug: offer.PricingOffer_id.slug,
      subtitle: offer.PricingOffer_id.subtitle,
      price: offer.PricingOffer_id.price,
      services: offer.PricingOffer_id.services.map(
        (service: any) => service.Offer_id.title
      ),
    }));

    const pricingSection: PricingSection = {
      title: template.title,
      subtitle: template.subtitle,
      currency: template.currency,
      description: template.description,
      defaultPeriodicity: template.defaultPeriodicity,
      standard: offers.find((offer) => offer.slug === 'standard'),
      pro: offers.find((offer) => offer.slug === 'pro'),
    };

    return pricingSection;
  }

  return null;
};

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

export { fetchPricingSectionContent };
export default pricingSection;
