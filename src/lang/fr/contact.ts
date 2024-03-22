import { fetchData } from '@/services/fetch-data';
import { ContactFormFields, ContactPage } from '../../utils/types';
import { CONTACT_PAGE } from '@/api';
import { CONTACT_PAGE_DATA_ID } from '@/api/singleton_ids';
import { FIELDS_CONTACT_PAGE } from '@/api/fields';

const fetchContactPageContent = async (): Promise<ContactPage | null> => {
  const response = await fetchData({
    path: `${CONTACT_PAGE}/${CONTACT_PAGE_DATA_ID}`,
    fields: FIELDS_CONTACT_PAGE,
  });

  if (response.data?.data) {
    const template = response.data.data;

    const contactPage: ContactPage = {
      title: template.title,
      subtitle: template.subtitle,
      form: {
        legend: template.form.legend,
        fields: {
          email: {
            label: template.form.fields.email_label,
            placeholder: template.form.fields.email_placeholder,
          },
          message: {
            label: template.form.fields.message_label,
            placeholder: template.form.fields.message_placeholder,
          },
        },
        submitButton: template.form.submitButton,
        thanks: template.form.footer,
      },
    };

    return contactPage;
  }

  return null;
};

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

export { fetchContactPageContent };
export default contactPage;
