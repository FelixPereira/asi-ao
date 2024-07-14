import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASI',
  description: 'Adventist-laymen’s Services & Industries',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
