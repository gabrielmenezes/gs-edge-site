import { getAllPosts } from '@/lib/blog';
import BlogIndex from '../components/BlogIndex';

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return <BlogIndex posts={posts} />;
}
