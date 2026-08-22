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
  image?: string;
  lang?: string;
  category: string;
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  readTime: string;
};

export function calculateReadingTime(text: string, lang: 'pt' | 'en' = 'pt'): string {
  const wordsPerMinute = 200;
  const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/[#*`_~[\]()-]/g, ' ');
  const words = cleanText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  
  if (lang === 'pt') {
    return `${minutes} min de leitura`;
  }
  return `${minutes} min read`;
}

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

  const defaultCategory = lang === 'pt' ? 'Geral' : 'General';
  const defaultAuthor = 'Gabriel Soares';
  const defaultRole = 'GS Edge Team';
  const readTime = calculateReadingTime(content, lang);

  return {
    slug: cleanSlug,
    title: data.title || 'Sem título',
    date: data.date || '',
    excerpt: data.excerpt || '',
    content,
    image: data.image || data.coverImage || undefined,
    lang,
    category: data.category || defaultCategory,
    author: data.author || defaultAuthor,
    authorRole: data.authorRole || defaultRole,
    authorAvatar: data.authorAvatar || undefined,
    readTime: data.readTime || readTime,
  };
}

export function getAllPosts(lang: 'pt' | 'en' = 'pt', category?: string): BlogPost[] {
  const slugs = getPostSlugs();
  let posts = slugs
    .map((slug) => getPostBySlug(slug, lang))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  if (category && category !== 'all' && category !== 'Todos' && category !== 'All') {
    posts = posts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }

  return posts;
}

export function getAllCategories(lang: 'pt' | 'en' = 'pt'): string[] {
  const posts = getAllPosts(lang);
  const categoriesSet = new Set<string>();
  posts.forEach((post) => {
    if (post.category) {
      categoriesSet.add(post.category);
    }
  });
  return Array.from(categoriesSet);
}

export function getRelatedPosts(currentSlug: string, category: string, lang: 'pt' | 'en' = 'pt', limit = 2): BlogPost[] {
  const all = getAllPosts(lang);
  const filtered = all.filter((p) => p.slug !== currentSlug);
  
  // Prefer same category first
  const sameCategory = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  const otherCategory = filtered.filter((p) => p.category.toLowerCase() !== category.toLowerCase());
  
  return [...sameCategory, ...otherCategory].slice(0, limit);
}

