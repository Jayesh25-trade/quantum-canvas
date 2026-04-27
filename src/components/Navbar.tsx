import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed left-0 right-0 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:top-4 sm:px-5 sm:py-3 md:top-6 md:px-7 ${
          scrolled ? "glass-strong" : "glass"
        }`}
        style={{ width: "calc(100% - 1.5rem)" }}
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

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="relative overflow-hidden rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white sm:px-4 sm:py-2 sm:text-xs"
            style={{ background: "linear-gradient(135deg, var(--neon-purple), var(--neon-blue))" }}
          >
            Hire Me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full glass md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setOpen(false)}
          >
            <div
              className="absolute inset-0 backdrop-blur-xl"
              style={{ background: "oklch(0.14 0.04 265 / 0.85)" }}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col items-center justify-center gap-3 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="text-4xl font-bold tracking-tight text-foreground transition-colors hover:text-neon-cyan"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 rounded-full px-7 py-3 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, var(--neon-purple), var(--neon-blue))" }}
              >
                Hire Me
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
