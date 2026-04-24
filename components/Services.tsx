"use client";

import { useI18n } from "@/lib/i18n";

export default function Services() {
  const { t } = useI18n();

  const items = [
    { num: "01", ...t.services.s1 },
    { num: "02", ...t.services.s2 },
    { num: "03", ...t.services.s3 },
    { num: "04", ...t.services.s4 },
  ];

  return (
    <section
      id="services"
      className="mx-auto max-w-[720px] border-t border-white/5 px-6 py-20"
    >
      <div className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-400">
        // {t.services.label}
      </div>

      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white">
        {t.services.h2}
      </h2>
      <p className="mb-10 text-ink-300">{t.services.sub}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.num}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="mb-3 font-mono text-xs text-brand">{item.num}</div>
            <h3 className="mb-2 font-semibold text-white">{item.name}</h3>
            <p className="text-sm leading-relaxed text-ink-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
