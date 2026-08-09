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

  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-4 uppercase">{data.title}</h1>
        <div className="flex items-center gap-4 text-xs font-mono font-bold tracking-widest text-slate-dim uppercase">
          <span>{data.date}</span>
          <span>&bull;</span>
          <span className="text-safety">{data.category}</span>
        </div>
      </header>
      
      <MDXRemote source={content} />
    </>
  );
}
