"use client";

import { useState } from "react";
import Link from "next/link";

interface Brief {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

interface Props {
  briefs: Brief[];
}

export default function BriefsListClient({ briefs }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(briefs.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBriefs = briefs.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col min-h-[calc(100vh-300px)]">
      <div className="flex flex-col gap-0 mb-12 flex-1">
        {currentBriefs.map((brief) => (
          <Link 
            key={brief.slug} 
            href={`/briefs/${brief.slug}`} 
            className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center py-8 border-b border-slate-light hover:bg-slate-50 transition-colors px-4 -mx-4 rounded-lg !no-underline !text-onyx"
          >
            <div className="w-full md:w-1/4 shrink-0">
              <span className="font-mono text-[10px] text-safety font-bold tracking-widest uppercase block mb-2">
                {brief.category}
              </span>
              <span className="font-mono text-xs text-slate-dim font-bold tracking-widest uppercase block">
                {brief.date ? brief.date.split('T')[0] : 'DRAFT'}
              </span>
            </div>
            
            <div className="w-full md:w-3/4">
              <h3 className="text-xl md:text-3xl font-black font-sans tracking-tight mb-3 group-hover:text-safety transition-colors leading-tight line-clamp-2">
                {brief.title}
              </h3>
              <p className="text-sm text-slate-gray font-medium leading-relaxed line-clamp-2">
                {brief.excerpt}
              </p>
            </div>
          </Link>
        ))}
        {currentBriefs.length === 0 && (
          <div className="py-12 text-center text-slate-dim font-mono text-sm">
            No research briefs found.
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-slate-light pt-8 mt-8">
        <div className="text-xs font-mono font-bold tracking-widest text-slate-dim uppercase">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={prevPage}
            disabled={currentPage === 1}
            className="w-12 h-12 flex items-center justify-center border border-slate-light disabled:opacity-30 hover:border-safety hover:text-safety transition-colors font-mono font-bold !no-underline !text-onyx"
          >
            &lt;
          </button>
          <button 
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="w-12 h-12 flex items-center justify-center border border-slate-light disabled:opacity-30 hover:border-safety hover:text-safety transition-colors font-mono font-bold !no-underline !text-onyx"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
