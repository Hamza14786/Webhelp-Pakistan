import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { LeadershipProfilePage, profiles } from "./team.$slug";

const profileAliases: Record<string, string> = {
  "Muhammad-Bilal": "muhammad-bilal-raja",
  Hamza: "hamza-malik",
};

const legacyProfileUrls: Record<string, string> = {
  "muhammad-bilal-raja": "Muhammad-Bilal",
  "hamza-malik": "Hamza",
};

export const Route = createFileRoute("/$slug")({
  beforeLoad: ({ params }) => {
    const newSlug = legacyProfileUrls[params.slug];
    if (newSlug) {
      throw redirect({ to: "/$slug", params: { slug: newSlug }, statusCode: 301 });
    }
    if (!profiles[profileAliases[params.slug] ?? params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const profile = profiles[profileAliases[params.slug] ?? params.slug];
    return profile
      ? {
          meta: [
            { title: `${profile.name} | WebHelp Pakistan` },
            { name: "description", content: profile.intro },
          ],
          links: [{ rel: "canonical", href: `https://webhelp.pk/${params.slug}/` }],
        }
      : {};
  },
  component: () => {
    const { slug } = Route.useParams();
    return <LeadershipProfilePage slug={profileAliases[slug] ?? slug} />;
  },
});
