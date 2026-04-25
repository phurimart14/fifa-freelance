# fifa-freelance

> Freelance landing page for **Fifa (Phurimart Sudanich)** — Frontend Developer จากขอนแก่น
> เน้นขายงาน landing page · เว็บธุรกิจ · SaaS · E-commerce สำหรับตลาด Fastwork และลูกค้าตรง

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

**Live:** [fifa-freelance.vercel.app](https://fifa-freelance.vercel.app) <!-- เปลี่ยนเป็น URL จริงหลัง deploy -->

---

## ✨ Features

- 🌐 **Bilingual (TH/EN)** — slot toggle ที่มุมขวาบน · default ภาษาไทย
- 🌙 **Dark mode** เป็น default (และเป็นโหมดเดียว — ตั้งใจแบบ minimal dev)
- 📐 **Minimal dev aesthetic** — max-width 720px · inspired โดย [leerob.io](https://leerob.io) / [rauchg.com](https://rauchg.com)
- 💸 **3 pricing tiers** — Starter ฿5,500 / Pro ฿14,900 / Custom ฿30,000+ พร้อม guarantee bar
- 🖼️ **4 case study cards** — รูปจริงของแต่ละโปรเจกต์ + browser-chrome frame
- ⚡ **Static-rendered** — โหลดเร็ว · 99 kB First Load JS · deploy บน Vercel เสรี
- 📱 **Fully responsive** — mobile-first

---

## 📚 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4 |
| UI | React 18.3 |
| i18n | React Context (typed Dict, no `next-intl` dependency) |
| Fonts | Inter · JetBrains Mono · Noto Sans Thai (Google Fonts) |
| Hosting | Vercel (recommended) |

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. เปิด browser
# http://localhost:3000
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | เริ่ม dev server (hot reload) |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server (หลัง build) |
| `npm run lint` | Run ESLint |

---

## 📂 Folder Structure

```
fifa-portfolio/
├── app/
│   ├── globals.css              # Tailwind + pulse-ring + fade utilities
│   ├── layout.tsx               # Root layout · Google Fonts · I18nProvider
│   └── page.tsx                 # หน้าเดียว ประกอบจาก sections
├── components/
│   ├── Nav.tsx                  # Sticky nav + brand + TH/EN toggle
│   ├── Hero.tsx                 # Availability pill + headline + CTAs
│   ├── About.tsx                # Bio 2 ย่อหน้า + tech stack chips
│   ├── Projects.tsx             # 4 cards + browser chrome + real screenshots
│   ├── Services.tsx             # 4 services (Landing / Business / SaaS / Consulting)
│   ├── Pricing.tsx              # 3 tiers + guarantee bar
│   ├── Contact.tsx              # 4 channels (email · LINE · GitHub · LinkedIn)
│   └── Footer.tsx               # Copyright + location
├── lib/
│   └── i18n.tsx                 # React Context i18n + typed Dict + TH/EN copy
├── public/
│   └── projects/                # Project screenshots
│       ├── paid.png
│       ├── clinic.png
│       ├── cafe.png
│       └── stratos.png
├── tailwind.config.ts           # Custom colors (brand · ink scale)
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🛠️ How It Works

### i18n (Internationalization)

ใช้ **React Context + `useState`** — ไม่ต้องพึ่ง library เพิ่ม:

```tsx
// lib/i18n.tsx
const [lang, setLang] = useState<Lang>("th");
<I18nContext.Provider value={{ lang, setLang, t: dict[lang] }}>
```

ทุก component เรียกใช้ผ่าน hook:

```tsx
import { useI18n } from "@/lib/i18n";
const { t, setLang } = useI18n();
return <h1>{t.hero.headlineBefore}</h1>;
```

กด TH/EN → ทุก component ที่ `useI18n()` re-render พร้อมกัน 🔄

### Component reusability

`Projects.tsx` มี `<ProjectCard>` ที่ define **ครั้งเดียว** แล้วเรียกใช้ 4 รอบ — เพิ่มโปรเจกต์ใหม่แค่เพิ่ม `<ProjectCard ... />` 1 บรรทัด

---

## ✏️ Customization

### แก้ copy / ราคา / โปรเจกต์

แก้ที่ **`lib/i18n.tsx` ไฟล์เดียว** — มีทั้ง `th` กับ `en` dict ใน object เดียวกัน
ลำดับ section ใน dict: `nav` → `hero` → `about` → `projects` → `services` → `pricing` → `contact` → `footer`

### แก้สี

แก้ที่ `tailwind.config.ts` — มี custom palette:

```ts
brand: { DEFAULT: "#10b981", dark: "#059669", light: "#d1fae5" }
ink:   { 900: "#0a0a0a", ..., 0: "#fafafa" }  // dark scale
```

### แก้ font

แก้ที่ `app/layout.tsx` (Google Fonts URL) + `tailwind.config.ts` (`fontFamily`)

---

## ➕ How to Add a New Project Card

อยากเพิ่มโปรเจกต์ที่ 5? ทำตาม 4 ขั้นตอน:

**1. Drop screenshot** ลง `public/projects/<name>.png` (เช่น `mybiz.png`)

**2. เพิ่ม type** ใน `lib/i18n.tsx`:

```tsx
projects: {
  ...
  mybiz: { name: string; meta: string; desc: string };
};
```

**3. เพิ่ม content** ทั้ง `th` และ `en` dict:

```tsx
mybiz: {
  name: "MyBiz",
  meta: "— project type",
  desc: "คำอธิบายสั้นๆ",
},
```

**4. เพิ่ม `<ProjectCard>`** ใน `components/Projects.tsx`:

```tsx
<ProjectCard
  href="https://mybiz.vercel.app"
  url="mybiz.vercel.app"
  name={t.projects.mybiz.name}
  meta={t.projects.mybiz.meta}
  desc={t.projects.mybiz.desc}
  image="/projects/mybiz.png"
/>
```

เสร็จ ✅ — grid จะปรับ layout อัตโนมัติ

---

## 🎨 Current Projects

| # | Name | Type | URL |
|---|------|------|-----|
| 1 | **Paid** | SaaS invoicing | [paid-saa-s.vercel.app](https://paid-saa-s.vercel.app) |
| 2 | **Glow Clinic** | Skincare landing | [clinic-landingpage-phi.vercel.app](https://clinic-landingpage-phi.vercel.app) |
| 3 | **Amber Brew** | Cafe website | [cafe-landingpage-seven.vercel.app](https://cafe-landingpage-seven.vercel.app) |
| 4 | **Stratos Digital** | B2B software studio | [stratos-landing.vercel.app](https://stratos-landing.vercel.app) |

---

## 🌍 Deployment (Vercel)

### Option 1: GitHub → Vercel (recommended)

1. Push code ขึ้น GitHub
2. ไป [vercel.com/new](https://vercel.com/new) → Import repo
3. กด **Deploy** — Vercel detect Next.js ให้เอง · ใช้เวลา ~2 นาที
4. ได้ URL เช่น `fifa-freelance.vercel.app`

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Custom domain

เพิ่มใน Vercel → Settings → Domains (เช่น `fifa.dev` ถ้าซื้อแล้ว)

---

## 📝 Notes

- ค่าเริ่มต้นภาษา = **ภาษาไทย** (ตลาดเป้าหมายคือ Fastwork)
- ไม่มี blog, ไม่มี analytics — เพิ่มทีหลังถ้าต้องการ (เช่น Vercel Analytics, Google Analytics)
- รูปใน `public/projects/` ใช้ `next/image` — auto-optimize เป็น WebP + lazy load อัตโนมัติ
- ราคาในหน้า Pricing คือ **starting price** — งาน scope ใหญ่ปรับตามจริงได้

---

## 📬 Contact

- Email: [phurimart14@gmail.com](mailto:phurimart14@gmail.com)
- LINE: [@14f.hnz](https://line.me/R/ti/p/@14f.hnz)
- GitHub: [@phurimart14](https://github.com/phurimart14)
- LinkedIn: [/in/phurimart](https://www.linkedin.com/in/phurimart)

---

## 📄 License

MIT © 2026 Phurimart Sudanich

โค้ดส่วน boilerplate (config, structure, components) ใช้ต่อยอดได้
แต่กรุณาอย่า copy เนื้อหา (copy ราคา + รายชื่อโปรเจกต์ที่เป็นของฟีฟ่า) ไปใช้ตรงๆ 🙏
