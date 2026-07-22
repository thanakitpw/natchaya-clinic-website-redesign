import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการ Beauty Care | ณัฐชญา คลินิก Natchaya Clinic",
  description: "บริการ Beauty Care การดูแลความงามของ ณัฐชญา คลินิก — กระชับสัดส่วน สลายไขมัน ศัลยกรรม ทรีตเมนต์ & เลเซอร์ ออกแบบใบหน้า ร้อยไหมปรับรูปหน้า และโปรแกรมดูแลสุขภาพ ดูแลโดยทีมแพทย์เฉพาะทาง",
};

export default function BeautycarePage() {
  return (
    <main>
      {/* ============ PAGE HERO / BREADCRUMB ============ */}
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-10 md:py-14">
          <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <span className="text-ink">บริการ (Beauty Care)</span>
          </nav>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Beauty Care</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">บริการดูแลความงาม</h1>
          <p className="mt-3 max-w-2xl text-ink-muted">การดูแลความงามที่ครอบคลุมและตรงจุด ตั้งแต่กระชับสัดส่วน ศัลยกรรม ทรีตเมนต์ &amp; เลเซอร์ ออกแบบใบหน้า ไปจนถึงโปรแกรมดูแลสุขภาพ ดูแลโดยทีมแพทย์เฉพาะทาง</p>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="mx-auto max-w-content px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-ink-muted">
            ณัฐชญาคลีนิคไม่ใช่แค่เพียง Body Center ที่ดูแลรูปร่าง ผิวพรรณ และความงามเฉพาะภายนอกเท่านั้น
            แต่ยังดูแลคุณให้สวยสุขภาพดี พร้อมส่งประกายความงามจากภายใน ด้วยศาสตร์ เทคโนโลยี
            และนวัตกรรมทางด้าน Anti Aging ที่คัดสรรมาจากทุกมุมโลก เลือกหมวดบริการที่คุณสนใจด้านล่าง
            แล้วปรึกษาทีมแพทย์ของเราได้ฟรี
          </p>
        </div>
      </section>

      {/* ============ BODY ============ */}
      <section id="body" className="scroll-mt-24 mx-auto max-w-content px-4 pb-14">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Body</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">กระชับสัดส่วน / สลายไขมัน</h2>
          <p className="mt-2 text-ink-muted">ดูแลรูปร่างและกระชับสัดส่วนด้วยนวัตกรรมสลายไขมันและยกกระชับ</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-health.jpg" alt="Evolve" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Evolve</h3><p className="mt-1 text-sm text-ink-muted">กระชับสัดส่วนแบบไม่ต้องผ่าตัด</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="RF ตัว (แขน, หน้าท้อง, ขา)" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">RF ตัว (แขน, หน้าท้อง, ขา)</h3><p className="mt-1 text-sm text-ink-muted">คลื่นวิทยุกระชับสัดส่วนเฉพาะจุด</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-body.jpg" alt="Barbie&rsquo;s leg" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Barbie&rsquo;s leg</h3><p className="mt-1 text-sm text-ink-muted">ดูแลขาเรียวสวยกระชับได้รูป</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="Fractora Plus" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Fractora Plus</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวด้วยพลังงาน RF</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-body.jpg" alt="ดูดไขมันเหนียง แขน ขา หน้าท้อง" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">ดูดไขมันเหนียง แขน ขา หน้าท้อง</h3><p className="mt-1 text-sm text-ink-muted">ดูดไขมันเฉพาะจุดเพื่อรูปร่างที่ได้สัดส่วน</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-health.jpg" alt="เครื่องนวดสลายไขมัน G 5" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">เครื่องนวดสลายไขมัน G 5</h3><p className="mt-1 text-sm text-ink-muted">นวดกระชับและสลายไขมัน</p></div></div>
        </div>
      </section>

      {/* ============ SURGERY ============ */}
      <section id="surgery" className="scroll-mt-24 bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-14">
          <div className="mb-7 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Surgery</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ศัลยกรรมความงาม</h2>
            <p className="mt-2 text-ink-muted">ศัลยกรรมโดยศัลยแพทย์เฉพาะทาง เพื่อผลลัพธ์ที่ปลอดภัยและเป็นธรรมชาติ</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-nose.jpg" alt="Nose surgery / Rhinoplasty" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Nose surgery / Rhinoplasty</h3><p className="mt-1 text-sm text-ink-muted">เสริมจมูกให้รับกับใบหน้าโดยศัลยแพทย์</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-eyelid.jpg" alt="Eyelid surgery / Blepharoplasty" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Eyelid surgery / Blepharoplasty</h3><p className="mt-1 text-sm text-ink-muted">ทำตาสองชั้น แก้หนังตาตก</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-face.jpg" alt="Chin implantation" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Chin implantation</h3><p className="mt-1 text-sm text-ink-muted">เสริมคางให้ได้รูปหน้าที่สมส่วน</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-facial.jpg" alt="Face lift" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Face lift</h3><p className="mt-1 text-sm text-ink-muted">ศัลยกรรมดึงหน้าลดความหย่อนคล้อย</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-body.jpg" alt="Abdominoplasty" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Abdominoplasty</h3><p className="mt-1 text-sm text-ink-muted">ตกแต่งหน้าท้องให้เรียบกระชับ</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-surgery.jpg" alt="Fat transfer" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Fat transfer</h3><p className="mt-1 text-sm text-ink-muted">ฉีดไขมันตัวเองเติมเต็มบริเวณที่ต้องการ</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-nose.jpg" alt="Alar reduction surgery" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Alar reduction surgery</h3><p className="mt-1 text-sm text-ink-muted">ลดปีกจมูกให้รับกับใบหน้า</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-surgery.jpg" alt="เสริมหน้าอก (Breast augmentation)" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">เสริมหน้าอก (Breast augmentation)</h3><p className="mt-1 text-sm text-ink-muted">เสริมหน้าอกสวยอย่างเป็นธรรมชาติ พร้อมคำแนะนำเรื่องทรง/ซีซี</p></div></div>
          </div>
        </div>
      </section>

      {/* ============ TREATMENT & LASER ============ */}
      <section id="treatment-laser" className="scroll-mt-24 mx-auto max-w-content px-4 py-14">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Treatment &amp; Laser</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ทรีตเมนต์ &amp; เลเซอร์</h2>
          <p className="mt-2 text-ink-muted">โปรแกรมหน้าใส รักษาสิว ยกกระชับ และกำจัดขนด้วยเทคโนโลยีเลเซอร์</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="PICO Enlighten" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">PICO Enlighten</h3><p className="mt-1 text-sm text-ink-muted">Picosecond laser หน้ากระจ่างใส ลดฝ้ากระ รักษาหลุมสิว ลบรอยสัก</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="Dual Yellow" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Dual Yellow</h3><p className="mt-1 text-sm text-ink-muted">เลเซอร์ดูแลผิวหน้า ลดรอยแดงและฝ้ากระ</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="Diode LASER" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Diode LASER</h3><p className="mt-1 text-sm text-ink-muted">กำจัดขนถาวรด้วยเลเซอร์คลื่น 808nm</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="Ulthera SPT" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Ulthera SPT</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวลึกถึงชั้น SMAS</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="Fractora" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Fractora</h3><p className="mt-1 text-sm text-ink-muted">ฟื้นฟูผิวและลดหลุมสิวด้วย RF Microneedle</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-facial.jpg" alt="Meso vit C" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Meso vit C</h3><p className="mt-1 text-sm text-ink-muted">เมโสวิตามินซีบำรุงผิวให้กระจ่างใส</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-facial.jpg" alt="Meso botox" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Meso botox</h3><p className="mt-1 text-sm text-ink-muted">เมโสโบทอกซ์ลดความมัน กระชับรูขุมขน</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-face.jpg" alt="NC Lift" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">NC Lift</h3><p className="mt-1 text-sm text-ink-muted">โปรแกรมยกกระชับใบหน้า</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-facial.jpg" alt="ดูดสิวเสี้ยน + Cryo massage" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">ดูดสิวเสี้ยน + Cryo massage</h3><p className="mt-1 text-sm text-ink-muted">ทำความสะอาดผิวลึกและเพิ่มความชุ่มชื้น</p></div></div>
        </div>
      </section>

      {/* ============ FACIAL DESIGN ============ */}
      <section id="facial-design" className="scroll-mt-24 bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-14">
          <div className="mb-7 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Facial Design</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ออกแบบใบหน้า / เติมเต็ม / ร้อยไหมปรับรูปหน้า</h2>
            <p className="mt-2 text-ink-muted">เติมเต็มและปรับรูปหน้าให้ได้สัดส่วนโดยไม่ต้องผ่าตัด</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-face.jpg" alt="HA Filler" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">HA Filler</h3><p className="mt-1 text-sm text-ink-muted">ฉีดสารเติมเต็มไฮยาลูโรนิค แก้ร่องลึก เห็นผลทันที</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-facial.jpg" alt="ร้อยไหมปรับรูปหน้า" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">ร้อยไหมปรับรูปหน้า</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับและปรับรูปหน้า</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-face.jpg" alt="Facetite &amp; Necktite" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Facetite &amp; Necktite</h3><p className="mt-1 text-sm text-ink-muted">กระชับใบหน้าและลำคอด้วยพลังงาน RF</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-surgery.jpg" alt="Fat transfer ฉีดไขมันเติมเต็มใบหน้า" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Fat transfer ฉีดไขมันเติมเต็มใบหน้า</h3><p className="mt-1 text-sm text-ink-muted">เติมเต็มใบหน้าด้วยไขมันตัวเอง</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-review-face.jpg" alt="Meso Fat – Liporase (Korea)" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Meso Fat – Liporase (Korea)</h3><p className="mt-1 text-sm text-ink-muted">เมโสแฟตสลายไขมันเฉพาะจุด</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-laser.jpg" alt="Fractora firm" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Fractora firm</h3><p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวหน้าด้วย RF</p></div></div>
          </div>
        </div>
      </section>

      {/* ============ HEALTH PROGRAM ============ */}
      <section id="health-program" className="scroll-mt-24 mx-auto max-w-content px-4 py-14">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Health Program</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เวชศาสตร์ชะลอวัย / ดูแลสุขภาพ</h2>
          <p className="mt-2 text-ink-muted">ดูแลสุขภาพและความงามจากภายในด้วยศาสตร์ Anti Aging</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-health.jpg" alt="Chelation Therapy" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Chelation Therapy</h3><p className="mt-1 text-sm text-ink-muted">ล้างสารพิษและโลหะหนักออกจากหลอดเลือด</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-health.jpg" alt="Ondamed" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Ondamed</h3><p className="mt-1 text-sm text-ink-muted">คลื่นพลังงานบำบัดปรับสมดุลร่างกาย</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-health.jpg" alt="Electro Interstitial Scan (EIS)" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Electro Interstitial Scan (EIS)</h3><p className="mt-1 text-sm text-ink-muted">ตรวจวิเคราะห์สุขภาพระดับเซลล์</p></div></div>
          <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-health.jpg" alt="Toxic Mental in Urine Test" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Toxic Mental in Urine Test</h3><p className="mt-1 text-sm text-ink-muted">ตรวจหาโลหะหนักตกค้างในร่างกาย</p></div></div>
        </div>
      </section>

      {/* ============ MASK ============ */}
      <section id="mask" className="scroll-mt-24 bg-surface-alt">
        <div className="mx-auto max-w-content px-4 py-14">
          <div className="mb-7 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Mask</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">มาส์กบำรุงผิว</h2>
            <p className="mt-2 text-ink-muted">มาส์กฟื้นบำรุงผิวหลังทรีตเมนต์เพื่อผิวเนียนใส</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-facial.jpg" alt="Mask Collagen" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Mask Collagen</h3><p className="mt-1 text-sm text-ink-muted">มาส์กคอลลาเจนฟื้นบำรุงผิว</p></div></div>
            <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line"><Image src="/assets/generated/real/real-service-facial.jpg" alt="Acne Golden Acerola" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><h3 className="font-semibold">Acne Golden Acerola</h3><p className="mt-1 text-sm text-ink-muted">มาส์กดูแลผิวเป็นสิวให้กระจ่างใส</p></div></div>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">ไม่แน่ใจว่าควรเริ่มจากบริการไหน?</h2>
          <p className="max-w-xl text-white/80">ปรึกษาทีมแพทย์ของเราได้ฟรี เราจะช่วยวิเคราะห์ปัญหาและแนะนำโปรแกรมที่เหมาะกับคุณ</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
            <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
          </div>
        </div>
      </section>
    </main>
  );
}
