import Hero from "./components/Hero";
import { getAllPosts } from "@/lib/blog";
import RecentPosts from "./components/RecentPosts";
import AboutSection from "./components/AboutSection";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="min-h-screen">
      <Hero />
      <RecentPosts posts={posts} />
      <AboutSection />
    </main>
  );
}
