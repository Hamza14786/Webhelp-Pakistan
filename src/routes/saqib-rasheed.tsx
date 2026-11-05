import { createFileRoute, notFound } from "@tanstack/react-router";

import { LeadershipProfilePage, profiles } from "./team.$slug";

export const Route = createFileRoute("/saqib-rasheed")({
  beforeLoad: () => {
    if (!profiles["saqib-rasheed"]) throw notFound();
  },
  head: () => {
    const profile = profiles["saqib-rasheed"]!;
    return {
      meta: [
        { title: `${profile.name} | WebHelp Pakistan` },
        { name: "description", content: profile.intro },
      ],
      links: [{ rel: "canonical", href: "https://webhelp.pk/saqib-rasheed/" }],
    };
  },
  component: () => <LeadershipProfilePage slug="saqib-rasheed" />,
});
