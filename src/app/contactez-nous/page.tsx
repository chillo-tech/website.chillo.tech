import { title1, title2 } from '@/assets/fonts';
import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import ContactForm from '@/components/commons/forms/ContactForm';
import { lang } from '@/lang';
import { cn } from '@/lib/utils';

function ContactPage() {
  return (
    <>
      <section className="p-5 py-12 md:px-24 lg:px-48 xl:px-56 flex flex-col space-y-4">
        <h1
          className={cn(
            title1.className,
            'text-4xl w-fit mx-auto lg:text-5xl font-semibold text-center text-blue'
          )}>
          {lang.contactPage.title}
        </h1>
        <p
          className={cn(title2.className, 'text-center w-fit mx-auto text-lg')}>
          <RenderHtmlContent content={lang.contactPage.subtitle} />
        </p>
        <article className="mt-8 w-fit mx-auto rounded-md border-2 border-gray p-2 md:p-6">
          <ContactForm />
        </article>
      </section>
    </>
  );
}

export default ContactPage;
