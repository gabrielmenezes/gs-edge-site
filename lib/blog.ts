import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  lang?: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(postsDirectory);
  const baseSlugs = new Set<string>();

  files.forEach((file) => {
    if (file.endsWith('.md')) {
      // Remove .pt.md, .en.md or .md extension to get base slug
      const baseSlug = file.replace(/\.(pt|en)\.md$/, '').replace(/\.md$/, '');
      baseSlugs.add(baseSlug);
    }
  });

  return Array.from(baseSlugs);
}

export function getPostBySlug(slug: string, lang: 'pt' | 'en' = 'pt'): BlogPost | null {
  const cleanSlug = slug.replace(/\.(pt|en)\.md$/, '').replace(/\.md$/, '');
  
  // File candidates in order of preference for the requested language
  const candidateFiles = [
    path.join(postsDirectory, `${cleanSlug}.${lang}.md`),
    path.join(postsDirectory, `${cleanSlug}.pt.md`),
    path.join(postsDirectory, `${cleanSlug}.en.md`),
    path.join(postsDirectory, `${cleanSlug}.md`),
  ];

  let targetFilePath: string | null = null;
  for (const filePath of candidateFiles) {
    if (fs.existsSync(filePath)) {
      targetFilePath = filePath;
      break;
    }
  }

  if (!targetFilePath) {
    return null;
  }

  const fileContents = fs.readFileSync(targetFilePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: cleanSlug,
    title: data.title || 'Sem título',
    date: data.date || '',
    excerpt: data.excerpt || '',
    content,
    lang,
  };
}

export function getAllPosts(lang: 'pt' | 'en' = 'pt'): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, lang))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

