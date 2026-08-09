import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section (Unchanged, as requested) */}
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
          <Link href="#about" className="px-6 py-3 bg-onyx text-crisp dark:bg-crisp dark:text-onyx font-bold tracking-widest text-xs hover:bg-safety dark:hover:bg-safety dark:hover:text-crisp transition-colors uppercase">
            View Latest Research
          </Link>
          <a href="#" className="px-6 py-3 border border-onyx text-onyx dark:border-crisp dark:text-crisp font-bold tracking-widest text-xs hover:border-safety hover:text-safety dark:hover:border-safety dark:hover:text-safety transition-colors uppercase">
            Terminal Access
          </a>
        </div>
      </section>

      {/* V2: Elite Minimalist About Section */}
      <section id="about" className="px-8 py-24 border-t border-hairline bg-crisp dark:bg-onyx flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24">
            
            {/* Left Column: Image & Identification */}
            <div className="flex flex-col">
              <div className="w-full aspect-[3/4] relative mb-6 grayscale contrast-125">
                <Image 
                  src="/my-image.jpg" 
                  alt="Lead Analyst" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="border-t border-hairline pt-4">
                <h2 className="font-sans font-black tracking-tighter text-xl uppercase mb-1">
                  Lead Analyst
                </h2>
                <p className="font-mono text-xs text-slate-dim uppercase tracking-widest">
                  Chem. Eng. // Simulation & Modeling
                </p>
              </div>
            </div>

            {/* Right Column: The Persona & Thesis (Pure Typography) */}
            <div className="flex flex-col justify-start">
              
              <div className="mb-16">
                <h3 className="font-mono text-xs text-safety font-bold tracking-widest uppercase mb-4">
                  01. The Academic & Engineering Profile
                </h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-onyx dark:text-crisp">
                  A highly analytical Chemical Engineering graduate from Bolu Abant İzzet Baysal University (BAIBU), targeting elite Master of Science programs at METU and Koç University. An active researcher with experience at the NÜRDAM research center—specializing in data processing pipelines—and holding an upcoming placement at the LIP laboratory in Portugal.
                </p>
                <p className="text-sm text-slate-gray mt-6 leading-relaxed">
                  Expertise bridges heavy process engineering and software development. Execution of advanced computational fluid dynamics (CFD) and thermodynamic simulations utilizes OpenFOAM, HOMER Pro, DWSIM, and COMSOL. Modern web architectures (Next.js, Python, Firebase) are leveraged to build proprietary data pipelines. Supported by high-level English proficiency (TOEFL iBT: 100).
                </p>
              </div>

              <div className="mb-16">
                <h3 className="font-mono text-xs text-safety font-bold tracking-widest uppercase mb-4">
                  02. The Role & Persona
                </h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-onyx dark:text-crisp">
                  Independent Energy Systems Analyst & Technical Founder.
                </p>
                <p className="text-sm text-slate-gray mt-6 leading-relaxed">
                  This is not climate activism; this is hardcore engineering. The primary objective is to act as the critical bridge between complex thermodynamic/economic simulation data and the real-world deployment of renewable infrastructure in the Horn of Africa.
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs text-safety font-bold tracking-widest uppercase mb-4">
                  03. The Mission & Thesis
                </h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-onyx dark:text-crisp">
                  To mathematically prove that integrating wind power and battery storage along the 3,000km Somali coastline is a highly profitable economic necessity designed to displace the region's cripplingly expensive diesel baseload ($0.50–$1.00/kWh).
                </p>
                <p className="text-sm text-slate-gray mt-6 leading-relaxed">
                  The Somali Energy Desk serves as a live, sophisticated portfolio proving the capacity to execute end-to-end research—from OpenFOAM micro-siting to Levelized Cost of Energy (LCOE) calculations. Over time, this digital asset scales to support international energy developers, NGOs, and infrastructure funds looking to enter the East African market.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
