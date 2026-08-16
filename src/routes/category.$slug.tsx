import { createFileRoute, notFound } from "@tanstack/react-router";

import { LevelLadder, Reveal, SkillCard } from "@/components/site/primitives";
import { getCategory, skillsByCategory } from "@/data/skills";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, skills: skillsByCategory(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category not found — SkillVerse" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.name.en} Skills — 7 Level Library | SkillVerse`;
    const description = `${loaderData.category.description.en} Explore ${loaderData.skills.length} complete learning paths with roadmaps, notes and cheat sheets.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, skills } = Route.useLoaderData();
  const { t } = useLang();

  return (
    <div>
      <div className="hero-aura border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{t(category.name)}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t(category.description)}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_20rem]">
        <div>
          <h2 className="font-display text-2xl font-semibold">
            {skills.length} {t({ en: "complete learning paths", bn: "সম্পূর্ণ লার্নিং পাথ" })}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {skills.map((s, i) => (
              <SkillCard key={s.slug} skill={s} index={i} />
            ))}
          </div>
        </div>

        <aside>
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-semibold">
                {t({ en: "The 7 Levels", bn: "৭টি লেভেল" })}
              </h3>
              <div className="mt-4">
                <LevelLadder compact />
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
