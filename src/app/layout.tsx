import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import ScrollLink from "../components/ScrollLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Somali Energy Desk",
  description: "Independent research hub for energy economics and quantitative analysis in the Horn of Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans min-h-screen flex flex-col relative`}>
        {/* Pure CSS Mobile Sticky Logo (Direct child of body to enable sticky track) */}
        <div className="md:hidden sticky top-4 self-end z-50 mr-8 mt-[28px] w-0 h-0 flex justify-end pointer-events-none">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="w-[42px] h-auto pointer-events-auto drop-shadow-sm absolute top-0 right-0">
             <defs>
               <linearGradient id="bladeGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#111111" />
                 <stop offset="100%" stopColor="#2D2D2D" />
               </linearGradient>
               <linearGradient id="accentGradMob" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#FF5A00" />
                 <stop offset="100%" stopColor="#E04800" />
               </linearGradient>
             </defs>
             <g transform="scale(0.65)">
                 <polygon points="0,0 90,0 120,30 30,30" fill="url(#bladeGradMob)" />
                 <polygon points="30,45 150,45 180,75 60,75" fill="url(#accentGradMob)" />
                 <polygon points="60,90 120,90 150,120 90,120" fill="url(#bladeGradMob)" />
             </g>
           </svg>
        </div>

        <header className="w-full border-b border-hairline py-6 px-8 flex justify-between items-center -mt-[28px] md:mt-0">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-black text-2xl tracking-tighter uppercase hover:text-safety transition-colors">SED</Link>
            <div className="h-4 w-px bg-slate-light"></div>
            <span className="text-sm font-medium tracking-widest text-slate-dim uppercase">Somali Energy Desk</span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-slate-gray">
            <Link href="/briefs" className="hover:text-safety transition-colors">DATA BRIEFS</Link>
            <Link href="/publications" className="hover:text-safety transition-colors">PUBLICATIONS</Link>
            <Link href="/about" className="hover:text-safety transition-colors">ABOUT</Link>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
        
        {/* Mobile Side-by-Side Links */}
        <div className="md:hidden flex justify-start gap-6 py-6 px-8 font-sans font-bold tracking-widest uppercase text-xs text-onyx">
          <Link href="/publications" className="hover:text-safety transition-colors">Publications</Link>
          <Link href="/about" className="hover:text-safety transition-colors">About SED</Link>
        </div>

        <footer className="w-full border-t border-hairline py-8 px-8 flex flex-col md:flex-row justify-between text-xs font-mono text-slate-dim">
          <span>&copy; {new Date().getFullYear()} SOMALI ENERGY DESK. ALL RIGHTS RESERVED.</span>
        </footer>
      </body>
    </html>
  );
}
