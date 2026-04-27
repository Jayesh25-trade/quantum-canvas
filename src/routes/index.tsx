import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueSection } from "@/components/ValueSection";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jayesh Mal — Full-Stack Developer & Digital Product Builder" },
      {
        name: "description",
        content:
          "I build next-generation websites and web apps that are fast, scalable, and designed to convert. Full-stack developer specializing in React, Next.js, and modern SaaS products.",
      },
      { property: "og:title", content: "Jayesh Mal — Full-Stack Developer" },
      { property: "og:description", content: "Fast, scalable web apps designed to convert. View selected work and get in touch." },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <ValueSection />
      <FeaturedProject />
      <ProjectsGrid />
      <Services />
      <TechStack />
      <Contact />
    </main>
  );
}
