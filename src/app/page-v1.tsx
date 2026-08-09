import Link from "next/link";

const dataBriefs = [
  {
    id: "lcoe-bess-vs-diesel",
    title: "LCOE Analysis: BESS vs. Diesel Baseload in Mogadishu",
    date: "2026-08-01",
    category: "TECHNO-ECONOMIC",
    description: "Comparative NPV and IRR modelling of 50MW Wind + BESS against traditional $0.85/kWh diesel generation.",
    href: "/briefs/lcoe-bess-vs-diesel"
  },
  {
    id: "openfoam-micrositing",
    title: "OpenFOAM Micro-Siting: Somali Coastline",
    date: "2026-07-15",
    category: "CFD SIMULATION",
    description: "High-resolution wind flow analysis over the Indian Ocean escarpment using ERA5 satellite data.",
    href: "/briefs/openfoam-micrositing"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
          QUANTIFYING <br />
          <span className="text-slate-gray">THE HORN'S</span> <br />
          ENERGY TRANSITION.
        </h1>
        <p className="max-w-2xl text-lg text-slate-dim font-medium leading-relaxed mb-12">
          Rigorous, data-driven engineering and economic analysis of renewable energy feasibility in the Somali Indian Ocean coastline. Independent research for developers, academia, and policy architects.
        </p>
        <div className="flex gap-4">
          <Link href="/briefs" className="px-6 py-3 bg-onyx text-crisp dark:bg-crisp dark:text-onyx font-bold tracking-widest text-xs hover:bg-safety dark:hover:bg-safety dark:hover:text-crisp transition-colors uppercase">
            View Latest Research
          </Link>
          <a href="#" className="px-6 py-3 border border-onyx text-onyx dark:border-crisp dark:text-crisp font-bold tracking-widest text-xs hover:border-safety hover:text-safety dark:hover:border-safety dark:hover:text-safety transition-colors uppercase">
            Terminal Access
          </a>
        </div>
      </section>

      {/* Data Briefs Grid */}
      <section className="px-8 py-16 border-t border-hairline bg-slate-50 dark:bg-[#151515] flex-1">
        <div className="max-w-7xl">
          <div className="flex justify-between items-end mb-12 border-b border-hairline pb-4">
            <h2 className="text-2xl font-bold tracking-tight uppercase">Data Briefs</h2>
            <span className="font-mono text-xs text-slate-dim">LIVE FEED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataBriefs.map((brief) => (
              <Link key={brief.id} href={brief.href} className="group flex flex-col border border-hairline p-6 bg-crisp dark:bg-onyx hover:border-safety transition-colors h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] tracking-widest text-safety font-bold bg-safety/10 px-2 py-1">
                    {brief.category}
                  </span>
                  <span className="font-mono text-xs text-slate-dim">{brief.date}</span>
                </div>
                <h3 className="text-xl font-bold leading-snug mb-4 group-hover:text-safety transition-colors">
                  {brief.title}
                </h3>
                <p className="text-sm text-slate-gray mt-auto leading-relaxed">
                  {brief.description}
                </p>
                <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest group-hover:text-safety transition-colors">
                    Read Report
                  </span>
                  <span className="text-safety group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
