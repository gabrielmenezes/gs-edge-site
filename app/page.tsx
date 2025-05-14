'use client'
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <About />
      <Services />
      <Contact />
      <FloatingWhatsApp />
    </motion.main>

  );
}
