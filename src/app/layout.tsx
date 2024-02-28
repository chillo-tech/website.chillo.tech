import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import {siteConfig} from '@/config';
import Footer from '@/components/Footer';
import {ThemeProvider} from '@/components/providers/themes-providers';

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
            <div className="h-full w-full p-5 bg-blue">
                <div className="bg-white h-full flex justify-center flex-col w-full">
                    <div className="w-full h-max flex justify-center py-5 px-3 sticky top-0 z-40 bg-white">
                        <div className="container h-max w-full">
                            <Header/>
                        </div>
                    </div>
                    <main className="container min-h-screen w-full bg-white z-10">{children}</main>
                    <Footer/>
                </div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
