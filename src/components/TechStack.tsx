import { motion } from "framer-motion";
import { SectionHeader } from "./ValueSection";

const stack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Supabase", "Framer Motion", "Vite", "Prisma",
  "GraphQL", "Redis", "Docker", "AWS", "Vercel", "Stripe",
];

export function TechStack() {
  return (
    <section id="stack" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Tech Stack" title={<>Tools I <span className="gradient-text">love</span> to build with.</>} />
      </div>
      <div className="relative mt-16 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{ background: "linear-gradient(90deg, var(--background), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{ background: "linear-gradient(-90deg, var(--background), transparent)" }}
        />
        <div className="flex w-max animate-marquee gap-4">
          {[...stack, ...stack].map((s, i) => (
            <div
              key={i}
              className="group flex shrink-0 items-center gap-3 rounded-full glass px-6 py-3 transition-all hover:scale-110"
              style={{ minWidth: "fit-content" }}
            >
              <span
                className="h-2 w-2 rounded-full transition-shadow group-hover:shadow-[0_0_15px_var(--neon-cyan)]"
                style={{ background: "var(--neon-cyan)" }}
              />
              <span className="text-sm font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { v: "30+", l: "Projects shipped" },
            { v: "3+", l: "Years building" },
            { v: "100%", l: "Client focused" },
            { v: "24/7", l: "Communication" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl glass p-5 text-center">
              <div className="text-3xl font-bold gradient-text">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
