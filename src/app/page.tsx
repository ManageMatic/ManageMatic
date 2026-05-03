import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen text-white">
      <ScrollyCanvas />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
      <SpeedInsights />
    </main>
  );
}

