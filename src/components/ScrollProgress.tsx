import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))",
      }}
    />
  );
}
