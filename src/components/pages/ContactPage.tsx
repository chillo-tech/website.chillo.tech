'use client';

import { title1, title2 } from '@/assets/fonts';
import RenderHtmlContent from '@/components/commons/RenderHTMLContent';
import ContactForm from '@/components/commons/forms/ContactForm';
import { lang } from '@/lang';
import { cn } from '@/lib/utils';
import { useContent } from '@/hooks';
import { fetchContactPageContent } from '@/lang/fr/contact';

function ContactPage() {
  const text = useContent(fetchContactPageContent, lang.contactPage);

  return (
    <section className="p-5 py-12 md:px-24 lg:px-48 xl:px-56 flex flex-col space-y-10">
      <div className="space-y-4 flex flex-col items-center justify-between">
        <h1
          className={cn(
            title1.className,
            'text-4xl w-fit mx-auto lg:text-5xl font-bold text-center',
            'text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue via-gradient-end'
          )}>
          {text?.title}
        </h1>
        {text?.subtitle && (
          <div
            className={cn(
              title2.className,
              'text-center text-xl w-fit mx-auto'
            )}>
            <RenderHtmlContent content={text?.subtitle} />
          </div>
        )}
      </div>
      <article className="w-fit mx-auto rounded-md border-2 border-gray p-2 md:px-2 md:p-6">
        <ContactForm />
      </article>
    </section>
  );
}

export default ContactPage;
