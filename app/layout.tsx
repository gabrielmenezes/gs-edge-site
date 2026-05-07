import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from "./components/LanguageContext";

export const metadata = {
  title: 'GSEdge | Solutions Engineer',
  description: 'Personal website and portfolio of Gabriel Soares (GSEdge), a Solutions Engineer specializing in Network Architecture, Cybersecurity, and Cloud.',
  keywords: [
    'Solutions Engineer',
    'Network Architecture',
    'Cybersecurity',
    'Cloud Computing',
    'GSEdge',
    'Gabriel Soares',
    'SD-WAN',
    'Fortinet',
    'Huawei',
    'Tech Lead'
  ],
  openGraph: {
    title: 'GSEdge | Solutions Engineer',
    description: 'Professional portfolio of Gabriel Soares (GSEdge)',
    url: 'https://gsedge.com.br',
    siteName: 'GSEdge',
    locale: 'en_US',
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
        <footer className="bg-edge-dark border-t border-slate-800 text-slate-400 py-6 text-center text-sm relative z-10">
          © {new Date().getFullYear()} GSEdge. All rights reserved.
        </footer>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
