"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "th" | "en";

type Dict = {
  nav: {
    work: string;
    services: string;
    pricing: string;
  };
  hero: {
    availability: string;
    headlineBefore: string;
    headlineAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaGhost: string;
  };
  about: {
    label: string;
    p1Before: string;
    p1FocusHl: string;
    p1Mid: string;
    p1StackHl: string;
    p1After: string;
    p2: string;
  };
  projects: {
    label: string;
    h2: string;
    sub: string;
    paid: { name: string; meta: string; desc: string };
    glow: { name: string; meta: string; desc: string };
    amber: { name: string; meta: string; desc: string };
    stratos: { name: string; meta: string; desc: string };
  };
  services: {
    label: string;
    h2: string;
    sub: string;
    s1: { name: string; desc: string };
    s2: { name: string; desc: string };
    s3: { name: string; desc: string };
    s4: { name: string; desc: string };
  };
  pricing: {
    label: string;
    h2: string;
    sub: string;
    guarantees: string[];
    starter: { desc: string; features: string[]; cta: string };
    pro: { desc: string; features: string[]; cta: string; badge: string };
    custom: { desc: string; features: string[]; cta: string };
    note: string;
  };
  contact: {
    label: string;
    h2: string;
    lead: string;
  };
  footer: {
    location: string;
  };
};

const dict: Record<Lang, Dict> = {
  th: {
    nav: {
      work: "ผลงาน",
      services: "บริการ",
      pricing: "ราคา",
    },
    hero: {
      availability: "ว่างรับงาน · พฤษภาคม 2026",
      headlineBefore: "รับทำ landing page และ\nเว็บไซต์ ",
      headlineAccent: "ที่ช่วยปิดการขาย",
      lead: "สวัสดีครับ ผมฟีฟ่า — Frontend Developer จากขอนแก่น ใช้ React, Next.js, TypeScript เน้นทำเว็บที่โหลดไว SEO ดี และ convert ลูกค้าให้คุณจริง ๆ ไม่ใช่แค่สวย",
      ctaPrimary: "คุยเรื่องงาน",
      ctaGhost: "ดูผลงาน",
    },
    about: {
      label: "เกี่ยวกับผม",
      p1Before: "ผมทำ ",
      p1FocusHl: "frontend",
      p1Mid: " มาหลายปี โฟกัสที่ ",
      p1StackHl: "React & Next.js",
      p1After:
        " สายงานที่ถนัดคือเว็บธุรกิจ — landing page, SaaS product, e-commerce — ที่ต้องโหลดไว วัดผลได้ และดูพรีเมียม",
      p2: "ไม่ใช่แค่เขียนโค้ด — ผมช่วยคิดเรื่อง structure, UX, copy, SEO และ analytics ตั้งแต่วันแรก เพื่อให้เว็บที่ส่งมอบ ทำงานได้จริงหลัง go-live",
    },
    projects: {
      label: "ผลงานที่เลือกมา",
      h2: "โปรเจกต์ล่าสุด",
      sub: "เลือกมาบางส่วน — ทั้งงานลูกค้าและ case study ที่ทำเอง",
      paid: {
        name: "Paid",
        meta: "— SaaS invoicing",
        desc: "ออกใบกำกับภาษี e-Tax ครบครันสำหรับฟรีแลนซ์และ SME ไทย — landing page + dashboard flow",
      },
      glow: {
        name: "Glow Clinic",
        meta: "— skincare landing",
        desc: "คลินิกผิวพรรณพรีเมียม — เน้น trust signals, รีวิวจริง, จองนัดผ่าน LINE",
      },
      amber: {
        name: "Amber Brew",
        meta: "— cafe website",
        desc: "คาเฟ่ specialty — เมนู, แผนที่, IG feed, สั่งออนไลน์",
      },
      stratos: {
        name: "Stratos Digital",
        meta: "— B2B software studio",
        desc: "เว็บบริษัท IT/software house — Modern corporate · animated trust marquee · case studies + 4-step process · TH/EN",
      },
    },
    services: {
      label: "บริการ",
      h2: "ผมช่วยคุณได้แบบไหน",
      sub: "รับงานที่ React/Next.js เล่นบทบาทสำคัญ — ใกล้เคียงกับตัวอย่างด้านบน",
      s1: {
        name: "Landing Page / Sale Page",
        desc: "คลินิก / คาเฟ่ / ร้านค้า / บริการ — หน้าเดียว โหลดไว SEO ดี convert สูง",
      },
      s2: {
        name: "เว็บธุรกิจ + CMS",
        desc: "เว็บบริษัท 3-5 หน้า + ระบบแก้ไขข้อมูลเอง (Supabase) — ไม่ต้องพึ่งเราตลอดชีวิต",
      },
      s3: {
        name: "E-commerce / SaaS",
        desc: "ร้านออนไลน์ หรือโปรดักต์ SaaS — backend, auth, payment, admin dashboard",
      },
      s4: {
        name: "Frontend Consulting & Code Review",
        desc: "ช่วย review โค้ด ทีมเล็ก, ช่วยวาง architecture, optimize performance",
      },
    },
    pricing: {
      label: "ราคา",
      h2: "แพ็กเกจเริ่มต้น",
      sub: "ราคานี้คือจุดเริ่มต้น — งาน scope ใหญ่ ปรับตามจริงได้",
      guarantees: [
        "ประกันงาน 1 ปี",
        "ขายขาด ไม่มีค่าเช่ารายเดือน",
        "Hosting ฟรี (Vercel)",
      ],
      starter: {
        desc: "Landing/Sale page หน้าเดียว สำหรับธุรกิจเล็ก",
        features: [
          "หน้าเดียว + ดีไซน์ custom",
          "Next.js โหลดเร็วกว่า WP 3x",
          "Responsive + SEO พื้นฐาน",
          "ประกันงาน 1 ปี",
          "แก้ไขได้ 2 รอบ",
          "ส่งมอบใน 10-14 วัน",
        ],
        cta: "เริ่มโปรเจกต์",
      },
      pro: {
        desc: "เว็บธุรกิจ 3-5 หน้า + CMS แก้ข้อมูลเองได้",
        badge: "แนะนำ",
        features: [
          "3-5 หน้า + Admin dashboard",
          "Supabase CMS — แก้ content เองได้",
          "Animation + Micro-interactions",
          "SEO + Google Analytics setup",
          "เชื่อม LINE / Form / Map",
          "ประกันงาน 1 ปี",
          "แก้ไขได้ 3 รอบ · 15-20 วัน",
        ],
        cta: "เริ่มโปรเจกต์",
      },
      custom: {
        desc: "E-commerce, SaaS, งาน scope ใหญ่ที่ต้องใช้ backend",
        features: [
          "Product + marketing + admin",
          "Auth, database, API (Supabase)",
          "Payment gateway ถ้าต้องการ",
          "ดูแลต่อรายเดือนได้",
          "ประกันงาน 1 ปี",
          "Timeline ปรับตาม scope",
        ],
        cta: "ขอใบเสนอราคา",
      },
      note: "// ลูกค้าเตรียม content + รูป · มัดจำ 50% ก่อนเริ่มงาน · ชำระส่วนที่เหลือเมื่อส่งมอบ\n// ประกันงาน 1 ปี = แก้ bug ฟรี (ไม่รวมฟีเจอร์ใหม่/เปลี่ยนดีไซน์)",
    },
    contact: {
      label: "ติดต่อ",
      h2: "พร้อมคุยเรื่องงานของคุณแล้ว",
      lead: "เล่าโปรเจกต์ให้ฟังคร่าว ๆ ได้เลย — งบ, timeline, scope — แล้วผมจะตอบกลับใน 24 ชั่วโมง",
    },
    footer: {
      location: "ขอนแก่น, ประเทศไทย",
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      pricing: "Pricing",
    },
    hero: {
      availability: "Available · May 2026",
      headlineBefore: "Building landing pages &\nwebsites that ",
      headlineAccent: "actually convert",
      lead: "Hi, I'm Fifa — a Frontend Developer from Khon Kaen. I build fast, SEO-friendly websites with React, Next.js, and TypeScript — focused on conversion, not just pretty.",
      ctaPrimary: "Start a project",
      ctaGhost: "See work",
    },
    about: {
      label: "About",
      p1Before: "I've been doing ",
      p1FocusHl: "frontend",
      p1Mid: " for years, focused on ",
      p1StackHl: "React & Next.js",
      p1After:
        ". I specialize in business sites — landing pages, SaaS products, e-commerce — that are fast, measurable, and premium.",
      p2: "Not just writing code — I help with structure, UX, copy, SEO and analytics from day one, so the site actually works after go-live.",
    },
    projects: {
      label: "Selected work",
      h2: "Recent projects",
      sub: "A few picks — client work and personal case studies.",
      paid: {
        name: "Paid",
        meta: "— SaaS invoicing",
        desc: "Thai e-Tax invoicing for freelancers & SMEs — landing page + dashboard flow.",
      },
      glow: {
        name: "Glow Clinic",
        meta: "— skincare landing",
        desc: "Premium skincare clinic — trust signals, real reviews, LINE booking flow.",
      },
      amber: {
        name: "Amber Brew",
        meta: "— cafe website",
        desc: "Specialty cafe — menu, map, IG feed, online ordering.",
      },
      stratos: {
        name: "Stratos Digital",
        meta: "— B2B software studio",
        desc: "Corporate site for an IT/software house — modern dark UI, animated trust marquee, case studies + 4-step process. TH/EN.",
      },
    },
    services: {
      label: "Services",
      h2: "How I can help",
      sub: "I take on work where React/Next.js is central — close to the examples above.",
      s1: {
        name: "Landing / Sale Page",
        desc: "Clinics / cafes / shops / services — single-page sites that load fast, rank well, and convert.",
      },
      s2: {
        name: "Business Website + CMS",
        desc: "Company website 3-5 pages + editable CMS (Supabase) — you can update content yourself.",
      },
      s3: {
        name: "E-commerce / SaaS",
        desc: "Online shop or SaaS product — backend, auth, payment, admin dashboard.",
      },
      s4: {
        name: "Frontend Consulting & Code Review",
        desc: "Code review for small teams, architecture help, performance tuning.",
      },
    },
    pricing: {
      label: "Pricing",
      h2: "Starting packages",
      sub: "Starting prices — custom scope gets a custom quote.",
      guarantees: [
        "1-year warranty",
        "One-time payment, no subscription",
        "Free hosting (Vercel)",
      ],
      starter: {
        desc: "Single-page landing for small businesses.",
        features: [
          "Single page + custom design",
          "Next.js — 3x faster than WP",
          "Responsive + basic SEO",
          "1-year warranty",
          "2 revision rounds",
          "10-14 day delivery",
        ],
        cta: "Start project",
      },
      pro: {
        desc: "3-5 page business site + editable CMS.",
        badge: "Recommended",
        features: [
          "3-5 pages + Admin dashboard",
          "Supabase CMS — self-editable",
          "Animation + Micro-interactions",
          "SEO + Google Analytics setup",
          "LINE / Form / Map integration",
          "1-year warranty",
          "3 revisions · 15-20 days",
        ],
        cta: "Start project",
      },
      custom: {
        desc: "E-commerce, SaaS, larger scope needing backend.",
        features: [
          "Product + marketing + admin",
          "Auth, database, API (Supabase)",
          "Payment gateway if needed",
          "Monthly retainer available",
          "1-year warranty",
          "Timeline scales with scope",
        ],
        cta: "Request quote",
      },
      note: "// Client provides content & images · 50% deposit · balance on delivery\n// 1-year warranty = free bug fixes (excludes new features/redesign)",
    },
    contact: {
      label: "Contact",
      h2: "Let's build something.",
      lead: "Tell me about your project — budget, timeline, scope. I'll reply within 24 hours.",
    },
    footer: {
      location: "Khon Kaen, Thailand",
    },
  },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue>({
  lang: "th",
  setLang: () => {},
  t: dict.th,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");
  return (
    <I18nContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
