import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chillo tech | Des devs hautement qualifiés pour atteindre vos objectifs commerciaux. Faites confiance à notre expertise et obtenez des résultats concrets dès maintenant",
  description: "Des devs hautement qualifiés pour atteindre vos objectifs commerciaux. Faites confiance à notre expertise et obtenez des résultats concrets dès maintenant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
