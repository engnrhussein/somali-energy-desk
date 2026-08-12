import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications — Somali Energy Desk",
  description: "Featured academic and technical publications from the Somali Energy Desk and external researchers.",
};

export default function PublicationsPage() {
  const pubPath = path.join(process.cwd(), 'content/pages/publications.json');
  let pubData = {
    author_pubs: [
      {
        status: "Peer Reviewed • Upcoming 2026",
        title: "Techno-Economic Viability of Offshore Wind Integration in the Somali Basin",
        description: "A comprehensive computational fluid dynamics analysis modeling turbine stress loads against seasonal monsoon variations off the coast of Mogadishu. Demonstrates a projected Levelized Cost of Energy (LCOE) significantly lower than diesel baseloads.",
        bottom_status: "Awaiting Publication",
        link_url: "",
        link_text: ""
      },
      {
        status: "Working Paper",
        title: "Thermodynamic Efficiency of Utility-Scale BESS in High-Temperature Coastal Environments",
        description: "Evaluating thermal runaway risks and cooling efficiency requirements for lithium-ion battery storage arrays deployed in equatorial East Africa.",
        bottom_status: "In Progress",
        link_url: "",
        link_text: ""
      }
    ],
    external_pubs: [
      {
        publisher: "IRENA • 2025",
        title: "Horn of Africa Energy Transition Outlook",
        description: "A comprehensive macro-economic overview of wind and solar potential across the Eastern African seaboard, analyzing cross-border transmission capabilities.",
        link_text: "Read Paper →",
        link_url: "#"
      },
      {
        publisher: "World Bank Group • 2024",
        title: "De-risking Renewable Investments in Fragile Markets",
        description: "Financial frameworks and guarantees necessary to catalyze private capital into utility-scale storage and generation projects in Somalia.",
        link_text: "Read Paper →",
        link_url: "#"
      }
    ]
  };

  try {
    if (fs.existsSync(pubPath)) {
      pubData = JSON.parse(fs.readFileSync(pubPath, 'utf8'));
    }
  } catch (e) {}

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
              {pubData.author_pubs.map((pub, idx) => (
                <article key={idx} className="group">
                  <span className="font-mono text-[10px] text-slate-dim font-bold tracking-widest uppercase mb-2 block">
                    {pub.status}
                  </span>
                  <h3 className="text-2xl font-black font-sans tracking-tight mb-3 group-hover:text-safety transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-base text-slate-gray font-medium leading-relaxed mb-4">
                    {pub.description}
                  </p>
                  {pub.bottom_status ? (
                    <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-dim">
                      {pub.bottom_status}
                    </span>
                  ) : pub.link_url ? (
                    <a href={pub.link_url} className="font-mono text-xs font-bold tracking-widest uppercase text-slate-dim hover:text-onyx transition-colors">
                      {pub.link_text || "Read Paper →"}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: External Featured Publications */}
          <div className="flex flex-col">
            <h2 className="font-sans text-xs text-safety font-bold tracking-widest uppercase mb-8">
              Featured External Research
            </h2>
            
            <div className="flex flex-col gap-12">
              {pubData.external_pubs.map((pub, idx) => (
                <article key={idx} className="group">
                  <span className="font-mono text-[10px] text-slate-dim font-bold tracking-widest uppercase mb-2 block">
                    {pub.publisher}
                  </span>
                  <h3 className="text-2xl font-black font-sans tracking-tight mb-3 group-hover:text-safety transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-base text-slate-gray font-medium leading-relaxed mb-4">
                    {pub.description}
                  </p>
                  <a href={pub.link_url} className="font-mono text-xs font-bold tracking-widest uppercase text-slate-dim hover:text-onyx transition-colors">
                    {pub.link_text}
                  </a>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
