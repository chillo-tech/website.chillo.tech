'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form as FormWrapper,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { siteConfig } from '@/config';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import RenderHtmlContent from '../RenderHTMLContent';
import { ContactFormSchema as FormSchema } from '@/models';
import { lang } from '@/lang';
import { fetchContactPageContent } from '@/lang/fr/contact';
import { useContent } from '@/hooks';

const ContactForm = () => {
  const text = useContent(fetchContactPageContent, lang.contactPage);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    try {
      toast({
        title: 'Success',
        description: 'Votre demande à bien été pris en compte.',
      });
    } catch (error) {
      toast({
        title: 'Sorry an error occur',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  };

  return (
    <FormWrapper {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-8 mx-auto space-y-6">
        <legend>
          <RenderHtmlContent content={text?.form.legend ?? ''} />
        </legend>
        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{text?.form.fields[field.name].label}</FormLabel>
              <FormControl>
                <Input
                  type={'email'}
                  placeholder={text?.form.fields[field.name]?.placeholder}
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{text?.form.fields[field.name]?.label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={text?.form.fields[field.name]?.placeholder}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={'primary'} type="submit">
          {text?.form.submitButton}
        </Button>
        <Separator className="my-6 bg-light-gray" />
        <FormDescription className="text-black/70">
          {text?.form.thanks} |{' '}
          <span className="font-semibold text-blue">{siteConfig.appName}</span>.
        </FormDescription>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
