import { Link } from "@tanstack/react-router";

import { CATEGORIES, SKILLS } from "@/data/skills";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="mt-24 border-t border-border bg-surface-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-lg font-semibold">
            Skill<span className="text-brand-gradient">Verse</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t({
              en: "A complete static knowledge library. No login, no account — open a page and start learning.",
              bn: "একটি সম্পূর্ণ স্ট্যাটিক নলেজ লাইব্রেরি। লগইন নেই, অ্যাকাউন্ট নেই — পেজ খুলুন আর শেখা শুরু করুন।",
            })}
          </p>
        </div>

        {CATEGORIES.map((c) => (
          <div key={c.slug}>
            <h3 className="text-sm font-semibold">
              {c.icon} {t(c.name)}
            </h3>
            <ul className="mt-3 space-y-2">
              {SKILLS.filter((s) => s.category === c.slug).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/skill/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold">{t({ en: "Library", bn: "লাইব্রেরি" })}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/skills" className="transition-colors hover:text-foreground">
                {t({ en: "All Skills", bn: "সব স্কিল" })}
              </Link>
            </li>
            <li>{t({ en: "7 Learning Levels", bn: "৭টি লার্নিং লেভেল" })}</li>
            <li>{t({ en: "Cheat Sheets & Shortcuts", bn: "চিট শিট ও শর্টকাট" })}</li>
            <li>{t({ en: "Fast Memorize Section", bn: "ফাস্ট মেমোরাইজ সেকশন" })}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} SkillVerse — {t({ en: "Master Professional Skills From Beginner To Expert", bn: "বিগিনার থেকে এক্সপার্ট পর্যন্ত প্রফেশনাল স্কিল আয়ত্ত করুন" })}
      </div>
    </footer>
  );
}
