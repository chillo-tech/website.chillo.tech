import { lang } from '@/lang';
import { z } from 'zod';

const ContactFormSchema = z
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
      .min(5),
  })
  .required({
    email: true,
    message: true,
  });

export { ContactFormSchema };
