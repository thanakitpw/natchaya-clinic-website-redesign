# PRD — Natchaya Clinic Website Redesign

> เอกสารฉบับร่าง (Draft v0.1) · อัปเดต 2026-06-02 · เจ้าของ: Best Solutions
> สถานะ: รอ confirm scope/budget/deadline จากลูกค้า

---

## 1. ภาพรวม (Overview)

Redesign เว็บไซต์ Natchaya Clinic (คลินิกความงาม/ดูดไขมัน/เลเซอร์/นรีเวชความงาม ย่านเสรีไทย กรุงเทพฯ)
เป้าหมายคือ **รวมระบบเว็บที่กระจัดกระจาย 3 ระบบให้เป็นเว็บเดียว** ที่ทันสมัย, โหลดเร็ว, SEO ดี และเปลี่ยน traffic เป็นยอดจอง

### สภาพปัจจุบัน (As-is) — 3 ระบบแยกกัน
| ระบบ | URL | เนื้อหา | Tech ปัจจุบัน |
|------|-----|---------|----------------|
| เว็บหลัก | `natchayaclinic.com` | ความงาม/ดูดไขมัน/เลเซอร์ | Single-page scroll + detail pages |
| Women Plus | `natchayaclinic.com/womenplus` | นรีเวชความงาม/จุดซ่อนเร้น | PHP mini-site (`.php?type=`) แยกเมนู |
| Liposuction | `natchayaclinic-liposuction.com` | ดูดไขมันเฉพาะทาง | โดเมนแยก ⚠️ ปัจจุบันเข้าไม่ได้ — **ต้อง confirm** |

### ปัญหาหลักที่ต้องแก้
1. นำทางหน้า Home ใช้ `javascript:go_slide_to()` (anchor scroll) → ไม่มี URL จริง, แย่ต่อ SEO และ UX มือถือ
2. 3 ระบบ tech stack ไม่เหมือนกัน, แบรนด์/ดีไซน์ไม่สอดคล้อง
3. URL เก่าแบบ `.php?type=` บน Women Plus
4. ความเร็ว/Core Web Vitals ยังไม่ได้ optimize

---

## 2. เป้าหมาย & ตัวชี้วัด (Goals & Success Metrics)

| เป้าหมาย | ตัวชี้วัด (KPI) | Baseline | Target |
|----------|------------------|----------|--------|
| ดีไซน์/แบรนด์ใหม่ | Design system สม่ำเสมอทุกหน้า, brand guideline | — | ครบ 100% |
| SEO + ranking | Organic traffic, keyword positions, indexed pages | _เก็บก่อนเริ่ม_ | ไม่ตก + โต 20–30% ใน 3–6 เดือน |
| Mobile + speed | Core Web Vitals (LCP/INP/CLS), PageSpeed score | _เก็บก่อนเริ่ม_ | Mobile ≥ 90, ผ่าน CWV เขียวทั้ง 3 |
| ยอดจอง/ลูกค้า | Conversion rate (จอง/ทัก LINE/โทร), จำนวน lead | _เก็บก่อนเริ่ม_ | +20% leads |

> ⚠️ ต้องติดตั้ง GA4 + Search Console และเก็บ baseline ก่อนปิดเว็บเก่า

---

## 3. ขอบเขต (Scope) — ✅ ยืนยันแล้ว: รวมทั้ง 3 ระบบ

### In scope
- รวมเว็บหลัก + Women Plus + Liposuction เป็นเว็บเดียว (โครงสร้าง URL เดียวกัน)
- Migrate เนื้อหาเดิม **ทั้งหมด** + รักษา SEO + ทำ 301 redirect map
- ดีไซน์ใหม่ทั้งหมด (responsive, mobile-first)
- ระบบจัดการเนื้อหา (CMS) ให้ลูกค้าอัปเดตบทความ/รีวิว/บริการเองได้
- Conversion features: ระบบจองคิว/นัดหมาย, ปุ่ม LINE/โทร, ฟอร์มติดต่อ

### Out of scope (เบื้องต้น — ปรับได้)
- เขียนบทความใหม่ (เป็นงานต่อเนื่องของทีม SEO/Content)
- ระบบสมาชิก/e-commerce เต็มรูปแบบ (ถ้าต้องการแยกเฟส)
- แอปมือถือ (native app)

---

## 4. แผนผังเว็บ & คลังหน้า (Sitemap & Page Inventory)

### โครงสร้างใหม่ที่เสนอ (Proposed IA)
```
/                         หน้าแรก (มี URL จริงแต่ละ section)
/about                    เกี่ยวกับเรา + ทีมแพทย์ + ใบรับรอง
/services                 รวมบริการ (5 หมวด)
  /services/body          ดูดไขมัน/รูปร่าง
  /services/laser         Treatment & Laser
  /services/facial        Facial Design
  /services/surgery       ศัลยกรรม
  /services/health        Health Program
  /services/[slug]        หน้า detail แต่ละบริการ
/womenplus                Women Plus (นรีเวชความงาม) — landing
  /womenplus/[slug]       NC Repair, O-Shot, G-Shot, PRP, Botox ฯลฯ
/liposuction              ดูดไขมัน (รวม microsite เดิม)
/products                 สินค้า
  /products/[slug]
/reviews                  รีวิว (เดิม 26 หน้า)
  /reviews/[slug]
/articles (beautycare)    บทความ (เดิม 52 หน้า)
  /articles/[slug]
/news                     ข่าว/กิจกรรม
  /news/[slug]
/faq                      Q&A (จาก Women Plus)
/contact                  ติดต่อ + แผนที่ + ฟอร์ม + จองคิว
```

### จำนวนหน้าจริง ✅ (crawl แล้ว 2026-06-02 — ดู `docs/page-inventory.md` + `docs/crawl/`)
| ประเภท | จำนวนจริง | หมายเหตุ |
|--------|-----------|----------|
| Static/landing | ~8 | Home, About, Contact ฯลฯ |
| Service detail | **70** | Body 16 / Laser 24 / Facial 9 / Surgery 16 / Health 5 |
| Products | **12** | |
| Reviews | **128** | IDs 176–593 (มีรีวิวเซเลบ asset ดี) |
| Articles (Beauty Care) | **260** | IDs 290–693 ⚠️ **ก้อนใหญ่สุด** มีหัวข้อซ้ำเยอะ |
| Women Plus | **15 + ~40 บทความ** | PHP legacy, บทความทับ DB กับ beautycare |
| News/Activity จริง | **~3–5** | ที่เหลือเป็น duplicate ของ Reviews |
| **รวมจริง** | **~530 หน้า** | หลังยุบหน้าซ้ำ คาดเหลือ migrate จริง **~350–400** |

> 🔑 **Insight สำคัญ:** (1) "News/Activity" 65 หน้า จริงๆ คือ duplicate ของ Reviews → ยุบได้; (2) บทความ Beauty Care มี keyword cannibalization สูง → consolidate ได้; (3) Women Plus ใช้ PHP คนละระบบ ต้อง redirect ทุก URL

---

## 5. Functional Requirements

### 5.1 ทั่วไป
- Responsive ทุก breakpoint (mobile-first), รองรับภาษาไทยเต็มรูปแบบ
- Navigation เป็นลิงก์จริงทุกอัน (เลิกใช้ anchor scroll)
- Sticky CTA: ปุ่มโทร / LINE / จองคิว ติดตามตลอด (โดยเฉพาะมือถือ)

### 5.2 Conversion
- ระบบจองคิว/นัดหมายออนไลน์ (เลือกบริการ/วัน/เวลา) → ส่งเข้าอีเมล/LINE Notify ของคลินิก
- ฟอร์มปรึกษา/ขอราคา พร้อม validation
- ปุ่ม LINE OA, โทร, แผนที่ Google Maps ฝังในหน้า contact

### 5.3 Content/CMS
- บทความ, รีวิว, บริการ, สินค้า, ข่าว → จัดการผ่าน CMS (เพิ่ม/แก้/ลบ, อัปโหลดรูป)
- รองรับ before/after gallery สำหรับรีวิว
- SEO fields ต่อหน้า (title, meta description, OG image, schema)

### 5.4 SEO (สำคัญสุดเพราะมีเนื้อหาเก่าเยอะ)
- 301 redirect map จาก URL เก่า → ใหม่ ทุกหน้า (กัน ranking ตก)
- Schema markup: MedicalClinic / LocalBusiness / Article / Review / FAQ
- XML sitemap, robots.txt, canonical
- รักษา/ปรับ title-meta จากหน้าเดิมที่ติดอันดับ

---

## 6. ข้อเสนอด้านเทคนิค (Tech Recommendation)

| ส่วน | เสนอ | เหตุผล |
|------|------|--------|
| Frontend | **Next.js (App Router) + Tailwind** | SEO (SSR/SSG), เร็ว, deploy ง่าย, รองรับ i18n |
| Hosting | **Vercel** | Core Web Vitals ดี, preview deploy, ISR |
| CMS | Headless (เช่น Sanity / Payload / Strapi) | ลูกค้าแก้เนื้อหาเอง, รองรับบทความจำนวนมาก |
| Analytics | GA4 + Search Console + Vercel Analytics | วัด KPI ครบ |

> ปรับได้ตามงบ/ความถนัดทีม dev — รอ confirm

---

## 7. Timeline (ประมาณการ)

> สมมติทีม: 1 PM/SEO + 1 Designer + 1–2 Dev · เนื้อหาจริง ~530 หน้า (migrate จริง ~350–400 หลังยุบซ้ำ)
> ✅ เฟส 0 crawl เสร็จแล้ว — ตัวเลขด้านล่างปรับตามจำนวนจริง

| เฟส | งาน | ระยะเวลา | Deliverable |
|-----|-----|----------|-------------|
| **0. Discovery & Audit** | Crawl เว็บเดิมทั้ง 3 ระบบ, นับหน้าจริง, เก็บ SEO baseline (GA4/GSC), site audit, content inventory | 1–1.5 สัปดาห์ | Page inventory + redirect map (ร่าง) + audit report |
| **1. Strategy & IA** | Sitemap ใหม่, keyword mapping, content model, requirement สรุป | 1 สัปดาห์ | Sitemap + IA + PRD final |
| **2. Design** | Wireframe → UI design (home + template หลักทุกประเภท) + design system | 2.5–3.5 สัปดาห์ | Figma + design system + prototype |
| **3. Development** | Setup stack/CMS, สร้าง template, ระบบจอง/ฟอร์ม, SEO/schema | 4–6 สัปดาห์ | Staging site ใช้งานได้ |
| **4. Content Migration** | ย้าย ~450–700 หน้า เข้า CMS, ใส่รูป, SEO fields *(ทำขนานกับเฟส 3 ได้)* | 3–5 สัปดาห์ | เนื้อหาครบบน staging |
| **5. QA & SEO check** | ทดสอบ cross-browser/มือถือ, ตรวจ redirect, schema, speed, fix bug | 1.5–2 สัปดาห์ | QA report ผ่าน |
| **6. Launch** | Deploy production, เปิด 301 redirects, submit sitemap, monitor | 0.5–1 สัปดาห์ | เว็บใหม่ live |
| **7. Post-launch** | Monitor ranking/CWV/leads, fix, ปรับจูน 30 วัน | ต่อเนื่อง | รายงานผล |

**รวมประมาณ ~12–16 สัปดาห์ (≈ 3–4 เดือน)** ขึ้นกับจำนวนเนื้อหาจริงและความเร็ว approve

---

## 8. คำถามค้าง / Assumptions ที่ต้อง confirm กับลูกค้า

1. **Liposuction microsite ยังใช้อยู่ไหม?** (ตอนนี้เข้าไม่ได้) — ถ้าเลิกแล้ว ต้องทำ redirect ทั้งโดเมน
2. **Deadline / วันเปิดตัว** ที่ต้องการ?
3. **งบประมาณ** กรอบเท่าไหร่ (กระทบ tech/CMS/ขนาดทีม)
4. มี **brand guideline / โลโก้ / สีแบรนด์** เดิมไหม หรือทำใหม่หมด?
5. เข้าถึง **GA4, Search Console, hosting, โดเมน, ฐานข้อมูลเดิม** ได้ไหม (จำเป็นต่อ migration)
6. มีระบบ **จองคิว/CRM** เดิมที่ต้อง integrate ไหม
7. ต้องการ **2 ภาษา** (ไทย/อังกฤษ) ไหม
8. ใครเป็นคนดูแลเนื้อหาหลัง launch (กระทบการเลือก CMS)
