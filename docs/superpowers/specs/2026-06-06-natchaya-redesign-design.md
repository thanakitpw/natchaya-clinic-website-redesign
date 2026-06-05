# Design Spec — Natchaya Clinic Website Redesign (Workflow & Architecture)

> วันที่: 2026-06-06 · เจ้าของ: Best Solutions · สถานะ: อนุมัติ design แล้ว (รอ implementation plan)
> เอกสารนี้เป็น **design/architecture spec** ต่อยอดจาก `docs/PRD.md` — โฟกัสที่ workflow การทำงาน (HTML-first → Next.js), data model, และ build sequence

---

## 1. บริบทโดยย่อ (Context)

Redesign เว็บ Natchaya Clinic (คลินิกความงาม/ดูดไขมัน/เลเซอร์/นรีเวชความงาม กรุงเทพฯ) — **รวม 3 ระบบเดิม** (เว็บหลัก + Women Plus + Liposuction microsite) เป็นเว็บเดียว. รายละเอียด scope/page-inventory/SEO baseline อยู่ใน `docs/PRD.md`, `docs/page-inventory.md`, `docs/crawl/`.

เนื้อหาจริง ~530 หน้า → หลังยุบหน้าซ้ำเหลือ migrate จริง **~350–400 หน้า**.

## 2. การตัดสินใจหลัก (Approved Decisions)

| เรื่อง | สรุป |
|------|------|
| **Workflow** | แนวทาง B — Design System + Representative Templates (ไม่วาด HTML ครบ 350 หน้า) |
| **HTML prototype stack** | HTML + Tailwind (CDN) — class ย้ายเข้า Next.js ได้ตรงๆ |
| **Production stack** | Next.js (App Router) + Tailwind + Supabase + Vercel |
| **จัดการเนื้อหา** | สร้าง **Custom Admin Panel** เองบน Supabase (ไม่ใช้ headless CMS) |
| **ระบบจอง** | ฟอร์ม → บันทึก Supabase + แจ้งเตือนอีเมล (Resend); LINE Messaging API เป็น optional |
| **ภาษา** | ไทยอย่างเดียว (ไม่มี i18n) |
| **แบรนด์** | ใช้โลโก้ + สีเดิม ต่อยอดเป็น design system |
| **ฟอนต์** | **IBM Plex Sans Thai** (Cadson Demak, OFL) self-host ผ่าน `next/font` — แทน Sukhumvit ที่ติดลิขสิทธิ์ |
| **Approval gate แรก** | **หน้า Home** ต้องทำก่อนให้ลูกค้าเช็คก่อน template อื่น |

## 3. สถาปัตยกรรม & เฟส (Architecture & Phases)

### โครง Repo (สอง life-cycle ใน repo เดียว)

```
natchayaclinic/
├── design/                  # เฟส 1: HTML + Tailwind CDN (ส่งลูกค้า approve)
│   ├── design-system.html   # color, typography, spacing, components ทั้งหมดในหน้าเดียว
│   ├── home.html            # ทำก่อนเป็น gate แรก
│   ├── service-detail.html
│   ├── article.html
│   ├── review.html
│   ├── listing.html
│   ├── womenplus.html
│   ├── contact.html
│   ├── about.html
│   ├── faq.html
│   └── news.html
│
└── app/                     # เฟส 2+: Next.js (หลัง approve)
    ├── (site)/              # หน้าเว็บ public
    ├── admin/               # Admin Panel
    ├── lib/supabase/
    └── ...
```

### Flow ทั้งโปรเจค

```
เฟส 1: HTML Design (design/)
   design-system.html → home.html (gate แรก, ลูกค้า approve)
   → template ที่เหลือ ~9 แบบ → ลูกค้า approve ครบ
        │  (Tailwind config ย้ายเข้า tailwind.config.js ของ Next.js)
        ▼
เฟส 2: Next.js Foundation
   setup Next.js + Tailwind (สี/ฟอนต์/spacing จาก design system)
   → แปลง HTML template เป็น React component
        │  (ขนานกัน 3 สาย)
        ├─ เฟส 3a: Supabase schema + Admin Panel
        ├─ เฟส 3b: Content migration (script → Supabase)
        └─ เฟส 3c: SEO (redirect map, schema markup, sitemap)
        ▼
เฟส 4: QA → Launch (baseline → deploy → เปิด 301 → submit sitemap → monitor 30 วัน)
```

**หลักการ:** Tailwind config (สี/ฟอนต์/spacing) ที่นิยามใน `design-system.html` คือ single source of truth — copy เข้า `tailwind.config.js` ของ Next.js เพื่อให้ดีไซน์เป๊ะ ไม่เดาสีใหม่.

## 4. Design System (HTML + Tailwind)

ไฟล์เดียว `design-system.html` เป็น single source of truth, ลูกค้าเปิดดูเห็นทุกองค์ประกอบ:

1. **Brand foundation** — โลโก้เดิม, color palette (สีแบรนด์เดิม + shade/state), typography (IBM Plex Sans Thai + type scale)
2. **Tailwind config block** — `<script>` กำหนด `tailwind.config` (colors/fontFamily/spacing) ไว้บนสุด → ก้อนนี้ย้ายเข้า Next.js
3. **Components library** (พร้อม state):
   - ปุ่ม: primary / secondary / LINE / โทร (+ hover/disabled)
   - Sticky CTA bar (มือถือ): โทร / LINE / จองคิว
   - Card: บริการ, บทความ, รีวิว (before/after)
   - Form fields + validation state
   - Navbar (ลิงก์จริง), Footer, Breadcrumb
   - Section header, accordion (FAQ), gallery, pagination

**หลักการดีไซน์:** mobile-first (ลูกค้ามาจากมือถือ/IG/LINE) · เน้น conversion (ปุ่มจอง/LINE เด่นตลอด) · โทนสะอาดน่าเชื่อถือแต่พรีเมียม · รองรับไทยเต็ม (line-height/การตัดคำ). ใช้ skill `ui-ux-pro-max` ช่วยเลือก palette/font-pairing/UX guideline ตอนลงมือ.

## 5. Representative Templates (~10 แบบ ครอบ 350 หน้า)

ทำเฉพาะ template ที่ layout ไม่ซ้ำ. **Home ทำก่อนเป็น gate แรก.**

| # | Template | ครอบหน้าจริง | ลักษณะ |
|---|----------|-------------|--------|
| 1 | **Home** (gate แรก) | 1 | Hero + บริการเด่น + รีวิว + บทความ + CTA จอง |
| 2 | **About** | ~2 | ทีมแพทย์, ใบรับรอง, เรื่องราวคลินิก |
| 3 | **Listing/Archive** (generic) | ทุกหน้า list | ใช้ซ้ำกับ บทความ/รีวิว/บริการ/สินค้า/ข่าว — filter + pagination |
| 4 | **Service detail** | 70 | รายละเอียด + ราคา + ก่อน/หลัง + CTA (ใช้ซ้ำกับ Women Plus / Liposuction / Product detail) |
| 5 | **Article detail** | 260 | long-form + สารบัญ + บทความเกี่ยวข้อง + schema Article |
| 6 | **Review detail** | 128 | before/after gallery + รีวิวเซเลบ + schema Review |
| 7 | **Women Plus landing** | 1 (+15) | sub-brand landing โทนเฉพาะ |
| 8 | **Contact** | 1 | ฟอร์มจอง→อีเมล + Google Maps + ปุ่ม LINE/โทร |
| 9 | **FAQ** | 1 | accordion + schema FAQPage |
| 10 | **News detail** | ~3–5 | ข่าว/กิจกรรมจริง (หลังยุบ duplicate) |

**การันตี:** ถ้า 10 หน้านี้ผ่าน → อีก 340 หน้าคือดึงข้อมูลจาก Supabase ใส่ template เดิม ไม่ต้องออกแบบใหม่.

## 6. Supabase Schema (Data Model)

ไทยภาษาเดียว → ไม่มี i18n column. ทุกตาราง content ใช้ convention ร่วม:
`id` · `slug` (unique) · `status` (draft/published) · `seo_title` · `seo_description` · `og_image` · `published_at` · `created_at` · `updated_at`

```
CONTENT
├── services          category(fk) · title · excerpt · body · price_info
│                     · featured_image · gallery(jsonb) · sort_order
│                     # ครอบ Service / Women Plus / Liposuction / สินค้า (เก็บเป็น category 'products')
├── articles          category(fk) · title · excerpt · body(rich) · cover
│                     · author · canonical_url   # canonical สำหรับหน้าที่ยุบรวม
├── reviews           title · patient_alias · service_id(fk) · before_image
│                     · after_image · gallery · body · is_featured   # เซเลบ
├── news              title · body · cover · event_date
├── faqs              question · answer · category · sort_order
└── doctors           name · title · specialty · photo · bio · sort_order

TAXONOMY
├── service_categories   slug · name · sort_order   # body/laser/facial/surgery/health/womenplus/products
└── article_categories   slug · name                # จัดกลุ่มแก้ keyword cannibalization

CONVERSION
└── leads             name · phone · line_id · service_interest · message
                      · source_page · status(new/contacted) · created_at

SYSTEM
├── redirects         old_path · new_path · status_code(301)   # ขับ middleware
└── site_settings     (singleton) phone · line_url · maps_embed · address
                      · social · home_hero · promo_banner       # ลูกค้าแก้เองได้
```

**Storage:** Supabase Storage buckets (`images/`, `reviews/`, `articles/`) เสิร์ฟผ่าน `next/image` (optimize + lazy load).

**Security (RLS):**
- Public (anon): อ่านได้เฉพาะ `status = published`; insert `leads` ได้
- Admin (authenticated): เขียน/แก้/ลบ ทุกตาราง; อ่าน `leads` ได้
- Auth: Supabase Auth (email/password พนักงานคลินิก)

**รองรับ goal:** `canonical_url` + `redirects` จัดการบทความซ้ำ/ยุบรวมโดยไม่เสีย SEO · `seo_*` ทุกตารางทำ schema markup ได้ · `is_featured` ดึงรีวิวเซเลบขึ้นหน้าแรก.

## 7. Admin Panel (`/admin` — สร้างเองบน Next.js + Supabase)

```
/admin
├── Dashboard          # lead ใหม่, content ล่าสุด, quick stats
├── บทความ / รีวิว / บริการ / สินค้า / ข่าว / FAQ / ทีมแพทย์
│     ├── List view    # ตาราง + ค้นหา + filter(draft/published) + pagination
│     └── Edit form    # fields + rich text + อัปโหลดรูป + SEO section + preview
├── Leads inbox        # ฟอร์มที่เข้ามา, mark "ติดต่อแล้ว", export
├── Redirects          # จัดการ 301 (auto + เพิ่มเอง)
└── ตั้งค่าเว็บ          # เบอร์, LINE, แผนที่, hero, แบนเนอร์โปร
```

- **Auth:** Supabase Auth + middleware + RLS (สองชั้น)
- **Rich text:** Tiptap (WYSIWYG, รองรับไทย) — พนักงานไม่ต้องรู้ HTML
- **อัปโหลดรูป:** drag-drop → Supabase Storage + gallery manager สำหรับ before/after
- **Preview:** Next.js draft mode ดูหน้าจริงก่อน publish

## 8. Conversion Flow

```
ลูกค้ากรอกฟอร์ม (Contact / sticky CTA)
   │ (validate ด้วย zod + honeypot กันบอท)
   ▼
Next.js Server Action
   ├──► บันทึก Supabase `leads`
   ├──► ส่งอีเมลแจ้งคลินิก (Resend)   ← แจ้งเตือนหลัก (MVP)
   └──► [optional] push LINE OA ผ่าน LINE Messaging API
```

**สำคัญ:** **LINE Notify ปิดบริการแล้ว (มี.ค. 2025) — ห้ามใช้.**
- แจ้งเตือนหลัก = อีเมล (Resend)
- ปุ่ม LINE บนเว็บ = deep-link เปิดแชต LINE OA ตรงๆ (ทำได้ทันที, ไม่ต้อง API) — สำคัญสุดเพราะลูกค้าคลินิกชอบทัก LINE เองมากกว่ากรอกฟอร์ม
- LINE Messaging API push = optional (ลูกค้าต้องมี LINE OA + setup channel)

## 9. Content Migration

```
แหล่งเดิม (3 ระบบ)
   ├── ได้ DB access  → export SQL → transform → import   # สะอาดสุด
   └── ไม่ได้         → ใช้ crawl เดิม (docs/crawl/*) → parse HTML
        │
        ▼ migration script (Node/TS)
   - clean HTML body (ลบ inline style เก่า, แก้ image path)
   - อัปโหลดรูป → Supabase Storage
   - generate slug + seo fields
   - insert ตาม schema
```

**Migration Mapping Sheet (artifact บังคับ):** CSV ที่ human ตัดสินใจต่อหน้า — **เก็บ / ยุบรวม / ทิ้ง** + `old_path → new_slug`:
- 65 หน้า "activity" = duplicate ของ reviews → ทิ้ง + redirect → `/reviews`
- บทความ beautycare หัวข้อซ้ำ (เช่น 369↔372, 541↔641) → ยุบรวมเป็น canonical + redirect ตัวซ้ำ
- ทุกแถวบันทึก `old_path → new_path` → ป้อนตาราง `redirects` อัตโนมัติ

## 10. SEO / Redirects

| งาน | วิธี |
|-----|------|
| **301 redirect** ทุก URL เก่า | ตาราง `redirects` → Next.js middleware (cache) ครอบ `/services/view/{id}`, `/review`, `/beautycare`, `/womenplus/*.php`, + ทั้งโดเมน liposuction |
| **Schema markup** | MedicalClinic/LocalBusiness (ทั้งเว็บ) + Article + Review + FAQPage + BreadcrumbList |
| **Technical SEO** | XML sitemap (auto จาก Supabase published) + robots.txt + canonical + OG tags |
| **Nav จริง** | เลิก `javascript:go_slide_to()` → ลิงก์ URL จริง |
| **Baseline** | GA4 + Search Console + เก็บ ranking/CWV baseline **ก่อนปิดเว็บเก่า** (บังคับ) — ใช้ skill `bsc-seo-site-audit` |

## 11. Deploy

- **Vercel** (Next.js) + **Supabase** (hosted) + **Resend** (email)
- Env vars ผ่าน Vercel · Preview deployment ให้ลูกค้ารีวิวทุก PR
- **Launch sequence:** เก็บ baseline → deploy → ชี้โดเมน → เปิด 301 ทั้งหมด → submit sitemap → monitor ranking/CWV/leads 30 วัน

## 12. Open Items (ต้อง confirm กับลูกค้า)

1. **Liposuction microsite** (`natchayaclinic-liposuction.com`) ยังใช้ไหม? (เข้าไม่ได้ตั้งแต่ 2026-06-02) → ถ้าเลิก = ยุบเป็น Service detail + redirect ทั้งโดเมน; ถ้าใช้ = เพิ่ม landing 1 แบบ
2. **LINE Messaging API** — ลูกค้ามี LINE Official Account + พร้อม setup channel ไหม (กระทบว่าจะเปิด push notification หรือใช้แค่อีเมล)
3. **DB access เว็บเดิม** — ได้ไหม (กระทบวิธี migration: SQL export vs HTML parse)
4. **สีแบรนด์เดิม** — โค้ดสีจริง (hex) สำหรับ design system
5. **Resend / โดเมนอีเมล** — ใช้โดเมนไหนส่งอีเมลแจ้งเตือน (ต้อง verify DNS)

## 13. ขอบเขตที่ไม่ทำ (Out of Scope)

- เขียนบทความใหม่ (งานต่อเนื่องทีม SEO/Content)
- ระบบสมาชิก / e-commerce เต็มรูป
- Native mobile app
- สองภาษา (ไทย/อังกฤษ)
- ระบบจองแบบ real-time slot / ปฏิทินแพทย์ (ใช้ฟอร์ม → อีเมล/LINE แทน)
