import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications — Somali Energy Desk",
  description: "Featured academic and technical publications from the Somali Energy Desk and external researchers.",
};

export default function PublicationsPage() {
  return (
    <div className="px-8 py-12 md:py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-4 uppercase">
            Publications
          </h1>
          <div className="h-2 w-24 bg-safety"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 pt-4">
          
          {/* Left Column: Author Publications */}
          <div className="flex flex-col">
            <h2 className="font-sans text-xs text-safety font-bold tracking-widest uppercase mb-8">
              Somali Energy Desk Authors
            </h2>
            
            <div className="flex flex-col gap-12">
              {/* Author Paper 1 */}
              <article className="group">
                <span className="font-mono text-[10px] text-slate-dim font-bold tracking-widest uppercase mb-2 block">
                  Peer Reviewed • Upcoming 2026
                </span>
                <h3 className="text-2xl font-black font-sans tracking-tight mb-3 group-hover:text-safety transition-colors leading-tight">
                  Techno-Economic Viability of Offshore Wind Integration in the Somali Basin
                </h3>
                <p className="text-base text-slate-gray font-medium leading-relaxed mb-4">
                  A comprehensive computational fluid dynamics analysis modeling turbine stress loads against seasonal monsoon variations off the coast of Mogadishu. Demonstrates a projected Levelized Cost of Energy (LCOE) significantly lower than diesel baseloads.
                </p>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-dim">
                  Awaiting Publication
                </span>
              </article>

              {/* Author Paper 2 */}
              <article className="group">
                <span className="font-mono text-[10px] text-slate-dim font-bold tracking-widest uppercase mb-2 block">
                  Working Paper
                </span>
                <h3 className="text-2xl font-black font-sans tracking-tight mb-3 group-hover:text-safety transition-colors leading-tight">
                  Thermodynamic Efficiency of Utility-Scale BESS in High-Temperature Coastal Environments
                </h3>
                <p className="text-base text-slate-gray font-medium leading-relaxed mb-4">
                  Evaluating thermal runaway risks and cooling efficiency requirements for lithium-ion battery storage arrays deployed in equatorial East Africa.
                </p>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-dim">
                  In Progress
                </span>
              </article>
            </div>
          </div>

          {/* Right Column: External Featured Publications */}
          <div className="flex flex-col">
            <h2 className="font-sans text-xs text-safety font-bold tracking-widest uppercase mb-8">
              Featured External Research
            </h2>
            
            <div className="flex flex-col gap-12">
              {/* Example External Paper 1 */}
              <article className="group">
                <span className="font-mono text-[10px] text-slate-dim font-bold tracking-widest uppercase mb-2 block">
                  IRENA • 2025
                </span>
                <h3 className="text-2xl font-black font-sans tracking-tight mb-3 group-hover:text-safety transition-colors leading-tight">
                  Horn of Africa Energy Transition Outlook
                </h3>
                <p className="text-base text-slate-gray font-medium leading-relaxed mb-4">
                  A comprehensive macro-economic overview of wind and solar potential across the Eastern African seaboard, analyzing cross-border transmission capabilities.
                </p>
                <a href="#" className="font-mono text-xs font-bold tracking-widest uppercase text-slate-dim hover:text-onyx transition-colors">
                  Read Paper &rarr;
                </a>
              </article>

              {/* Example External Paper 2 */}
              <article className="group">
                <span className="font-mono text-[10px] text-slate-dim font-bold tracking-widest uppercase mb-2 block">
                  World Bank Group • 2024
                </span>
                <h3 className="text-2xl font-black font-sans tracking-tight mb-3 group-hover:text-safety transition-colors leading-tight">
                  De-risking Renewable Investments in Fragile Markets
                </h3>
                <p className="text-base text-slate-gray font-medium leading-relaxed mb-4">
                  Financial frameworks and guarantees necessary to catalyze private capital into utility-scale storage and generation projects in Somalia.
                </p>
                <a href="#" className="font-mono text-xs font-bold tracking-widest uppercase text-slate-dim hover:text-onyx transition-colors">
                  Read Paper &rarr;
                </a>
              </article>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
