import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <div style={{ padding: "40px", fontSize: "24px" }}>
        🚀 Your app is working!
      </div>
    );
  },
});
