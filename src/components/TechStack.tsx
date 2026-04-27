import { motion } from "framer-motion";
import { SectionHeader } from "./ValueSection";

const stack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Supabase", "Framer Motion", "Vite", "Prisma",
  "GraphQL", "Redis", "Docker", "AWS", "Vercel", "Stripe",
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Tech Stack" title={<>Tools I <span className="gradient-text">love</span> to build with.</>} />
      </div>
      <div className="relative mt-10 overflow-hidden sm:mt-16">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32"
          style={{ background: "linear-gradient(90deg, var(--background), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32"
          style={{ background: "linear-gradient(-90deg, var(--background), transparent)" }}
        />
        <div className="flex w-max animate-marquee gap-3 sm:gap-4">
          {[...stack, ...stack].map((s, i) => (
            <div
              key={i}
              className="group flex shrink-0 items-center gap-2.5 rounded-full glass px-4 py-2.5 transition-all hover:scale-110 sm:gap-3 sm:px-6 sm:py-3"
              style={{ minWidth: "fit-content" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full transition-shadow group-hover:shadow-[0_0_15px_var(--neon-cyan)] sm:h-2 sm:w-2"
                style={{ background: "var(--neon-cyan)" }}
              />
              <span className="text-xs font-medium sm:text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 sm:mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {[
            { v: "30+", l: "Projects shipped" },
            { v: "3+", l: "Years building" },
            { v: "100%", l: "Client focused" },
            { v: "24/7", l: "Communication" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl glass p-4 text-center sm:p-5">
              <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
