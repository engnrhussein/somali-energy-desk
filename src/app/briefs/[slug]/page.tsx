import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const briefsDirectory = path.join(process.cwd(), 'content/briefs');
  if (!fs.existsSync(briefsDirectory)) return [];
  const files = fs.readdirSync(briefsDirectory);
  return files
    .filter(file => {
      if (!file.endsWith('.mdx')) return false;
      const fileContent = fs.readFileSync(path.join(briefsDirectory, file), 'utf8');
      const { data } = matter(fileContent);
      return !data.is_draft && !data.is_hidden;
    })
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
  if (data.is_draft || data.is_hidden) {
    return { title: 'Not Found' };
  }
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
  
  if (data.is_draft || data.is_hidden) {
    notFound();
  }

  let dateString = '';
  if (data.date) {
    try {
      dateString = new Date(data.date).toISOString().split('T')[0];
    } catch(e) {
      dateString = String(data.date);
    }
  }

  return (
    <>
      <header className="mb-4">
        <h1 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight mb-4 uppercase">{data.title}</h1>
        <div className="flex items-center gap-4 text-xs font-mono font-bold tracking-widest text-slate-dim uppercase">
          <span>{dateString}</span>
          <span>&bull;</span>
          <span className="text-safety">{data.category}</span>
        </div>
      </header>
      
      <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </>
  );
}
