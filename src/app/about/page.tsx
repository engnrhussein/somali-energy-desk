import fs from "fs";
import path from "path";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Somali Energy Desk",
  description: "Independent Energy Systems Analyst. Chemical Engineering. CFD Simulation & Techno-Economic Modeling.",
};

export default function AboutPage() {
  const aboutPath = path.join(process.cwd(), 'content/pages/about.json');
  let aboutData = {
    image: "/my-image.jpg",
    profile_title_1: "Chemical Engineer &",
    profile_title_2: "SED Founder",
    profile_subtitle: "Lead Author & Analyst",
    sections: [
      {
        title: "The Academic & Engineering Profile",
        p1: "A highly analytical Chemical Engineering graduate from Bolu Abant İzzet Baysal University (BAIBU), targeting elite Master of Science programs at METU and Koç University. An active researcher with experience at the NÜRDAM research center—specializing in data processing pipelines—and holding an upcoming placement at the LIP laboratory in Portugal.",
        p2: "Expertise bridges heavy process engineering and software development. Execution of advanced computational fluid dynamics (CFD) and thermodynamic simulations utilizes OpenFOAM, HOMER Pro, DWSIM, and COMSOL. Modern web architectures (Next.js, Python, Firebase) are leveraged to build proprietary data pipelines. Supported by high-level English proficiency (TOEFL iBT: 100)."
      },
      {
        title: "The Role",
        p1: "Independent Energy Systems Analyst & Technical Founder.",
        p2: "This is not climate activism; this is hardcore engineering. The primary objective is to act as the critical bridge between complex thermodynamic/economic simulation data and the real-world deployment of renewable infrastructure in the Horn of Africa."
      },
      {
        title: "The Mission",
        p1: "To research and mathematically prove that integrating broad renewable energy resources—including wind, solar, and battery storage—across the Somali coastline and the wider Horn of Africa region is a highly profitable economic necessity designed to displace the region's cripplingly expensive fossil fuel baseload.",
        p2: "The Somali Energy Desk serves as a live, sophisticated portfolio proving the capacity to execute end-to-end research—from OpenFOAM micro-siting to Levelized Cost of Energy (LCOE) calculations. Over time, this digital asset scales to support international energy developers, NGOs, and infrastructure funds looking to enter the East African market."
      }
    ]
  };

  try {
    if (fs.existsSync(aboutPath)) {
      aboutData = JSON.parse(fs.readFileSync(aboutPath, 'utf8'));
    }
  } catch (e) {}

  return (
    <div className="px-8 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 md:gap-24">

          {/* Left: Image & ID */}
          <div className="flex flex-col">
            <div className="w-full aspect-[3/4] relative mb-6">
              <Image
                src={aboutData.image}
                alt="Lead Analyst"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Title block moved below the image, styling updated, border removed */}
            <div className="pt-2">
              <h1 className="font-sans font-black tracking-tighter text-xl uppercase mb-1 leading-tight">
                {aboutData.profile_title_1}<br />
                {aboutData.profile_title_2 && <>{aboutData.profile_title_2}</>}
              </h1>
              <p className="font-sans text-sm text-slate-gray font-medium">
                {aboutData.profile_subtitle}
              </p>
            </div>
          </div>

          {/* Right: Profile */}
          <div className="flex flex-col justify-start">
            {aboutData.sections.map((sec, idx) => (
              <div key={idx} className="mb-14">
                <h2 className="font-sans text-xs text-safety font-bold tracking-widest uppercase mb-4">
                  {sec.title}
                </h2>
                <p className="text-lg font-medium leading-relaxed text-onyx">
                  {sec.p1}
                </p>
                {sec.p2 && (
                  <p className="text-sm text-slate-gray mt-6 leading-relaxed">
                    {sec.p2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
