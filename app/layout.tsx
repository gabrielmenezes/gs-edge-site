import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NetworkBackground from "./components/NetworkBackground";
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from "./components/LanguageContext";

export const metadata = {
  metadataBase: new URL('https://gsedge.com.br'),
  title: 'GS Edge | Desenvolvimento de Software & Soluções Digitais',
  description: 'A GS Edge é uma empresa especializada em Desenvolvimento de Software sob Medida, Aplicações Web Escaláveis, Arquitetura de APIs e Engenharia de Nuvem.',
  keywords: [
    'Desenvolvimento de Software',
    'Engenharia de Software',
    'GS Edge',
    'Desenvolvimento Web',
    'Sistemas sob Medida',
    'Next.js',
    'React',
    'Node.js',
    'Arquitetura de Nuvem',
    'Cibersegurança',
    'Empresa de Software Brasil'
  ],
  openGraph: {
    title: 'GS Edge | Desenvolvimento de Software sob Medida',
    description: 'Engenharia de software de alto desempenho, plataformas web escaláveis e arquiteturas de nuvem para impulsionar seu negócio.',
    url: 'https://gsedge.com.br',
    siteName: 'GS Edge',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/blog/era-jobs-na-apple.jpg',
        width: 1200,
        height: 630,
        alt: 'GS Edge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GS Edge | Desenvolvimento de Software sob Medida',
    description: 'Engenharia de software de alto desempenho, plataformas web escaláveis e arquiteturas de nuvem para impulsionar seu negócio.',
    images: ['/images/blog/era-jobs-na-apple.jpg'],
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-200 bg-edge-darker`}
      >
        <LanguageProvider>
          <div className="flex flex-col min-h-screen relative selection:bg-edge-cyan/20">
            {/* Apple-style Ambient Background */}
            <NetworkBackground />
            
            <Navbar />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
