import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import RecentPosts from "./components/RecentPosts";
import AboutSection from "./components/AboutSection";
import FormContato from "./components/FormContato";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection />
      <RecentPosts />
      <AboutSection />
      <FormContato />
    </main>
  );
}

