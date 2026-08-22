import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from "./components/LanguageContext";

export const metadata = {
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
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-200 bg-edge-darker`}
      >
        <LanguageProvider>
          <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Subtle Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-edge-cyan/10 blur-[100px] animate-blob"></div>
              <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-edge-yellow/5 blur-[120px] animate-blob animation-delay-2000"></div>
            </div>
            
            <Navbar />
            {children}
          </div>
        </LanguageProvider>
        <Footer />
        <Analytics mode="production" />
      </body>
    </html>
  );
}
