import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { LEVELS } from "@/data/levels";
import { getCategory, neighbours, skillsByCategory, topicLevel, type Skill } from "@/data/skills";
import { buildTopicBlocks } from "@/data/topicTemplate";
import { useLang } from "@/lib/i18n";

import { Faqs, Flowchart, LevelLadder, ListCard, Reveal, SkillCard } from "./primitives";

const SECTIONS = [
  { id: "overview", en: "Overview", bn: "ওভারভিউ" },
  { id: "prerequisites", en: "Prerequisites", bn: "পূর্বশর্ত" },
  { id: "careers", en: "Career Opportunities", bn: "ক্যারিয়ার সুযোগ" },
  { id: "roadmap", en: "Roadmap", bn: "রোডম্যাপ" },
  { id: "flowchart", en: "Flowchart", bn: "ফ্লোচার্ট" },
  { id: "levels", en: "Learning Levels", bn: "লার্নিং লেভেল" },
  { id: "topics", en: "Complete Notes", bn: "সম্পূর্ণ নোট" },
  { id: "memorize", en: "Fast Memorize", bn: "ফাস্ট মেমোরাইজ" },
  { id: "cheatsheet", en: "Cheat Sheet", bn: "চিট শিট" },
  { id: "shortcuts", en: "Keyboard Shortcuts", bn: "কীবোর্ড শর্টকাট" },
  { id: "practices", en: "Best Practices & Mistakes", bn: "বেস্ট প্র্যাকটিস ও ভুল" },
  { id: "workflow", en: "Professional Workflow", bn: "প্রফেশনাল ওয়ার্কফ্লো" },
  { id: "faq", en: "FAQ", bn: "প্রশ্নোত্তর" },
  { id: "related", en: "Related Topics", bn: "সম্পর্কিত টপিক" },
];

function SectionShell({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border pt-10">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function TopicItem({ skill, topic, level }: { skill: Skill; topic: string; level: number }) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const blocks = buildTopicBlocks(lang === "bn" ? skill.nameBn : skill.name, topic, level);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left"
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/12 text-[11px] font-bold text-primary">
          L{level}
        </span>
        <span className="text-sm font-semibold">{topic}</span>
        <span className="ml-auto text-xs text-muted-foreground">
          {open ? t({ en: "Hide", bn: "লুকান" }) : t({ en: "13 blocks", bn: "১৩ ব্লক" })}
        </span>
      </button>
      {open && (
        <div className="grid gap-3 border-t border-border bg-surface-2 px-5 py-5 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.key} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {b.icon} {t(b.label)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(b.body)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SkillPage({ skill }: { skill: Skill }) {
  const { t, lang } = useLang();
  const { prev, next } = neighbours(skill.slug);
  const category = getCategory(skill.category)!;
  const related = skillsByCategory(skill.category).filter((s) => s.slug !== skill.slug);
  const name = lang === "bn" ? skill.nameBn : skill.name;

  return (
    <div>
      {/* Hero banner */}
      <div className="hero-aura border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              {t({ en: "Home", bn: "হোম" })}
            </Link>
            <span>/</span>
            <Link
              to="/category/$slug"
              params={{ slug: category.slug }}
              className="hover:text-foreground"
            >
              {t(category.name)}
            </Link>
            <span>/</span>
            <span className="text-foreground">{name}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-start gap-5">
            <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card text-3xl shadow-[var(--shadow-soft)]">
              {skill.icon}
            </span>
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {name}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{t(skill.tagline)}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { k: t({ en: "Estimated Time", bn: "আনুমানিক সময়" }), v: t(skill.time), i: "⏱️" },
              { k: t({ en: "Difficulty", bn: "কঠিনতা" }), v: t(skill.difficulty), i: "📈" },
              {
                k: t({ en: "Topics", bn: "টপিক" }),
                v: `${skill.topics.length} · 7 ${t({ en: "levels", bn: "লেভেল" })}`,
                i: "🧭",
              },
            ].map((m) => (
              <div key={m.k} className="glass rounded-2xl px-5 py-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {m.i} {m.k}
                </p>
                <p className="mt-1.5 text-sm font-semibold">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl gap-10 px-4 py-12 sm:px-6">
        {/* Sticky sidebar TOC */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin-soft rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t({ en: "Table of Contents", bn: "সূচিপত্র" })}
            </p>
            <ul className="mt-3 space-y-1">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {t({ en: s.en, bn: s.bn })}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="min-w-0 flex-1 space-y-12">
          <SectionShell id="overview" title={t({ en: "Overview", bn: "ওভারভিউ" })}>
            <p className="text-base leading-relaxed text-muted-foreground">{t(skill.overview)}</p>
          </SectionShell>

          <SectionShell id="prerequisites" title={t({ en: "Prerequisites", bn: "পূর্বশর্ত" })}>
            <div className="grid gap-3 sm:grid-cols-2">
              {skill.prerequisites.map((p, i) => (
                <div key={i} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">
                  ✔️ {t(p)}
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="careers" title={t({ en: "Career Opportunities", bn: "ক্যারিয়ার সুযোগ" })}>
            <div className="flex flex-wrap gap-2">
              {skill.careers.map((c, i) => (
                <span
                  key={i}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm text-foreground"
                >
                  {t(c)}
                </span>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="roadmap" title={t({ en: "Roadmap", bn: "রোডম্যাপ" })}>
            <ol className="space-y-3">
              {skill.roadmap.map((r, i) => (
                <Reveal key={i} delay={i * 40}>
                  <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{t(r)}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t(LEVELS[i]!.title)} · {t(LEVELS[i]!.focus)}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </SectionShell>

          <SectionShell id="flowchart" title={t({ en: "Flowchart", bn: "ফ্লোচার্ট" })}>
            <Flowchart steps={skill.workflow} />
          </SectionShell>

          <SectionShell id="levels" title={t({ en: "Learning Levels", bn: "লার্নিং লেভেল" })}>
            <LevelLadder />
          </SectionShell>

          <SectionShell
            id="topics"
            title={`${t({ en: "Complete Notes", bn: "সম্পূর্ণ নোট" })} — ${skill.topics.length} ${t({ en: "topics", bn: "টপিক" })}`}
          >
            <p className="mb-5 text-sm text-muted-foreground">
              {t({
                en: "Every topic follows the same 13-block structure: definition, purpose, why, when, how, examples, best practices, mistakes, tips, notes, summary and quick revision.",
                bn: "প্রতিটি টপিক একই ১৩-ব্লক স্ট্রাকচার অনুসরণ করে: সংজ্ঞা, উদ্দেশ্য, কেন, কখন, কীভাবে, উদাহরণ, বেস্ট প্র্যাকটিস, ভুল, টিপস, নোট, সারসংক্ষেপ ও দ্রুত রিভিশন।",
              })}
            </p>
            <div className="space-y-3">
              {skill.topics.map((topic, i) => (
                <TopicItem
                  key={topic}
                  skill={skill}
                  topic={topic}
                  level={topicLevel(i, skill.topics.length)}
                />
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="memorize"
            title={t({ en: "Fast Memorize Section", bn: "ফাস্ট মেমোরাইজ সেকশন" })}
          >
            <div className="space-y-4">
              <div className="rounded-2xl border border-primary/35 bg-primary/8 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  ⚡ 30 {t({ en: "Second Revision", bn: "সেকেন্ড রিভিশন" })}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{t(skill.revision.s30)}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <ListCard
                  icon="⏳"
                  title={`2 ${t({ en: "Minute Revision", bn: "মিনিট রিভিশন" })}`}
                  items={skill.revision.m2}
                  tone="good"
                />
                <ListCard
                  icon="📚"
                  title={`10 ${t({ en: "Minute Revision", bn: "মিনিট রিভিশন" })}`}
                  items={skill.revision.m10}
                />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-base font-semibold">
                  🧠 {t({ en: "Mind Map", bn: "মাইন্ড ম্যাপ" })}
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {skill.mindmap.map((b, i) => (
                    <div key={i} className="rounded-xl border border-dashed border-border p-4">
                      <p className="text-sm font-semibold text-primary">{t(b.branch)}</p>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                        {b.leaves.map((leaf) => (
                          <li key={leaf}>— {leaf}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionShell>

          <SectionShell
            id="cheatsheet"
            title={t({ en: "Cheat Sheet & One Page Revision", bn: "চিট শিট ও ওয়ান পেজ রিভিশন" })}
          >
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-border">
                  {skill.cheatsheet.map((c) => (
                    <tr key={c.label} className="bg-card">
                      <th className="w-40 px-5 py-3 align-top font-semibold">{c.label}</th>
                      <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                        {t(c.value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionShell>

          <SectionShell
            id="shortcuts"
            title={t({ en: "Keyboard Shortcuts", bn: "কীবোর্ড শর্টকাট" })}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {skill.shortcuts.map((s) => (
                <div
                  key={s.keys}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <kbd className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-xs">
                    {s.keys}
                  </kbd>
                  <span className="text-sm text-muted-foreground">{t(s.action)}</span>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="practices"
            title={t({ en: "Best Practices & Common Mistakes", bn: "বেস্ট প্র্যাকটিস ও সাধারণ ভুল" })}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <ListCard
                icon="✅"
                title={t({ en: "Best Practices", bn: "বেস্ট প্র্যাকটিস" })}
                items={skill.best}
                tone="good"
              />
              <ListCard
                icon="⚠️"
                title={t({ en: "Common Mistakes", bn: "সাধারণ ভুল" })}
                items={skill.mistakes}
                tone="warn"
              />
            </div>
          </SectionShell>

          <SectionShell
            id="workflow"
            title={t({ en: "Professional Workflow", bn: "প্রফেশনাল ওয়ার্কফ্লো" })}
          >
            <ol className="space-y-3">
              {skill.workflow.map((w, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-muted-foreground">{t(w)}</span>
                </li>
              ))}
            </ol>
          </SectionShell>

          <SectionShell id="faq" title={t({ en: "FAQ", bn: "প্রশ্নোত্তর" })}>
            <Faqs items={skill.faq} />
          </SectionShell>

          <SectionShell id="related" title={t({ en: "Related Topics", bn: "সম্পর্কিত টপিক" })}>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.slice(0, 4).map((s, i) => (
                <SkillCard key={s.slug} skill={s} index={i} />
              ))}
            </div>
          </SectionShell>

          {/* Prev / Next */}
          <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                to="/skill/$slug"
                params={{ slug: prev.slug }}
                className="card-soft p-5 text-left"
              >
                <p className="text-xs text-muted-foreground">← {t({ en: "Previous", bn: "পূর্ববর্তী" })}</p>
                <p className="mt-1 font-display font-semibold">
                  {prev.icon} {lang === "bn" ? prev.nameBn : prev.name}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                to="/skill/$slug"
                params={{ slug: next.slug }}
                className="card-soft p-5 text-right sm:col-start-2"
              >
                <p className="text-xs text-muted-foreground">{t({ en: "Next", bn: "পরবর্তী" })} →</p>
                <p className="mt-1 font-display font-semibold">
                  {lang === "bn" ? next.nameBn : next.name} {next.icon}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
