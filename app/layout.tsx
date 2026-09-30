import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NetworkBackground from "./components/NetworkBackground";
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from "./components/LanguageContext";

export const metadata = {
  metadataBase: new URL('https://gsedge.com.br'),
  alternates: {
    canonical: '/',
  },
  title: 'GS Edge | Consultoria Estratégica em Tecnologia & Arquitetura de Sistemas',
  description: 'Consultoria especializada em arquitetura de sistemas distribuídos de alta disponibilidade, redes corporativas, modernização de legados, FinOps e tech leadership advisory.',
  keywords: [
    'Consultoria de Tecnologia',
    'Arquitetura de Sistemas',
    'Consultoria Cloud',
    'Sistemas Distribuídos',
    'Infraestrutura de Rede',
    'SD-WAN',
    'FinOps',
    'Auditoria Técnica',
    'Modernização de Sistemas',
    'Fractional CTO',
    'GS Edge'
  ],
  openGraph: {
    title: 'GS Edge | Consultoria em Tecnologia & Arquitetura de Sistemas',
    description: 'Apoiamos líderes na tomada de decisões técnicas de alto impacto, arquiteturas resilientes de missão crítica e modernização de ecossistemas legados.',
    url: 'https://gsedge.com.br',
    siteName: 'GS Edge',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/blog/era-jobs-na-apple.jpg',
        width: 1200,
        height: 630,
        alt: 'GS Edge Consultoria em Tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GS Edge | Consultoria em Tecnologia & Arquitetura de Sistemas',
    description: 'Apoiamos líderes na tomada de decisões técnicas de alto impacto, arquiteturas resilientes de missão crítica e modernização de ecossistemas legados.',
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
