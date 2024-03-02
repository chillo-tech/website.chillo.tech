import {z} from 'zod';
import { ContactFormSchema } from './schemas/ContactFormSchema';

// Tips: Here we convert all zod schema object to type
type ContactFormModel = z.infer<typeof ContactFormSchema>;

export { ContactFormSchema };
export type { ContactFormModel };
