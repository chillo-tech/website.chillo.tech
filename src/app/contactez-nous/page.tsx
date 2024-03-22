import { lang } from '@/lang';
import { metadata } from '../layout';
import { siteConfig } from '@/config';
import ContactPage from '@/components/pages/ContactPage';

// Using Metadata to change the page title
metadata.title = `${siteConfig.appName} | ${lang.contactPage.title}`;

function Page() {
  return <ContactPage />;
}

export default Page;
