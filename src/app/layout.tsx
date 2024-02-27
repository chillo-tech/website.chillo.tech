import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import Header from '@/components/Header';
import {siteConfig} from '@/config';

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
            <div className="h-full w-full p-5 bg-blue">
                <div className="bg-white h-full flex justify-center flex-col w-full">
                    <div className="w-full h-max flex justify-center py-5 px-3 sticky top-0 z-40 bg-white">
                        <div className="container h-max w-full">
                            <Header/>
                        </div>
                    </div>
                    <main className="container min-h-screen w-full bg-white z-10">{children}</main>
                </div>
            </div>
        </body>
        </html>
    );
}
