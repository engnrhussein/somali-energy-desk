import Link from "next/link";
import React from "react";

export default function BriefLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-crisp py-24 px-8">
      <div className="max-w-3xl mx-auto mb-16">
        <Link href="/#research" className="font-mono text-xs text-safety font-bold tracking-widest uppercase hover:text-safety-dark transition-colors inline-flex items-center gap-2">
          &larr; Back to Research Feed
        </Link>
      </div>
      
      {/* 
        The typography plugin 'prose' class gives standard markdown (like h1, h2, p, blockquote, ul, ol) 
        beautiful default styling designed for readability.
      */}
      <article className="prose prose-slate prose-lg max-w-3xl mx-auto prose-headings:font-black prose-headings:tracking-tight prose-a:text-safety hover:prose-a:text-safety-dark prose-p:font-medium prose-p:text-onyx prose-p:leading-relaxed prose-blockquote:border-safety prose-blockquote:bg-white/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:text-slate-gray">
        {children}
      </article>
    </div>
  );
}
