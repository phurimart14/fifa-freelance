"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mx-auto max-w-[720px] border-t border-white/5 px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-ink-400">
        <div>© 2026 Fifa · Phurimart Sudanich</div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          {t.footer.location}
        </div>
      </div>
    </footer>
  );
}
