import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import { siteConfig } from '@/config';
import Footer from '@/components/Footer';
import { paragraph } from '@/assets/fonts';
import { ThemeProvider } from '@/components/providers/themes-providers';

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange>
          <div className={cn('bg-blue w-full h-full p-5 text-black')}>
            <Header />
            <main
              className={cn(
                paragraph.className,
                'min-h-screen w-full bg-white'
              )}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
