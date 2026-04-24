"use client";

import { useI18n } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang, t } = useI18n();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold text-white"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-brand" />
          fifa.dev
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="hidden text-sm text-ink-300 transition-colors hover:text-white sm:inline"
          >
            {t.nav.work}
          </a>
          <a
            href="#services"
            className="hidden text-sm text-ink-300 transition-colors hover:text-white sm:inline"
          >
            {t.nav.services}
          </a>
          <a
            href="#pricing"
            className="hidden text-sm text-ink-300 transition-colors hover:text-white sm:inline"
          >
            {t.nav.pricing}
          </a>

          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5 font-mono text-xs">
            <button
              onClick={() => setLang("th")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "th"
                  ? "bg-white/10 text-white"
                  : "text-ink-400 hover:text-white"
              }`}
              aria-label="เปลี่ยนเป็นภาษาไทย"
            >
              TH
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en"
                  ? "bg-white/10 text-white"
                  : "text-ink-400 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
