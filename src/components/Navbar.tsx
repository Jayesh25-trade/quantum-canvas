import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed left-0 right-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:top-6 md:px-7 ${
        scrolled ? "glass-strong" : "glass"
      }`}
      style={{ width: "calc(100% - 2rem)" }}
    >
      <a href="#top" className="group flex items-center gap-2">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--neon-purple), var(--neon-blue))" }}
        >
          JM
        </div>
        <span className="hidden text-sm font-semibold tracking-wide sm:inline">Jayesh Mal</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="relative overflow-hidden rounded-full px-4 py-2 text-xs font-semibold text-white"
        style={{ background: "linear-gradient(135deg, var(--neon-purple), var(--neon-blue))" }}
      >
        Hire Me
      </a>
    </motion.header>
  );
}
