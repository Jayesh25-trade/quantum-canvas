import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import smartbill from "@/assets/project-smartbill.jpg";

export function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <section ref={ref} className="relative px-5 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <div className="mb-3 inline-block rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Featured Case Study
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Maheshwari <span className="gradient-text">Smart Bill</span>
            </h2>
          </div>
          <a
            href="https://maheshwari-smart-bill.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            Visit live site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10"
          style={{ boxShadow: "var(--shadow-glow-purple)" }}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <motion.img
              src={smartbill}
              alt="Maheshwari Smart Bill invoicing dashboard"
              loading="lazy"
              width={1280}
              height={800}
              className="h-full w-full object-cover"
              style={{ y, scale }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          <div className="grid gap-6 p-8 md:grid-cols-3 md:p-12">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                A complete <span className="text-foreground">smart billing & invoicing platform</span> built for
                modern businesses. GST-ready, lightning-fast, with delightful UX and real-time analytics that turn
                numbers into decisions.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
              <Stat label="Load time" value="< 1s" />
              <Stat label="Lighthouse" value="98" />
              <Stat label="Stack" value="Next.js" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl glass p-4">
      <div className="text-2xl font-bold gradient-text">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
