import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import { siteConfig } from '@/config';

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <div className={cn('bg-blue w-full h-full p-5')}>
          <Header />
          <main className="min-h-screen w-full bg-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
