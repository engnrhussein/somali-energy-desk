import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section — unchanged */}
      <section className="px-8 py-24 md:py-32 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
          QUANTIFYING <br />
          <span className="text-slate-gray">THE HORN&apos;S</span> <br />
          ENERGY TRANSITION.
        </h1>
        <p className="max-w-2xl text-lg text-slate-dim font-medium leading-relaxed mb-12">
          Rigorous, data-driven engineering and economic analysis of renewable energy feasibility in the Somali Indian Ocean coastline. Independent research for developers, academia, and policy architects.
        </p>
        <div className="flex gap-4">
          <a href="#research" className="px-6 py-3 bg-onyx text-crisp font-bold tracking-widest text-xs hover:bg-safety transition-colors uppercase">
            View Latest Research
          </a>
        </div>
      </section>

      {/* Latest Research Feed */}
      <section id="research" className="px-8 py-16 border-t border-hairline flex-1">
        <div className="max-w-5xl">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-sm font-mono font-bold tracking-widest uppercase text-slate-gray">Latest Research</h2>
          </div>

          {/* Empty state — shown when no articles exist yet */}
          <div className="border-t border-hairline py-16">
            <p className="text-sm text-slate-dim font-mono">
              Research briefs will appear here as they are published.
            </p>
          </div>

          {/* 
            When real MDX posts exist, replace the empty state above with rows like:
            
            <Link href="/briefs/lcoe-bess-vs-diesel" className="group flex items-baseline justify-between border-t border-hairline py-6 hover:bg-slate-50 transition-colors px-2 -mx-2">
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-slate-dim shrink-0">2026-08-01</span>
                <span className="font-mono text-[10px] tracking-widest text-safety font-bold shrink-0">TECHNO-ECONOMIC</span>
                <span className="text-base font-medium group-hover:text-safety transition-colors">LCOE Analysis: BESS vs. Diesel Baseload in Mogadishu</span>
              </div>
              <span className="text-slate-dim group-hover:text-safety transition-colors ml-4">→</span>
            </Link>
          */}
        </div>
      </section>
    </div>
  );
}
