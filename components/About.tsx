"use client";

import { useI18n } from "@/lib/i18n";

const STACK = [
  "TypeScript",
  "React",
  "Next.js 14+",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Supabase",
  "Figma",
];

export default function About() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-[720px] border-t border-white/5 px-6 py-20">
      <div className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-400">
        // {t.about.label}
      </div>

      <div className="space-y-5 text-[17px] leading-relaxed text-ink-200">
        <p>
          {t.about.p1Before}
          <span className="text-white">{t.about.p1FocusHl}</span>
          {t.about.p1Mid}
          <span className="text-white">{t.about.p1StackHl}</span>
          {t.about.p1After}
        </p>
        <p>{t.about.p2}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {STACK.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-ink-200"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
