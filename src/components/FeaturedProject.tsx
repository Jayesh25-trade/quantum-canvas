import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import smartbill from "@/assets/project-smartbill.jpg";

const URL = "https://maheshwari-smart-bill.vercel.app/";

export function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  const [hover, setHover] = useState(false);

  return (
    <section ref={ref} className="relative px-5 py-20 sm:py-28 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-6 md:mb-10"
        >
          <div>
            <div className="mb-3 inline-block rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[11px]">
              Featured Case Study
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Maheshwari <span className="gradient-text">Smart Bill</span>
            </h2>
          </div>
          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            Visit live site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>

        <motion.a
          href={URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Maheshwari Smart Bill in a new tab"
          data-cursor="hover"
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.99 }}
          className="group relative block overflow-hidden rounded-3xl border border-white/10 sm:rounded-[2rem]"
          style={{ boxShadow: "var(--shadow-glow-purple)" }}
        >
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
            <motion.img
              src={smartbill}
              alt="Maheshwari Smart Bill invoicing dashboard"
              loading="lazy"
              width={1280}
              height={800}
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out"
              style={{ y, scale }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

            {/* Hover spotlight */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(600px circle at 50% 50%, oklch(0.65 0.28 305 / 0.25), transparent 70%)",
              }}
            />

            {/* Live pill */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground sm:left-6 sm:top-6 sm:text-[11px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-cyan" />
              </span>
              Live Project
            </div>

            {/* Visit CTA pill (always visible on mobile, animates on hover desktop) */}
            <motion.div
              animate={{
                scale: hover ? 1.05 : 1,
              }}
              className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-[0_0_30px_oklch(0.65_0.28_305/0.6)] sm:right-6 sm:top-6 sm:text-sm"
              style={{ background: "linear-gradient(135deg, var(--neon-purple), var(--neon-blue))" }}
            >
              Open
              <ExternalLink className="h-3.5 w-3.5" />
            </motion.div>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-3 md:p-12">
            <div className="md:col-span-2">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                A complete <span className="text-foreground">smart billing & invoicing platform</span> built for
                modern businesses. GST-ready, lightning-fast, with delightful UX and real-time analytics that turn
                numbers into decisions.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-neon-cyan transition-transform group-hover:translate-x-1 sm:text-sm">
                Explore the live product
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-1 md:gap-4">
              <Stat label="Load time" value="< 1s" />
              <Stat label="Lighthouse" value="98" />
              <Stat label="Stack" value="Next.js" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl glass p-3 sm:p-4">
      <div className="text-lg font-bold gradient-text sm:text-2xl">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">{label}</div>
    </div>
  );
}
