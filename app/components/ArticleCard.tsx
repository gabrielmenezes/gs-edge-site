import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostSummary } from '@/lib/blog';
import { formatPostDate } from '@/lib/post-format';

export default function ArticleCard({ post, featured = false }: { post: BlogPostSummary; featured?: boolean }) {
  return (
    <article className={featured ? 'editorial-card editorial-featured' : 'editorial-card'}>
      {post.image && (
        <Link href={`/blog/${post.slug}`} className="editorial-card-image" aria-label={`Ler ${post.title}`}>
          <Image src={post.image} alt="" fill sizes={featured ? '(max-width: 640px) calc(100vw - 40px), 55vw' : '(max-width: 640px) calc(100vw - 40px), 45vw'} priority={featured} />
        </Link>
      )}
      <div className="editorial-card-copy">
        <p className="eyebrow">{post.category}</p>
        <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
        <p className="editorial-excerpt">{post.excerpt}</p>
        <div className="editorial-card-meta"><time dateTime={post.date}>{formatPostDate(post.date)}</time><span>{post.readTime}</span></div>
        <Link href={`/blog/${post.slug}`} className="text-link">Ler artigo <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
