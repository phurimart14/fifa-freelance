"use client";

import { useI18n } from "@/lib/i18n";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-8 8a1 1 0 01-1.42 0l-4-4a1 1 0 011.42-1.42L8 12.58l7.29-7.29a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  const { t } = useI18n();

  return (
    <section
      id="pricing"
      className="mx-auto max-w-[720px] border-t border-white/5 px-6 py-20"
    >
      <div className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-400">
        // {t.pricing.label}
      </div>

      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white">
        {t.pricing.h2}
      </h2>
      <p className="mb-8 text-ink-300">{t.pricing.sub}</p>

      {/* Guarantee bar */}
      <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2 rounded-xl border border-brand/20 bg-brand/5 px-5 py-3">
        {t.pricing.guarantees.map((g) => (
          <div
            key={g}
            className="flex items-center gap-2 text-sm text-brand-light"
          >
            <CheckIcon />
            <span>{g}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* Starter */}
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="mb-1 font-mono text-xs text-ink-400">Starter</div>
          <div className="mb-1 text-2xl font-bold text-white">
            ฿5,500<span className="text-base font-normal text-ink-400">+</span>
          </div>
          <p className="mb-4 text-xs leading-relaxed text-ink-300">
            {t.pricing.starter.desc}
          </p>
          <ul className="mb-5 space-y-2 text-xs text-ink-200">
            {t.pricing.starter.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-auto rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            {t.pricing.starter.cta}
          </a>
        </div>

        {/* Pro — featured */}
        <div className="relative flex flex-col rounded-xl border border-brand/40 bg-brand/[0.04] p-5 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] font-semibold text-ink-900">
            {t.pricing.pro.badge}
          </div>
          <div className="mb-1 font-mono text-xs text-brand">Pro</div>
          <div className="mb-1 text-2xl font-bold text-white">
            ฿14,900<span className="text-base font-normal text-ink-400">+</span>
          </div>
          <p className="mb-4 text-xs leading-relaxed text-ink-300">
            {t.pricing.pro.desc}
          </p>
          <ul className="mb-5 space-y-2 text-xs text-ink-200">
            {t.pricing.pro.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-auto rounded-full bg-brand px-4 py-2 text-center text-sm font-medium text-ink-900 transition-colors hover:bg-brand-dark"
          >
            {t.pricing.pro.cta}
          </a>
        </div>

        {/* Custom */}
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="mb-1 font-mono text-xs text-ink-400">Custom</div>
          <div className="mb-1 text-2xl font-bold text-white">
            ฿30,000<span className="text-base font-normal text-ink-400">+</span>
          </div>
          <p className="mb-4 text-xs leading-relaxed text-ink-300">
            {t.pricing.custom.desc}
          </p>
          <ul className="mb-5 space-y-2 text-xs text-ink-200">
            {t.pricing.custom.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-auto rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            {t.pricing.custom.cta}
          </a>
        </div>
      </div>

      <pre className="mt-8 whitespace-pre-wrap font-mono text-xs leading-relaxed text-ink-400">
        {t.pricing.note}
      </pre>
    </section>
  );
}
