const fs = require('fs');
const path = require('path');

const briefsDir = path.join(process.cwd(), 'src/app/briefs');
const folders = fs.readdirSync(briefsDir);

const briefs = folders.map(folder => {
  const mdxPath = path.join(briefsDir, folder, 'page.mdx');
  if (!fs.existsSync(mdxPath)) return null;
  
  const content = fs.readFileSync(mdxPath, 'utf8');
  
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : folder;
  
  const dateMatch = content.match(/\*\*Published:\*\*\s*([^\s|]+)/);
  const date = dateMatch ? dateMatch[1] : '';
  
  return { slug: folder, title, date };
}).filter(Boolean);

console.log(briefs);
