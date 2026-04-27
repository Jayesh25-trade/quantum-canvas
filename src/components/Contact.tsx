import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const EMAIL = "jayeshneo07@gmail.com";
const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Jayesh%2C%20I%20saw%20your%20portfolio%20and%20I%20am%20interested%20in%20your%20services";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your portfolio"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-5 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] glass-strong p-8 md:p-14"
          style={{ boxShadow: "var(--shadow-glow-purple)" }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-50 blur-[100px]"
            style={{ background: "var(--neon-purple)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full opacity-40 blur-[100px]"
            style={{ background: "var(--neon-blue)" }}
          />

          <div className="relative grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-3 inline-block rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Get in touch
              </div>
              <h2 className="text-balance text-4xl font-bold leading-[1.05] md:text-5xl">
                Let's build something <span className="gradient-text">powerful</span>.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Have an idea, a product, or a problem worth solving? Drop a message — I usually reply within a few hours.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  data-cursor="hover"
                  className="group flex items-center gap-3 rounded-2xl glass p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "var(--neon-purple)", boxShadow: "0 0 20px var(--neon-purple)" }}>
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium">{EMAIL}</div>
                  </div>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="group flex items-center gap-3 rounded-2xl glass p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "var(--neon-cyan)", boxShadow: "0 0 20px var(--neon-cyan)" }}>
                    <MessageCircle className="h-4 w-4 text-background" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">WhatsApp</div>
                    <div className="text-sm font-medium">Chat with me</div>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
              <MagneticButton onClick={() => handleSubmit(new Event("submit") as unknown as React.FormEvent)}>
                Send message <Send className="h-4 w-4" />
              </MagneticButton>
            </form>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Jayesh Mal. Crafted with care.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
            Available worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <label
        className={`pointer-events-none absolute left-4 transition-all duration-300 ${
          active ? "top-2 text-[10px] uppercase tracking-[0.2em] text-neon-cyan" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 pb-3 pt-7 text-sm outline-none transition-all duration-300 focus:border-neon-purple/60 focus:bg-white/10 focus:shadow-[0_0_30px_oklch(0.65_0.28_305/0.2)]"
        />
      ) : (
        <input
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full rounded-2xl border border-white/10 bg-white/5 px-4 pb-2 pt-6 text-sm outline-none transition-all duration-300 focus:border-neon-purple/60 focus:bg-white/10 focus:shadow-[0_0_30px_oklch(0.65_0.28_305/0.2)]"
        />
      )}
    </div>
  );
}
