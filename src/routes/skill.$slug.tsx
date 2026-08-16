import { createFileRoute, notFound } from "@tanstack/react-router";

import { SkillPage } from "@/components/site/SkillPage";
import { getSkill } from "@/data/skills";

export const Route = createFileRoute("/skill/$slug")({
  loader: ({ params }) => {
    const skill = getSkill(params.slug);
    if (!skill) throw notFound();
    return { skill };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Skill not found — SkillVerse" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { skill } = loaderData;
    const title = `${skill.name} — Complete Learning Path | SkillVerse`;
    const description = `Learn ${skill.name} from absolute beginner to expert: roadmap, ${skill.topics.length} topics, cheat sheet, shortcuts, workflow and fast revision — bilingual (English/বাংলা).`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SkillRoute,
});

function SkillRoute() {
  const { skill } = Route.useLoaderData();
  return <SkillPage skill={skill} />;
}
