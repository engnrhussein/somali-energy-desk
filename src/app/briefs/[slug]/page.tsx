import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const briefsDirectory = path.join(process.cwd(), 'content/briefs');
  if (!fs.existsSync(briefsDirectory)) return [];
  const files = fs.readdirSync(briefsDirectory);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/briefs', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return { title: 'Not Found' };
  }
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  return {
    title: data.title,
  };
}

export default async function BriefPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/briefs', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  let dateString = '';
  if (data.date) {
    try {
      dateString = new Date(data.date).toISOString().split('T')[0];
    } catch(e) {
      dateString = String(data.date);
    }
  }

  return (
    <article className="w-full px-8 py-12 md:px-16 md:py-16">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-4 uppercase">{data.title}</h1>
        <div className="flex items-center gap-4 text-xs font-mono font-bold tracking-widest text-slate-dim uppercase">
          <span>{dateString}</span>
          <span>&bull;</span>
          <span className="text-safety">{data.category}</span>
        </div>
      </header>
      
      <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-a:text-safety hover:prose-a:text-onyx prose-a:transition-colors prose-img:rounded-sm prose-img:shadow-sm prose-table:w-full prose-th:bg-slate-50 prose-th:p-4 prose-td:p-4 prose-td:border-b prose-td:border-slate-100">
        <MDXRemote source={content} />
      </div>
      
      <div className="mt-16 pt-8 border-t border-hairline">
        <a href="/#research" className="text-xs font-mono font-bold tracking-widest uppercase text-slate-dim hover:text-safety transition-colors">
          &larr; Back to Research Feed
        </a>
      </div>
    </article>
  );
}
