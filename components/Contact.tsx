"use client";

import { useI18n } from "@/lib/i18n";

const CHANNELS = [
  {
    label: "Email",
    value: "phurimart14@gmail.com",
    href: "mailto:phurimart14@gmail.com",
  },
  {
    label: "LINE",
    value: "@14f.hnz",
    href: "https://line.me/R/ti/p/@14f.hnz",
  },
  {
    label: "GitHub",
    value: "@phurimart14",
    href: "https://github.com/phurimart14",
  },
  {
    label: "LinkedIn",
    value: "/in/phurimart",
    href: "https://www.linkedin.com/in/phurimart",
  },
];

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="mx-auto max-w-[720px] border-t border-white/5 px-6 py-20"
    >
      <div className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-400">
        // {t.contact.label}
      </div>

      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white">
        {t.contact.h2}
      </h2>
      <p className="mb-10 max-w-[520px] text-ink-300">{t.contact.lead}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-brand/30 hover:bg-brand/5"
          >
            <div>
              <div className="mb-0.5 font-mono text-xs text-ink-400">
                {c.label}
              </div>
              <div className="text-sm font-medium text-white group-hover:text-brand">
                {c.value}
              </div>
            </div>
            <span
              className="text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
              aria-hidden
            >
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
