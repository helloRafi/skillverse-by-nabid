import { Link } from "@tanstack/react-router";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { CATEGORIES } from "@/data/skills";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t({ en: "Home", bn: "হোম" }) },
    { to: "/skills", label: t({ en: "All Skills", bn: "সব স্কিল" }) },
    ...CATEGORIES.map((c) => ({ to: `/category/${c.slug}`, label: t(c.name) })),
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-border/70">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-[var(--shadow-soft)]">
              S
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Skill<span className="text-brand-gradient">Verse</span>
            </span>
          </Link>

          <nav className="ml-6 hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center rounded-full border border-border bg-secondary/60 p-0.5">
              {(["en", "bn"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  aria-label={code === "en" ? "English" : "বাংলা"}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    lang === code
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {code === "en" ? "EN" : "বাং"}
                </button>
              ))}
              <Languages className="mx-1.5 h-3.5 w-3.5 text-muted-foreground" />
            </div>

            <button
              onClick={toggle}
              aria-label={t({ en: "Toggle theme", bn: "থিম পরিবর্তন" })}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-colors hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={t({ en: "Menu", bn: "মেনু" })}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary/60 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border/70 px-4 pb-4 pt-2 lg:hidden">
            <div className="flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
