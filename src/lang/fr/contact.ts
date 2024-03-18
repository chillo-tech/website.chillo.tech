import { ContactFormFields, ContactPage } from '../../utils/types';

const contactPageFields: ContactFormFields = {
  email: {
    label: 'Votre email',
    placeholder: '',
  },
  message: {
    label: 'Votre message',
    placeholder: '',
  },
};

const contactPage: ContactPage = {
  title: 'Contactez-nous',
  subtitle: `Nous sommes là pour vous.<br /> N'hésitez pas à nous contacter pour toute question ou préoccupation.`,
  form: {
    legend: `Nous sommes ravis de vous accueillir sur notre page de contact.<br /> <br/>
        Que vous ayez un projet en tête ou que vous cherchiez des conseils,<br/> 
        notre équipe de développeurs expérimentés est là pour vous accompagner.`,
    fields: contactPageFields,
    submitButton: 'Envoyez',
    thanks: 'Merci de considérer nos services pour concrétiser votre vision.',
  },
};

export default contactPage;
