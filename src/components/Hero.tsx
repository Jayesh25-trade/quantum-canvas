import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const headline = ["I", "build", "next-generation", "websites", "&", "web", "apps"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const lx = useTransform(sx, (v) => v * 30);
  const ly = useTransform(sy, (v) => v * 30);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX - w / 2) / w);
      my.set((e.clientY - h / 2) / h);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-32 md:pt-40"
    >
      {/* Mouse-follow light */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[100px]"
        style={{
          x: lx,
          y: ly,
          background: "radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
          <span className="text-muted-foreground">Available for new projects</span>
          <Sparkles className="h-3 w-3 text-neon-cyan" />
        </motion.div>

        <h1 className="mx-auto max-w-5xl text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`mr-3 inline-block ${
                word === "next-generation" ? "gradient-text" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mx-auto mt-7 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Fast, scalable, and designed to convert. I'm Jayesh Mal — a full-stack developer crafting
          digital products that feel alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#work">
            View Work <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Floating preview cards */}
        <div className="pointer-events-none mt-20 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ x: useTransform(sx, (v) => v * -40), y: useTransform(sy, (v) => v * -20) }}
            className="absolute -left-4 top-1/3 w-56 rotate-[-8deg]"
          >
            <FloatCard label="Smart Bill" sub="Invoicing SaaS" hue="purple" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
            style={{ x: useTransform(sx, (v) => v * 40), y: useTransform(sy, (v) => v * 20) }}
            className="absolute -right-2 top-1/4 w-56 rotate-[6deg]"
          >
            <FloatCard label="Fooddzz" sub="Delivery App" hue="cyan" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 1 }}
            style={{ x: useTransform(sx, (v) => v * 20), y: useTransform(sy, (v) => v * -30) }}
            className="absolute -bottom-10 left-1/2 w-56 -translate-x-1/2 rotate-[-2deg]"
          >
            <FloatCard label="Formomatic" sub="PDF Pro" hue="pink" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground md:block"
      >
        scroll
      </motion.div>
    </section>
  );
}

function FloatCard({ label, sub, hue }: { label: string; sub: string; hue: "purple" | "cyan" | "pink" }) {
  const colors: Record<string, string> = {
    purple: "var(--neon-purple)",
    cyan: "var(--neon-cyan)",
    pink: "var(--neon-pink)",
  };
  return (
    <div className="glass-strong relative rounded-2xl p-4 shadow-2xl">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
      </div>
      <div
        className="mb-3 h-20 rounded-lg"
        style={{
          background: `linear-gradient(135deg, ${colors[hue]} 0%, transparent 100%)`,
          opacity: 0.5,
        }}
      />
      <div className="text-sm font-semibold">{label}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}
