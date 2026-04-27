import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./ValueSection";
import food from "@/assets/project-fooddzz.jpg";
import fuel from "@/assets/project-fuel.jpg";
import pdf from "@/assets/project-pdf.jpg";
import dowry from "@/assets/project-dowry.jpg";

const projects = [
  { title: "Jimmyy Fooddzz", tag: "Food Delivery", url: "https://jimmyy-fooddzz.vercel.app/", img: food, hue: "var(--neon-pink)" },
  { title: "Parth Fuel Corporation", tag: "Corporate Site", url: "https://parthfuelcorporation.vercel.app/", img: fuel, hue: "var(--neon-blue)" },
  { title: "Formomatic PDF Pro", tag: "SaaS Tool", url: "https://formomatic-pdf-pro.vercel.app/", img: pdf, hue: "var(--neon-purple)" },
  { title: "Dowry 181", tag: "Awareness Platform", url: "https://dowry181.vercel.app/", img: dowry, hue: "var(--neon-cyan)" },
];

export function ProjectsGrid() {
  return (
    <section id="work" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Selected Work" title={<>Real products. <span className="gradient-text">Real users.</span></>} />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, tag, url, img, hue, index }: typeof projects[0] & { index: number }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group gradient-border relative block overflow-hidden rounded-3xl"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-50"
        style={{ background: hue }}
      />
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={`${title} project preview`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="p-6 text-sm text-foreground/90">
            Visit live →
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-between p-6">
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{tag}</div>
          <div className="mt-1.5 text-xl font-semibold">{title}</div>
        </div>
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full glass transition-transform duration-500 group-hover:rotate-45"
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
}
