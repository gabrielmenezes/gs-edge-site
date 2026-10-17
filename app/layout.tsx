import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import JsonLd from './components/JsonLd';
import { personSchema, websiteSchema } from '@/lib/seo';
import { siteDescription, siteIndexable, siteName, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} | Tecnologia & Projetos`,
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: `${siteUrl}/#about` }],
  creator: siteName,
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  robots: { index: siteIndexable, follow: true },
  icons: { icon: '/icon.svg' },
  manifest: '/site.webmanifest',
};

const geistSans = localFont({ src: './fonts/GeistVF.woff', variable: '--font-geist-sans', weight: '100 900' });
const geistMono = localFont({ src: './fonts/GeistMonoVF.woff', variable: '--font-geist-mono', weight: '100 900' });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-200`}>
        <JsonLd data={{ '@context': 'https://schema.org', '@graph': [personSchema, websiteSchema] }} />
        <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
        <AmbientBackground />
        <Navbar />
        {children}
        <Footer />
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  );
}
