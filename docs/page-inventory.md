# Page Inventory — natchayaclinic.com (Crawl จริง 2026-06-02)

> ผลจากการ crawl เว็บเดิมจริงทั้งหมด (เฟส 0 Discovery)
> ใช้เป็นฐานในการตีราคา content migration + redirect map

## สรุปจำนวนหน้าจริง (ยืนยันแล้ว)

| ประเภทหน้า | URL pattern | จำนวนจริง | ช่วง ID |
|------------|-------------|-----------|---------|
| **บทความ Beauty Care** | `/beautycare/view/{id}` | **260** | 290–693 |
| **รีวิว** | `/review/view/{id}` | **128** | 176–593 |
| **บริการ (Services)** | `/services/view/{id}` | **70** | 89–633 |
| **สินค้า (Products)** | `/products/view/{id}` | **12** | 63–227 |
| **Women Plus — หน้าหลัก** | `/womenplus/*.php` | **15** (6 เมนู + 9 บริการ) | — |
| **Women Plus — บทความ** | `womenplus_articles.php` | **~40** (8 หน้า archive) | overlap กับ beautycare |
| **News/Activity จริง** | `/activity/view/{id}` | **~3–5** (ต้องเช็คเพิ่ม) | 180, 256, 258 |
| Static/landing | `/`, about, contact ฯลฯ | ~8 | — |
| **รวมประมาณ** | | **~530–540 หน้า** | |

### แยกหมวด Services (70 หน้า)
| หมวด | จำนวน |
|------|-------|
| Body | 16 |
| Treatment & Laser | 24 |
| Facial Design | 9 |
| Surgery | 16 |
| Health Program | 5 |

---

## 🔑 Insight สำคัญที่เจอจากการ crawl (กระทบ scope/ดีไซน์)

### 1. "News & Activity" ไม่มีเนื้อหาจริงของตัวเอง
หน้า `/activity/index/{N}` (65 หน้า) จริงๆ แล้ว **ดึงเนื้อหารีวิวชุดเดียวกัน** มาแสดง (ลิงก์ทั้งหมดชี้ไป `/review/view/{id}`) — เป็น duplicate content ของหน้า Reviews
- ⚠️ **ปัญหา SEO: duplicate content** — เว็บใหม่ควรยุบรวม ไม่ทำซ้ำ
- มี activity จริงแค่ ~3-5 ชิ้น (id 180/256/258) เป็นโปรโมชั่น/ข่าว

### 2. Women Plus ใช้คนละระบบจริง (PHP legacy)
URL แบบ `/womenplus/service.php?type=nc_repair` — คนละ engine กับเว็บหลัก
- บทความ Women Plus (id 682-692) **ทับช่วง ID กับ beautycare** → น่าจะดึงจาก DB บทความเดียวกัน เป็น subset filter เรื่องผู้หญิง
- ต้องรวมเข้าโครงสร้างใหม่ + redirect URL เก่าทั้งหมด

### 3. บทความ Beauty Care = ก้อนใหญ่สุด (260 หน้า)
ส่วนใหญ่เป็นบทความ SEO เรื่อง "ดูดไขมัน" (เหนียง/แขน/ต้นขา/หน้าท้อง) + ฉีดไขมัน + รีแพร์
- มีบทความ **หัวข้อซ้ำ/ใกล้เคียงกันมาก** (เช่น "ฉีดไขมันหน้า อันตรายหรือไม่" ปรากฏหลาย id: 541, 641; "ดูดไขมันใต้คาง ทางเลือกยกกระชับหน้า" id 369+372)
- ⚠️ **Keyword cannibalization** — หลายหน้าชิง keyword เดียวกัน → เว็บใหม่ควร consolidate/canonical
- โอกาส: ยุบบทความซ้ำ → ลดจำนวนหน้าจริงที่ต้อง migrate ได้พอสมควร (อาจเหลือ ~180-200 หน้าคุณภาพ)

### 4. รีวิวมีทั้ง before/after + รีวิวดารา/อินฟลู
มีรีวิวจากเซเลบ (อลิซ อาร์สยาม, ออม บลูเบอร์รี่, น้ำเพชร ฯลฯ) → asset มีค่าด้าน trust/conversion ควรเด่นในดีไซน์ใหม่

---

## Mapping เก่า → ใหม่ (กฎ redirect)

| โครงสร้างเก่า | โครงสร้างใหม่ (เสนอ) | วิธี redirect |
|----------------|------------------------|----------------|
| `/services/view/{id}` | `/services/{category}/{slug}` | 301 ต่อหน้า (map ตาม id) |
| `/products/view/{id}` | `/products/{slug}` | 301 ต่อหน้า |
| `/review/view/{id}` | `/reviews/{slug}` | 301 ต่อหน้า |
| `/beautycare/view/{id}` | `/articles/{slug}` | 301 ต่อหน้า (หน้าซ้ำ → canonical รวม) |
| `/beautycare/index/{N}` | `/articles?page={N}` | 301 |
| `/review/index/{N}` | `/reviews?page={N}` | 301 |
| `/activity/index/{N}` | → `/reviews` | 301 (ยุบ duplicate) |
| `/womenplus/service.php?type=X` | `/womenplus/{slug}` | 301 ต่อ type |
| `/womenplus/*.php` | `/womenplus/...` | 301 ต่อหน้า |

> Redirect map ฉบับเต็ม (ทุก URL → slug ใหม่) จะ generate หลัง lock IA + ตัดสินใจว่าจะยุบบทความซ้ำหรือไม่
> Raw URL + title ทั้งหมดเก็บไว้ที่ `docs/crawl/`

---

## ตัวเลขที่ใช้ปรับ Timeline

- เดิมประมาณ ~450-700 → **จริง ~530 หน้า** (ก่อนยุบซ้ำ)
- หลังยุบบทความซ้ำ/duplicate activity → คาดเหลือ **~350-400 หน้าที่ต้อง migrate จริง**
- งาน content migration ยังเป็น critical path → แนะนำทำขนานกับ dev และอาจใช้ script ช่วย import จาก DB เดิม (ถ้าเข้าถึง DB ได้)
