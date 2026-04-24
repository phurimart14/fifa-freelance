# fifa-portfolio

Freelance landing page for Fifa (Phurimart Sudanich) — Frontend Developer จากขอนแก่น.
เน้นขายงาน landing page, เว็บธุรกิจ, SaaS/E-commerce สำหรับตลาด Fastwork.

## Stack

- Next.js 14 (App Router)
- TypeScript 5
- Tailwind CSS 3
- React 18
- i18n: React Context (TH/EN) — ไม่ใช้ `next-intl`

## Getting started

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## Scripts

```bash
npm run dev     # dev server
npm run build   # production build
npm run start   # start production server (หลัง build)
npm run lint    # ESLint
```

## Folder structure

```
fifa-portfolio/
├── app/
│   ├── globals.css         # Tailwind + pulse-ring + fade utilities
│   ├── layout.tsx          # Root layout + Google Fonts + I18nProvider
│   └── page.tsx            # หน้าเดียว ประกอบจาก sections
├── components/
│   ├── Nav.tsx             # sticky nav + TH/EN toggle
│   ├── Hero.tsx            # availability pill + headline + CTAs
│   ├── About.tsx           # bio 2 ย่อหน้า + tech stack chips
│   ├── Projects.tsx        # 3 cards + CSS mockups (Paid / Glow / Amber)
│   ├── Services.tsx        # 4 services
│   ├── Pricing.tsx         # 3 tiers + guarantee bar
│   ├── Contact.tsx         # 4 channels (email/LINE/GitHub/LinkedIn)
│   └── Footer.tsx          # copyright + location
├── lib/
│   └── i18n.tsx            # React Context i18n (typed Dict, TH/EN)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## แก้ content / ราคา

แก้ที่ `lib/i18n.tsx` ไฟล์เดียว — มีทั้ง `th` และ `en` dict อยู่ใน object เดียวกัน
เปลี่ยน copy, ราคา, feature list, โปรเจกต์ได้ตรงนั้น

## Projects section

ภาพตัวอย่างเป็น **CSS mockup** (ไม่มี image assets จริง) — แต่ละโปรเจกต์มี browser chrome
+ stage ที่ match brand ของเว็บจริง:

- **Paid** — SaaS invoicing (emerald + white)
- **Glow Clinic** — skincare (pink gradient + 🌸)
- **Amber Brew** — cafe (dark amber radial)

กดการ์ดแล้วจะเปิดเว็บจริงที่ Vercel ใน tab ใหม่

## Deploy to Vercel

```bash
# option 1: push ขึ้น GitHub แล้ว import project ใน vercel.com
# option 2: Vercel CLI
npx vercel
```

Vercel จะ detect ว่าเป็น Next.js ให้เอง ไม่ต้องตั้งค่าเพิ่ม

## หมายเหตุ

- ค่าเริ่มต้นภาษา: **ไทย** — toggle เป็น EN ได้จากมุมขวาบน
- dark mode เป็น default (และเป็นโหมดเดียว)
- max-width container = 720px (minimal dev aesthetic ตาม leerob.io / rauchg.com)
- ไม่มี blog, ไม่มี analytics — เพิ่มทีหลังถ้าต้องการ
