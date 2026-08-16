import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { SkillCard } from "@/components/site/primitives";
import { CATEGORIES, SKILLS } from "@/data/skills";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/skills")({
  head: () => {
    const title = "All Skills — Graphic Design & Web Development | SkillVerse";
    const description =
      "Browse all 11 SkillVerse learning paths: Photoshop, Illustrator, Premiere Pro, After Effects, Audition, Audacity, HTML, CSS, Bootstrap, Tailwind CSS and JavaScript.";
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
  component: AllSkills,
});

function AllSkills() {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SKILLS.filter((s) => cat === "all" || s.category === cat).filter(
      (s) =>
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.nameBn.includes(q) ||
        s.topics.some((topicName) => topicName.toLowerCase().includes(q)),
    );
  }, [query, cat]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">
        {t({ en: "All Skills", bn: "সব স্কিল" })}
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        {t({
          en: "Search by software name or by any topic inside it — everything is already written and offline-ready.",
          bn: "সফটওয়্যারের নাম বা ভেতরের যেকোনো টপিক দিয়ে খুঁজুন — সব লেখা আছে, অফলাইনেও পড়া যাবে।",
        })}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <label className="glass flex flex-1 items-center gap-3 rounded-2xl px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t({ en: "Search skills and topics…", bn: "স্কিল ও টপিক খুঁজুন…" })}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {[{ slug: "all", label: t({ en: "All", bn: "সব" }) }, ...CATEGORIES.map((c) => ({ slug: c.slug, label: `${c.icon} ${t(c.name)}` }))].map(
            (c) => (
              <button
                key={c.slug}
                onClick={() => setCat(c.slug)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  cat === c.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((s, i) => (
          <SkillCard key={s.slug} skill={s} index={i} />
        ))}
      </div>

      {results.length === 0 && (
        <p className="mt-10 text-sm text-muted-foreground">
          {t({ en: "Nothing matched that search.", bn: "এই সার্চে কিছু পাওয়া যায়নি।" })}
        </p>
      )}
    </div>
  );
}
