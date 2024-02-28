import { Roboto, Poppins, Montserrat } from 'next/font/google';

export const paragraph = Roboto({
  weight: '300',
  subsets: ['latin'],
});

export const title1 = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: '800',
});

export const title2 = Montserrat({
  weight: '500',
  style: 'normal',
  subsets: ['latin'],
});
