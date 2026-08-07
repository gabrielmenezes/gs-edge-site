import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
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
        <footer className="bg-edge-dark border-t border-slate-800 text-slate-400 py-10 text-sm relative z-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-1">
              <p className="font-bold text-slate-200 text-base">GS Edge - Software Engineering</p>
              <p className="text-xs text-slate-400">Design de Sistemas, Software sob Medida & Capacitação em TI</p>
              <p className="text-xs text-slate-500">São Paulo, SP - Brasil</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs">
              <a 
                href="mailto:contato@gsedge.com.br" 
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-edge-cyan text-edge-cyan font-semibold transition-all hover:scale-105"
              >
                contato@gsedge.com.br
              </a>
              <span className="text-slate-500">
                © {new Date().getFullYear()} <span className="font-bold text-slate-300">GS Edge</span>. Todos os direitos reservados.
              </span>
            </div>
          </div>
        </footer>
        <Analytics mode="production" />
      </body>
    </html>
  );
}

