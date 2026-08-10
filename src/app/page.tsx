import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import ScrollLink from "../components/ScrollLink";

export default function Home() {
  const briefsDir = path.join(process.cwd(), 'content/briefs');
  let briefs: any[] = [];
  if (fs.existsSync(briefsDir)) {
    const files = fs.readdirSync(briefsDir);
    briefs = files.filter(f => f.endsWith('.mdx')).map(file => {
      const mdxPath = path.join(briefsDir, file);
      const fileContent = fs.readFileSync(mdxPath, 'utf8');
      const { data, content } = matter(fileContent);
      
      const slug = file.replace(/\.mdx$/, '');
      const title = data.title || slug;
      let date = '';
      if (data.date) {
        try {
          date = new Date(data.date).toISOString().split('T')[0];
        } catch(e) {
          date = String(data.date);
        }
      }
      const category = data.category || 'RESEARCH';
      
      if (data.is_draft || data.is_hidden) {
        return null;
      }
      
      // Clean up markdown boilerplate to extract a pure text excerpt
      let cleanContent = content.replace(/^#+\s+.*$/gm, '');
      cleanContent = cleanContent.replace(/^\*\*.*$/gm, '');
      cleanContent = cleanContent.replace(/^---+$/gm, '');
      cleanContent = cleanContent.replace(/[#*`_\[\]>]/g, '');
      cleanContent = cleanContent.trim().replace(/\s+/g, ' ');
      
      let excerpt = cleanContent;
      if (cleanContent.length > 100) {
        const nextSpace = cleanContent.indexOf(' ', 100);
        if (nextSpace === -1) {
          excerpt = cleanContent;
        } else {
          excerpt = cleanContent.substring(0, nextSpace) + '...';
        }
      }

      return { slug, title, date, category, excerpt };
    }).filter(Boolean);
    
    // Sort descending
    briefs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="px-8 py-24 md:py-32 w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 overflow-hidden">
        
        {/* Left: Text Content */}
        <div className="w-full max-w-5xl shrink-0 lg:w-auto z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
            QUANTIFYING <br />
            <span className="text-slate-gray">THE HORN&apos;S</span> <br />
            ENERGY TRANSITION.
          </h1>
          <p className="max-w-2xl text-lg text-slate-dim font-medium leading-relaxed mb-12">
            Rigorous, data-driven engineering and economic analysis of renewable energy feasibility in the Somali Indian Ocean coastline and the broader Horn of Africa region. Independent research for developers, academia, and policy architects.
          </p>
          <div className="flex gap-4">
            <ScrollLink href="/#research" className="px-6 py-3 bg-onyx text-crisp font-bold tracking-widest text-xs hover:bg-safety transition-colors uppercase">
              View Latest Research
            </ScrollLink>
          </div>
        </div>

        {/* Right: Embedded SVG Logo v3 */}
        <div className="hidden lg:flex flex-1 justify-end items-center w-full max-w-[600px] xl:max-w-[750px] pr-8 -mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 280" className="w-full h-auto">
            <defs>
              <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#111111" />
                <stop offset="100%" stopColor="#2D2D2D" />
              </linearGradient>
              <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF5A00" />
                <stop offset="100%" stopColor="#E04800" />
              </linearGradient>
            </defs>

            <g transform="translate(60, 50)">
              <g transform="translate(0, 20)">
                <polygon points="0,0 90,0 120,30 30,30" fill="url(#bladeGrad)" />
                <polygon points="30,45 150,45 180,75 60,75" fill="url(#accentGrad)" />
                <polygon points="60,90 120,90 150,120 90,120" fill="url(#bladeGrad)" />
              </g>

              <text x="240" y="100" fontFamily="'Inter', 'Helvetica Neue', 'Arial', sans-serif" fontWeight="900" fontSize="110" fill="#111111" letterSpacing="-4">
                SED
              </text>

              <text x="245" y="150" fontFamily="'Inter', 'Helvetica Neue', sans-serif" fontWeight="600" fontSize="28" fill="#555555" letterSpacing="4" style={{ textTransform: 'uppercase' }}>
                Somali Energy Desk
              </text>
              
              <line x1="245" y1="180" x2="680" y2="180" stroke="#CCCCCC" strokeWidth="3" />
            </g>
          </svg>
        </div>
      </section>

      {/* Latest Research Feed */}
      <section id="research" className="px-8 py-24 border-t border-hairline flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-gray">Latest Research</h2>
          </div>

          {briefs.length === 0 ? (
            <div className="py-16">
              <p className="text-sm text-slate-dim font-mono">
                Research briefs will appear here as they are published.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {briefs.slice(0, 4).map((brief) => (
                  <a key={brief.slug} href={`/briefs/${brief.slug}`} className="group flex flex-col justify-between block p-10 bg-white border border-slate-light hover:border-safety transition-colors shadow-sm hover:shadow-md">
                    <div>
                      <span className="font-mono text-[10px] text-safety font-bold tracking-widest uppercase mb-4 block">
                        {brief.category} — {brief.date ? brief.date.split(' ')[0] : 'DRAFT'}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black font-sans tracking-tight mb-4 group-hover:text-safety transition-colors leading-tight">
                        {brief.title}
                      </h3>
                      <p className="text-sm text-slate-gray font-medium leading-relaxed">
                        {brief.excerpt}
                      </p>
                    </div>
                    <div className="mt-8 font-mono text-xs font-bold tracking-widest uppercase text-slate-dim group-hover:text-onyx transition-colors">
                      Read Brief &rarr;
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="flex justify-start">
                <Link href="/briefs" className="font-mono text-sm font-bold tracking-widest uppercase text-onyx hover:text-safety transition-colors border-b border-transparent hover:border-safety pb-1">
                  Read more &rarr;
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
