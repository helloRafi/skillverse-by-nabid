import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { useLang, type Loc } from "@/lib/i18n";
import { LEVELS } from "@/data/levels";
import type { Skill } from "@/data/skills";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Section shell ---------- */
export function Section({
  eyebrow,
  title,
  description,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

/* ---------- Skill card ---------- */
export function SkillCard({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const { t, lang } = useLang();
  return (
    <Reveal delay={index * 60}>
      <Link
        to="/skill/$slug"
        params={{ slug: skill.slug }}
        className="card-soft flex h-full flex-col p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-2xl">
            {skill.icon}
          </span>
          <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            {skill.topics.length} {t({ en: "topics", bn: "টপিক" })}
          </span>
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold">
          {lang === "bn" ? skill.nameBn : skill.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(skill.tagline)}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
          <span className="rounded-md bg-secondary px-2 py-1">⏱ {t(skill.time)}</span>
          <span className="rounded-md bg-secondary px-2 py-1">📈 {t(skill.difficulty)}</span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- 7 level ladder ---------- */
export function LevelLadder({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  return (
    <ol className="relative space-y-3 border-l border-dashed border-border pl-6">
      {LEVELS.map((l, i) => (
        <li key={l.n} className="relative">
          <span className="absolute -left-[31px] grid h-6 w-6 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
            {l.n}
          </span>
          <Reveal delay={i * 50}>
            <div className="rounded-xl border border-border bg-card px-4 py-3">
              <p className="text-sm font-semibold">{t(l.title)}</p>
              {!compact && (
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t(l.focus)}</p>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Flowchart ---------- */
export function Flowchart({ steps }: { steps: Loc[] }) {
  const { t } = useLang();
  return (
    <div className="scrollbar-thin-soft overflow-x-auto pb-2">
      <div className="flex min-w-max items-stretch gap-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-56 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                {t({ en: "Step", bn: "ধাপ" })} {i + 1}
              </span>
              <p className="mt-2 text-sm leading-relaxed">{t(step)}</p>
            </div>
            {i < steps.length - 1 && <span className="text-lg text-muted-foreground">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Bullet list card ---------- */
export function ListCard({
  title,
  icon,
  items,
  tone = "default",
}: {
  title: string;
  icon: string;
  items: Loc[];
  tone?: "default" | "warn" | "good";
}) {
  const { t } = useLang();
  const ring =
    tone === "warn"
      ? "border-destructive/35"
      : tone === "good"
        ? "border-primary/35"
        : "border-border";
  return (
    <div className={`rounded-2xl border ${ring} bg-card p-6 shadow-[var(--shadow-soft)]`}>
      <h3 className="font-display text-base font-semibold">
        {icon} {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {t(it)}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- FAQ accordion ---------- */
export function Faqs({ items }: { items: { q: Loc; a: Loc }[] }) {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((f, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="text-sm font-medium">{t(f.q)}</span>
            <span className="text-muted-foreground">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{t(f.a)}</p>
          )}
        </div>
      ))}
    </div>
  );
}
