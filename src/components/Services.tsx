import { motion } from "framer-motion";
import { Code2, Layout, Smartphone, Workflow, Database, Sparkles } from "lucide-react";
import { SectionHeader } from "./ValueSection";

const services = [
  { icon: Layout, title: "Landing Pages", desc: "High-converting sites that turn visitors into customers." },
  { icon: Code2, title: "Web Applications", desc: "Custom dashboards, portals, and SaaS platforms." },
  { icon: Smartphone, title: "Mobile-first Design", desc: "Responsive, fast, and beautiful on every device." },
  { icon: Workflow, title: "Automation", desc: "Internal tools and workflows that save real hours." },
  { icon: Database, title: "Backend & APIs", desc: "Scalable architectures with auth, payments, and data." },
  { icon: Sparkles, title: "AI Integrations", desc: "LLM-powered features baked into your product." },
];

export function Services() {
  return (
    <section id="services" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Services" title={<>Everything you need to <span className="gradient-text">ship</span>.</>} />
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              data-cursor="hover"
              className="group gradient-border relative overflow-hidden rounded-2xl p-6 transition-all duration-500"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(400px circle at 50% 0%, var(--neon-purple) / 0.15, transparent 70%)" }} />
              <div className="relative">
                <s.icon className="mb-5 h-6 w-6 text-neon-cyan transition-colors group-hover:text-neon-purple" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
