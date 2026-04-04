import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paul Ccopa - Especialista SEO & Desarrollo Web',
  description:
    'Portafolio profesional de Paul Waldir Ccopa Arenas. Especialista en SEO y desarrollo web con experiencia en optimización de sitios y marketing digital.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}