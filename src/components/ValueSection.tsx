import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { Palette, Briefcase, Zap, Rocket } from "lucide-react";

const values = [
  { icon: Palette, title: "Modern UI/UX", desc: "Pixel-perfect interfaces with motion that delights every user.", hue: "var(--neon-purple)" },
  { icon: Briefcase, title: "Business-focused", desc: "Solutions engineered to drive revenue, retention, and growth.", hue: "var(--neon-blue)" },
  { icon: Zap, title: "Automation Tools", desc: "Custom workflows that save hours and remove repetitive work.", hue: "var(--neon-cyan)" },
  { icon: Rocket, title: "High-performance", desc: "Apps that load instantly and scale gracefully under load.", hue: "var(--neon-pink)" },
];

export function ValueSection() {
  return (
    <section className="relative px-5 py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="What I do" title={<>Built for <span className="gradient-text">impact</span>, not just looks.</>} />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon: Icon, title, desc, hue, index }: typeof values[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const tx = useTransform(srx, (v) => `${v}deg`);
  const ty = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 14);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: tx, rotateY: ty, transformStyle: "preserve-3d" }}
        className="group gradient-border relative h-full overflow-hidden rounded-3xl p-6 transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_var(--tw-shadow-color)]"
        data-cursor="hover"
      >
        <div
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: hue }}
        />
        <div className="relative">
          <div
            className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ background: `${hue.replace(")", " / 0.15)")}`, color: hue }}
          >
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 inline-block rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[11px]"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
