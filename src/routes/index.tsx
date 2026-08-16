import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { Faqs, LevelLadder, Reveal, Section, SkillCard } from "@/components/site/primitives";
import { CATEGORIES, SKILLS } from "@/data/skills";
import { loc, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "SkillVerse — Master Professional Skills From Beginner To Expert";
    const description =
      "A complete bilingual static knowledge library for Photoshop, Illustrator, Premiere Pro, After Effects, HTML, CSS, Bootstrap, Tailwind and JavaScript. Roadmaps, notes, cheat sheets — no login required.";
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
  component: Home,
});

const WHY = [
  {
    icon: "📚",
    title: loc("Everything already written", "সবকিছু আগেই লেখা"),
    body: loc(
      "No videos to buy, no account to create. Every note, roadmap and cheat sheet is on the page.",
      "কোনো ভিডিও কিনতে হবে না, অ্যাকাউন্টও লাগবে না। প্রতিটি নোট, রোডম্যাপ ও চিট শিট পেজেই আছে।",
    ),
  },
  {
    icon: "🪜",
    title: loc("7 clear levels", "৭টি স্পষ্ট লেভেল"),
    body: loc(
      "From absolute beginner to expert, so you always know exactly what comes next.",
      "একেবারে নতুন থেকে এক্সপার্ট পর্যন্ত — পরের ধাপ কী, সবসময় জানা থাকবে।",
    ),
  },
  {
    icon: "🧠",
    title: loc("Fast memorize system", "ফাস্ট মেমোরাইজ সিস্টেম"),
    body: loc(
      "30-second, 2-minute and 10-minute revisions plus mind maps before any exam or interview.",
      "পরীক্ষা বা ইন্টারভিউর আগে ৩০ সেকেন্ড, ২ মিনিট ও ১০ মিনিটের রিভিশন এবং মাইন্ড ম্যাপ।",
    ),
  },
  {
    icon: "🇧🇩",
    title: loc("Bilingual by design", "দুই ভাষায় তৈরি"),
    body: loc(
      "Read every page in English or Bangla with one tap — the same depth in both.",
      "এক ট্যাপে প্রতিটি পেজ ইংরেজি বা বাংলায় পড়ুন — দুই ভাষায় একই গভীরতা।",
    ),
  },
  {
    icon: "⌨️",
    title: loc("Shortcuts & workflows", "শর্টকাট ও ওয়ার্কফ্লো"),
    body: loc(
      "Professional shortcuts and client-ready workflows for every single tool.",
      "প্রতিটি টুলের জন্য প্রফেশনাল শর্টকাট ও ক্লায়েন্ট-রেডি ওয়ার্কফ্লো।",
    ),
  },
  {
    icon: "⚡",
    title: loc("Fast and static", "দ্রুত ও স্ট্যাটিক"),
    body: loc(
      "Pure static pages: instant loading, readable on the slowest connection.",
      "সম্পূর্ণ স্ট্যাটিক পেজ: সাথে সাথে লোড, ধীর ইন্টারনেটেও পড়া যায়।",
    ),
  },
];

const HOME_FAQ = [
  {
    q: loc("Do I need to sign up?", "সাইন আপ করতে হবে?"),
    a: loc(
      "Never. SkillVerse has no login, no account and no dashboard — every page is open.",
      "কখনোই না। SkillVerse-এ লগইন, অ্যাকাউন্ট বা ড্যাশবোর্ড নেই — প্রতিটি পেজ খোলা।",
    ),
  },
  {
    q: loc("Where should a complete beginner start?", "একেবারে নতুন কেউ কোথা থেকে শুরু করবে?"),
    a: loc(
      "Designers: start with Photoshop. Developers: start with HTML, then CSS, then JavaScript.",
      "ডিজাইনার: ফটোশপ দিয়ে শুরু করুন। ডেভেলপার: HTML, তারপর CSS, তারপর জাভাস্ক্রিপ্ট।",
    ),
  },
  {
    q: loc("How is the content organised?", "কনটেন্ট কীভাবে সাজানো?"),
    a: loc(
      "Every skill page has a roadmap, flowchart, 7 levels, topic notes in a fixed 13-block structure, cheat sheet, shortcuts and revisions.",
      "প্রতিটি স্কিল পেজে আছে রোডম্যাপ, ফ্লোচার্ট, ৭ লেভেল, নির্দিষ্ট ১৩-ব্লক স্ট্রাকচারে টপিক নোট, চিট শিট, শর্টকাট ও রিভিশন।",
    ),
  },
  {
    q: loc("Can I use this offline?", "অফলাইনে ব্যবহার করা যাবে?"),
    a: loc(
      "Yes — pages are static, so once loaded they keep reading and printing well.",
      "হ্যাঁ — পেজগুলো স্ট্যাটিক, একবার লোড হলে পড়া ও প্রিন্ট করা যায়।",
    ),
  },
];

function Home() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SKILLS.flatMap((s) =>
      s.topics
        .filter((topic) => topic.toLowerCase().includes(q) || s.name.toLowerCase().includes(q))
        .slice(0, 3)
        .map((topic) => ({ skill: s, topic })),
    ).slice(0, 6);
  }, [query]);

  return (
    <div>
      {/* Hero */}
      <section className="hero-aura relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {t({
                en: "11 skills · 7 levels · 200+ structured topics",
                bn: "১১টি স্কিল · ৭টি লেভেল · ২০০+ সাজানো টপিক",
              })}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t({ en: "Master Professional Skills", bn: "প্রফেশনাল স্কিল আয়ত্ত করুন" })}{" "}
              <span className="text-brand-gradient">
                {t({ en: "From Beginner To Expert", bn: "নতুন থেকে এক্সপার্ট পর্যন্ত" })}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t({
                en: "A complete static knowledge library for design and web development. Open a page, follow the roadmap, revise with cheat sheets. No login, no course, no distractions.",
                bn: "ডিজাইন ও ওয়েব ডেভেলপমেন্টের সম্পূর্ণ স্ট্যাটিক নলেজ লাইব্রেরি। পেজ খুলুন, রোডম্যাপ অনুসরণ করুন, চিট শিটে রিভিশন দিন। লগইন নেই, কোর্স নেই, বিভ্রান্তি নেই।",
              })}
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={240}>
            <div className="relative mt-9 max-w-xl">
              <label className="glass flex items-center gap-3 rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)]">
                <Search className="h-4.5 w-4.5 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t({
                    en: "Try “Layers”, “Flexbox”, “Keyframes”…",
                    bn: "লিখুন “Layers”, “Flexbox”, “Keyframes”…",
                  })}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </label>
              {suggestions.length > 0 && (
                <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-popover shadow-[var(--shadow-lift)]">
                  {suggestions.map((s, i) => (
                    <li key={`${s.skill.slug}-${s.topic}-${i}`}>
                      <button
                        onClick={() =>
                          navigate({
                            to: "/skill/$slug",
                            params: { slug: s.skill.slug },
                            hash: "topics",
                          })
                        }
                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-secondary"
                      >
                        <span>{s.skill.icon}</span>
                        <span className="font-medium">{s.topic}</span>
                        <span className="ml-auto text-xs text-muted-foreground">
                          {s.skill.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              >
                {t({ en: "Browse the library", bn: "লাইব্রেরি দেখুন" })} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <Section
        eyebrow={t({ en: "Categories", bn: "ক্যাটাগরি" })}
        title={t({ en: "Two disciplines, fully mapped", bn: "দুটি ডিসিপ্লিন, সম্পূর্ণ সাজানো" })}
        description={t({
          en: "Pick a direction and follow it level by level — each category is a finished curriculum.",
          bn: "একটি দিক বেছে নিয়ে লেভেল ধরে এগিয়ে যান — প্রতিটি ক্যাটাগরি একটি সম্পূর্ণ কারিকুলাম।",
        })}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link to="/category/$slug" params={{ slug: c.slug }} className="card-soft block p-8">
                <span className="text-4xl">{c.icon}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{t(c.name)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(c.description)}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {SKILLS.filter((s) => s.category === c.slug).map((s) => (
                    <span
                      key={s.slug}
                      className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs"
                    >
                      {s.icon} {lang === "bn" ? s.nameBn : s.name}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured skills */}
      <Section
        eyebrow={t({ en: "Featured", bn: "ফিচার্ড" })}
        title={t({ en: "Featured skills", bn: "ফিচার্ড স্কিল" })}
        description={t({
          en: "The four paths most learners start with.",
          bn: "যে চারটি পাথ দিয়ে বেশিরভাগ শিক্ষার্থী শুরু করেন।",
        })}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["photoshop", "illustrator", "html", "javascript"].map((slug, i) => {
            const skill = SKILLS.find((s) => s.slug === slug)!;
            return <SkillCard key={slug} skill={skill} index={i} />;
          })}
        </div>
      </Section>

      {/* Why */}
      <Section
        eyebrow={t({ en: "Why SkillVerse", bn: "কেন SkillVerse" })}
        title={t({ en: "Built for people who want to finish", bn: "যারা শেষ করতে চান, তাদের জন্য" })}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.icon} delay={i * 60}>
              <div className="card-soft h-full p-6">
                <span className="text-2xl">{w.icon}</span>
                <h3 className="mt-4 font-display text-base font-semibold">{t(w.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(w.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Roadmap preview */}
      <Section
        eyebrow={t({ en: "Learning Roadmap", bn: "লার্নিং রোডম্যাপ" })}
        title={t({ en: "The same 7 levels for every skill", bn: "প্রতিটি স্কিলের জন্য একই ৭ লেভেল" })}
        description={t({
          en: "Consistency is what makes a library usable. Each page moves through the same ladder.",
          bn: "একই ধরনের গঠনই লাইব্রেরিকে ব্যবহারযোগ্য করে। প্রতিটি পেজ একই ল্যাডার অনুসরণ করে।",
        })}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <LevelLadder />
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-lg font-semibold">
                {t({ en: "Every topic, same structure", bn: "প্রতিটি টপিক, একই স্ট্রাকচার" })}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                {[
                  ["Definition", "সংজ্ঞা"],
                  ["Purpose", "উদ্দেশ্য"],
                  ["Why Learn", "কেন শিখবেন"],
                  ["When To Use", "কখন ব্যবহার"],
                  ["How It Works", "কীভাবে কাজ করে"],
                  ["Real Life Example", "বাস্তব উদাহরণ"],
                  ["Professional Example", "প্রফেশনাল উদাহরণ"],
                  ["Best Practices", "বেস্ট প্র্যাকটিস"],
                  ["Common Mistakes", "সাধারণ ভুল"],
                  ["Tips & Tricks", "টিপস ও ট্রিকস"],
                  ["Important Notes", "গুরুত্বপূর্ণ নোট"],
                  ["Summary", "সারসংক্ষেপ"],
                  ["Quick Revision", "দ্রুত রিভিশন"],
                ].map(([en, bn]) => (
                  <span key={en} className="rounded-lg bg-secondary px-3 py-2">
                    {t({ en: en!, bn: bn! })}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Popular skills */}
      <Section
        eyebrow={t({ en: "Popular", bn: "জনপ্রিয়" })}
        title={t({ en: "Popular right now", bn: "এখন জনপ্রিয়" })}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["css", "tailwind-css", "premiere-pro", "after-effects", "bootstrap", "audacity"].map(
            (slug, i) => {
              const skill = SKILLS.find((s) => s.slug === slug)!;
              return <SkillCard key={slug} skill={skill} index={i} />;
            },
          )}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        title={t({ en: "Frequently asked questions", bn: "সাধারণ প্রশ্নোত্তর" })}
        id="faq"
      >
        <div className="max-w-3xl">
          <Faqs items={HOME_FAQ} />
        </div>
      </Section>
    </div>
  );
}
