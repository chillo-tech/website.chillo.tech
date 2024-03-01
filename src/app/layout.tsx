import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { siteConfig } from '@/config';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/commons/ThemeProvider';

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
          <Header />
          <main className="container min-h-screen w-full bg-white z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
