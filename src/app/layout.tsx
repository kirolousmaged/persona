import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Persona | Your Digital Business Ecosystem. Built in Hours.',
  description:
    'The unified platform for Egyptian merchants. Headless Next.js Web Storefront, POS Inventory Sync, and Automated AI Video Reels in one single system.',
  keywords: [
    'Egyptian retail digitizing',
    'POS e-commerce sync Egypt',
    'Agency in a Box Cairo',
    'AI video reels store',
    'Next.js retail POS',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
