import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BriefsListClient from "../../components/BriefsListClient";

export default function BriefsPage() {
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
      
      let cleanContent = content.replace(/^#+\s+.*$/gm, '');
      cleanContent = cleanContent.replace(/^\*\*.*$/gm, '');
      cleanContent = cleanContent.replace(/^---+$/gm, '');
      cleanContent = cleanContent.replace(/[#*`_\[\]>]/g, '');
      cleanContent = cleanContent.trim().replace(/\s+/g, ' ');
      
      let excerpt = cleanContent;
      if (cleanContent.length > 200) {
        const nextSpace = cleanContent.indexOf(' ', 200);
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
      <section className="px-8 py-24 md:py-32 w-full flex flex-col items-start overflow-hidden border-b border-hairline bg-white">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
          DATA <span className="text-slate-gray">BRIEFS</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-dim font-medium leading-relaxed">
          The complete archive of research, quantitative analysis, and meteorological assessments published by the Somali Energy Desk.
        </p>
      </section>

      <section className="px-8 py-16 flex-1 bg-white">
        <BriefsListClient briefs={briefs} />
      </section>
    </div>
  );
}
