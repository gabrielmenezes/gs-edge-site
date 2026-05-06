import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'GS Edge Consultoria | Conectividade e Sistemas Confiáveis',
  description: 'Consultoria em tecnologia para pequenas e médias empresas. Redes seguras, sistemas integrados e infraestrutura confiável.',
  keywords: [
    'consultoria de TI', 
    'consultoria em redes', 
    'infraestrutura de TI', 
    'suporte técnico para empresas', 
    'integração de sistemas', 
    'soluções em TI para PMEs', 
    'segurança de rede corporativa', 
    'gestão de TI', 
    'migração para nuvem', 
    'GS Edge'
  ],
  openGraph: {
    title: 'GS Edge Consultoria | Soluções em TI',
    description: 'Conectividade e sistemas confiáveis para pequenas e médias empresas.',
    url: 'https://gsedge.com.br',
    siteName: 'GS Edge Consultoria',
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
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          {/* Subtle Background Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-edge-cyan/10 blur-[100px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-edge-yellow/5 blur-[120px] animate-blob animation-delay-2000"></div>
          </div>
          
          <Navbar />
          {children}
        </div>
        <footer className="bg-edge-dark border-t border-slate-800 text-slate-400 py-6 text-center text-sm relative z-10">
          © {new Date().getFullYear()} GS Edge Consultoria. Todos os direitos reservados.
        </footer>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
