import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
      <body className={`${inter.variable} ${jetbrains.variable} font-sans min-h-screen flex flex-col`}>
        <header className="w-full border-b border-hairline py-6 px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="font-black text-2xl tracking-tighter uppercase">SED</span>
            <div className="h-4 w-px bg-slate-light"></div>
            <span className="text-sm font-medium tracking-widest text-slate-dim uppercase">Somali Energy Desk</span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-slate-gray">
            <a href="#research" className="hover:text-safety transition-colors">DATA BRIEFS</a>
            <a href="#" className="hover:text-safety transition-colors">PUBLICATIONS</a>
            <a href="/about" className="hover:text-safety transition-colors">ABOUT</a>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="w-full border-t border-hairline py-8 px-8 flex flex-col md:flex-row justify-between text-xs font-mono text-slate-dim">
          <span>&copy; {new Date().getFullYear()} SOMALI ENERGY DESK. ALL RIGHTS RESERVED.</span>
          <span>LAT: 2.0469° N | LON: 45.3182° E</span>
        </footer>
      </body>
    </html>
  );
}
