import { Roboto, Poppins, Montserrat } from 'next/font/google';

export const paragraph = Roboto({
  weight: '300',
  subsets: ['latin'],
});

export const title1 = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: '900',
});

export const title2 = Montserrat({
  style: 'normal',
  subsets: ['latin'],
});
