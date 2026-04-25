"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/10 bg-white/90 px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="ml-2 flex-1 truncate rounded-md bg-black/5 px-2.5 py-1 font-mono text-[10px] text-black/60">
        {url}
      </div>
    </div>
  );
}

function ProjectCard({
  href,
  name,
  meta,
  desc,
  url,
  image,
}: {
  href: string;
  name: string;
  meta: string;
  desc: string;
  url: string;
  image: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="overflow-hidden border-b border-white/5">
        <BrowserChrome url={url} />
        <div className="relative aspect-[16/9] overflow-hidden bg-white">
          <Image
            src={image}
            alt={`${name} ${meta}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-baseline gap-2">
          <h3 className="font-semibold text-white transition-colors group-hover:text-brand">
            {name}
          </h3>
          <span className="font-mono text-xs text-ink-400">{meta}</span>
        </div>
        <p className="text-sm leading-relaxed text-ink-300">{desc}</p>
      </div>
    </a>
  );
}

export default function Projects() {
  const { t } = useI18n();

  return (
    <section
      id="projects"
      className="mx-auto max-w-[720px] border-t border-white/5 px-6 py-20"
    >
      <div className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-400">
        // {t.projects.label}
      </div>

      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white">
        {t.projects.h2}
      </h2>
      <p className="mb-10 text-ink-300">{t.projects.sub}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <ProjectCard
          href="https://paid-saa-s.vercel.app/"
          url="paid-saa-s.vercel.app"
          name={t.projects.paid.name}
          meta={t.projects.paid.meta}
          desc={t.projects.paid.desc}
          image="/projects/paid.png"
        />
        <ProjectCard
          href="https://clinic-landingpage-phi.vercel.app"
          url="clinic-landingpage-phi.vercel.app"
          name={t.projects.glow.name}
          meta={t.projects.glow.meta}
          desc={t.projects.glow.desc}
          image="/projects/clinic.png"
        />
        <ProjectCard
          href="https://cafe-landingpage-seven.vercel.app"
          url="cafe-landingpage-seven.vercel.app"
          name={t.projects.amber.name}
          meta={t.projects.amber.meta}
          desc={t.projects.amber.desc}
          image="/projects/cafe.png"
        />
        <ProjectCard
          href="https://stratos-landing-one.vercel.app/"
          url="stratos-landing.vercel.app"
          name={t.projects.stratos.name}
          meta={t.projects.stratos.meta}
          desc={t.projects.stratos.desc}
          image="/projects/stratos.png"
        />
      </div>
    </section>
  );
}
