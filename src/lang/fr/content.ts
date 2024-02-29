type FAQ = {
  question: string;
  answer: string;
};

export type HowItWork = {
  id: number,
  title: string;
  subtitle: string;
  description: string;
};

const pricingSection = {
  title: 'Tarification',
  subtitle: 'Tarification',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero
  magnam, harum rem aperiam, perspiciatis omnis eum delectus similique
  nesciunt veritatis optio, vel expedita iusto? Repellendus iure labore
  molestias a!
  <br />
  <br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
  eius alias, ducimus incidunt minima deleniti aut dolores asperiores
  nihil ?`,
  currency: '€',
  defaultPeriodicity: 'mois',
  standard: {
    title: 'Standard',
    subtitle: 'Standard subtitles',
    services: ['OpenStack', 'Google', 'Microsoft'],
  },
  pro: {
    title: 'Pro',
    subtitle: 'Pro subtitles',
    services: ['Github'],
  },
};

const faqs: FAQ[] = [
  {
    question: 'Qui est le client idéal de Chillo Tech ?',
    answer: ` Chillo Services est le partenaire parfait pour les entrepreneurs et les entreprises de toutes tailles qui cherchent à développer des logiciels ou à améliorer leurs opérations avec la puissance de la technologie avancée. Nous comprenons les obstacles liés à l'embauche d'un développeur à plein temps - le temps passé à vérifier les candidats, les coûts élevés et le risque de compétences inadaptées.<br/><br/>
    Au lieu de cela, Chillo Services propose une solution bien plus efficace et économique. Nous offrons un accès à un vaste pool de développeurs multi-talentueux, pré-vérifiés pour leurs compétences exceptionnelles et leur expertise diversifiée. Cela vous permet d'utiliser des compétences de développement de haute qualité sans supporter le fardeau d'un salaire à plein temps, vous faisant économiser des ressources substantielles.<br/><br/>
    Mais ce n'est pas tout. Avec notre système de gestion de projet robuste, la création de nouvelles tâches et le suivi de la progression n'ont jamais été aussi faciles. Il vous suffit d'ajouter vos exigences et de suivre la progression en temps réel, garantissant que votre projet est toujours sur la bonne voie. Ainsi, si vous cherchez à optimiser votre entreprise, à élever votre paysage numérique et ce, de manière économique, Chillo Services est votre choix idéal. Laissez-nous gérer les complexités du développement logiciel pendant que vous vous concentrez sur ce qui importe le plus - faire croître votre entreprise.
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

const howItWorks: HowItWork[] = [
  {
    id: 1,
    title: 'Réservez une discussion',
    subtitle: ` Parlons de votre business...`,
    description: `Planifie un appel de découverte avec nous pour comprendre ton business 
    ton idée de projet et clarifier ta vision. On va examiner tes systèmes actuels et créer des prochaines étapes concrètes 
    tout en répondant à toutes les questions que tu pourrais avoir sur notre service.`
  },
  {
    id: 2,
    title: 'Souscrivez à une offre',
    subtitle: ` Il est temps de mettre en place votre tableau de gestion de projet...`,
    description: `Une fois abonné, ajoutez les détails de votre projet à votre tableau Trello. Cela inclut le téléchargement des designs,
    la définition des fonctionnalités et la fourniture de toutes les informations qui guideront le processus de développement.
    Ne vous inquiétez pas, nous vous guiderons pour configurer correctement votre tableau de projet.`
  },
  {
    id: 3,
    title: 'Créez vos tâches de projet',
    subtitle: `Nous créons vos tâches et mettons en place des Sprints hebdomadaires...`,
    description: `Nous décomposons les détails de votre projet en tâches de développement réalisables.
    Votre développeur créera ensuite un cycle de « Sprint » hebdomadaire composé de plusieurs tâches
    qui devront être terminées en fin de semaine. Chaque tâche effectuée durant la semaine sera marquée pour révision une fois terminée.`
  },
  {
    id: 4,
    title: 'Suivre et gérer votre progression',
    subtitle: `Regardez comment nous donnons vie à votre idée...`,
    description: `Il vous suffit de vous connecter et de suivre la progression de vos projets avec Trello.
    Nous facilitons la révision des tâches, l'attribution des révisions, l'ajout de commentaires,
    la consultation des liens et le partage de nouveaux détails avec votre développeur.
    Nous comprenons que les besoins en développement peuvent fluctuer. C'est pourquoi vous pouvez mettre en pause votre abonnement
    si vous n'avez pas de tâches et le reprendre lorsque vous en avez`
  }
];

export const text = {
  navigation: {
    about: 'À propos de nous',
    how_it_works: 'Comment ça marche',
    pricing: 'Tarifs',
    services: 'Services',
    faq: 'FAQ',
  },
  contact_btn: 'Contactez-nous',
  faq: {
    title:
      'Questions fréquemment posées <span className="text-green text-4xl">?</span>',
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
        commerciaux. Faites confiance à notre expertise et obtenez des résultats concrets dès maintenant.`
  },
  how_its_work: {
    title: 'Comment ça marche ?',
    subtitle: 'Dites adieu aux processus d\'intégration longs associés aux agences. Il vous suffit de vous abonner, ' +
        'd\'ajouter les détails de votre projet, puis de nous voir configurer et livrer votre première tâche en moins de 72 heures.',
    howItWorks
  }
};
