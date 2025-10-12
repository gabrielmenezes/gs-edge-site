import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'GS Edge Consultoria | Conectividade e Sistemas Confiáveis',
  description: 'Consultoria em tecnologia para pequenas e médias empresas. Redes seguras, sistemas integrados e infraestrutura confiável.',
  keywords: ['consultoria em redes', 'infraestrutura de TI', 'consultoria em sistemas', 'suporte de TI', 'conectividade para empresas'],
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-slate-200">
          <Navbar />
          {children}
        </div>
        <footer className="bg-slate-700 text-white py-4 text-center">
          © 2025 GS Edge Consultoria. Todos os direitos reservados.
        </footer>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
