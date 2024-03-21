import aboutUs from '@/lang/fr/about-us';
import banner from '@/lang/fr/banner';
import footer from '@/lang/fr/footer';
import button from '@/lang/fr/button';
import contactPage from '@/lang/fr/contact';
import errors from '@/lang/fr/errors';
import faqs from '@/lang/fr/faqs';
import howItWorks from '@/lang/fr/how-it-works';
import navigation from '@/lang/fr/navigation';
import pricingSection from '@/lang/fr/pricings';
import topServices from '@/lang/fr/top-services';
import services from '@/lang/fr/services';

const text = {
  aboutUs,
  banner,
  button,
  contactPage,
  errors,
  faq: {
    contentTitle: 'Les Bases.',
    faqs,
    subtitle: `Nous avons rassemblé certaines des questions les plus populaires posées par les clients comme ressource pour vous.<br/>
    N'hésitez pas à nous contacter directement si vous avez d'autres questions<br/> qui ne sont pas abordées ici.`,
    title: 'Questions fréquemment posées ?',
  },
  footer,
  how_its_work: {
    howItWorks,
    subtitle:
      "Dites adieu aux processus d'intégration longs associés aux agences. Il vous suffit de vous abonner, " +
      "d'ajouter les détails de votre projet, puis de nous voir configurer et livrer votre première tâche en moins de 72 heures.",
    title: 'Comment ça marche ?',
  },
  navigation,
  pricing: pricingSection,
  service: {
    services,
    subtitle: `Nous n'avons pas seulement réinventé le développement de logiciels - nous l'avons rendu accessible, efficace et abordable. L'ère du codage traditionnel est révolue. <br/> <br/>
        Découvrez le rythme accéléré du développement No Code, qui permet d'accélérer jusqu'à 5 fois l'achèvement du projet, avec une première tâche achevée dans les 72 heures.`,
    title: 'Ce que nous faisons le mieux',
    topServices,
  },
};

export { text };
