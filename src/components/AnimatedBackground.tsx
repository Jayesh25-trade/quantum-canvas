export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -left-32 top-20 h-[500px] w-[500px] animate-blob rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--neon-purple)" }}
      />
      <div
        className="absolute right-0 top-1/3 h-[600px] w-[600px] animate-blob rounded-full opacity-30 blur-[140px]"
        style={{ background: "var(--neon-blue)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[450px] w-[450px] animate-blob rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--neon-cyan)", animationDelay: "-12s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.01 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 260) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
}
