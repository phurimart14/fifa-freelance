"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="mx-auto max-w-[720px] px-6 pb-20 pt-16 sm:pt-24"
    >
      <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 font-mono text-xs text-brand">
        <span className="pulse-ring inline-block h-1.5 w-1.5 rounded-full bg-brand" />
        {t.hero.availability}
      </div>

      <h1 className="mb-6 whitespace-pre-line text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
        {t.hero.headlineBefore}
        <span className="text-brand">{t.hero.headlineAccent}</span>
      </h1>

      <p className="mb-10 max-w-[560px] text-lg leading-relaxed text-ink-300">
        {t.hero.lead}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-100"
        >
          {t.hero.ctaPrimary}
          <span aria-hidden>→</span>
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
        >
          {t.hero.ctaGhost}
        </a>
      </div>
    </section>
  );
}
