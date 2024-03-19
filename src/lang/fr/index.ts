import aboutUs from './about-us';
import contactPage from './contact';
import errors from './errors';
import faqs from './faqs';
import howItWorks from './how-it-works';
import pricingSection from './pricings';
import topServices from "@/lang/fr/top-services";
import services from "@/lang/fr/services";

const text = {
  aboutUs,
  button: {
    send: 'Envoyez',
    contact: 'Contactez-nous',
    suscribe: 'Souscrire',
  },
  navigation: {
    about: 'À propos de nous',
    how_it_works: 'Comment ça marche',
    pricing: 'Tarifs',
    services: 'Services',
    faq: 'FAQ',
  },
  faq: {
    title: 'Questions fréquemment posées ?',
    subtitle: `Nous avons rassemblé certaines des questions les plus populaires posées par les clients comme ressource pour vous.<br/>
    N'hésitez pas à nous contacter directement si vous avez d'autres questions<br/> qui ne sont pas abordées ici.`,
    contentTitle: 'Les Bases.',
    faqs,
  },
  pricing: pricingSection,
  footer: {
    title:
      'CHILLO accélère la performance business et digitale des entreprises.',
    subtitle:
      'CHILLO est une société de conseil en nouvelles technologies. Nous concevons et developpons des applications',
    copyright: '© Copyright 2024 Chillo Tech. Tous droits réservés.',
    privacyPolicy: 'Politique de confidentialité',
  },
  banner: {
    title: 'Boostez votre entreprise',
    subtitle: 'Votre projet, notre priorité',
    contentTitle: `Des <span className="font-bold">solutions IT exclusives</span> pour atteindre vos objectifs 
        commerciaux. Faites confiance à notre expertise et obtenez des résultats concrets dès maintenant.`,
  },
  how_its_work: {
    title: 'Comment ça marche ?',
    subtitle:
      "Dites adieu aux processus d'intégration longs associés aux agences. Il vous suffit de vous abonner, " +
      "d'ajouter les détails de votre projet, puis de nous voir configurer et livrer votre première tâche en moins de 72 heures.",
    howItWorks,
  },
  service: {
    title: 'Ce que nous faisons le mieux',
    subtitle:`Nous n'avons pas seulement réinventé le développement de logiciels - nous l'avons rendu accessible, efficace et abordable. L'ère du codage traditionnel est révolue. <br/> <br/>
        Découvrez le rythme accéléré du développement No Code, qui permet d'accélérer jusqu'à 5 fois l'achèvement du projet, avec une première tâche achevée dans les 72 heures.`,
    topServices,
    services,
  },
  contactPage,
  errors,
};

export { text };
