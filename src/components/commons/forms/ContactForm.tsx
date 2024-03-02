'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Head from 'next/head';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { lang } from '@/lang';
import { contactPage } from '@/lang/fr/content';
import { siteConfig } from '@/config';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import RenderHtmlContent from '../RenderHTMLContent';

const FormSchema = z
  .object({
    email: z
      .string({
        required_error: lang.errors.required,
      })
      .email(lang.errors.email),
    message: z
      .string({
        required_error: lang.errors.required,
      })
      .min(10, {
        message: 'Le message doit avoir au moins 10 caractères.',
      })
      .max(255, {
        message: 'Le message doit avoir au plus 255 caractères.',
      }),
  })
  .required({
    email: true,
    message: true,
  });

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    try {
      //TODO: mutation.mutate(data);
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
    <>
      <Head>
        <title> {`${siteConfig.appName} | ${lang.contactPage.title}`}</title>
      </Head>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full px-8 mx-auto space-y-6">
          <legend>
            <RenderHtmlContent content={contactPage.form.legend} />
          </legend>
          <FormField
            control={form.control}
            name={'email'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {contactPage.form.fields[field.name].label}
                </FormLabel>
                <FormControl>
                  <Input
                    type={'email'}
                    placeholder={
                      contactPage.form.fields[field.name]?.placeholder
                    }
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
                <FormLabel>
                  {contactPage.form.fields[field.name]?.label}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      contactPage.form.fields[field.name]?.placeholder
                    }
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={'primary'} type="submit">
            {contactPage.form.submitButton}
          </Button>
          <Separator className="my-6 bg-light-gray" />
          <FormDescription className="text-black/70">
            {contactPage.form.thanks} |{' '}
            <span className="font-semibold text-blue">
              {siteConfig.appName}
            </span>
            .
          </FormDescription>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
