import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ourprocess")({
  beforeLoad: () => {
    throw redirect({ to: "/our-process" });
  },
});
