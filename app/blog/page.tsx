import { getAllPosts } from '@/lib/blog';
import BlogIndex from '../components/BlogIndex';

export default function BlogIndexPage() {
  const initialPosts = getAllPosts('pt');

  return <BlogIndex initialPosts={initialPosts} />;
}

