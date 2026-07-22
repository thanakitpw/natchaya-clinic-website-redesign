import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการทั้งหมด | ณัฐชญา คลินิก Natchaya Clinic",
  description:
    "รวมบริการของณัฐชญา คลินิก — กระชับสัดส่วน ยกกระชับใบหน้า ฟื้นฟูผิว โบท็อกซ์ เลเซอร์ ดูแลปัญหาปัสสาวะเล็ด และเลเซอร์นอนกรน ดูแลโดยทีมแพทย์เฉพาะทาง",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="border-b border-line bg-surface-alt">
          <div className="mx-auto max-w-content px-4 py-10 md:py-14">
            <nav className="text-xs text-ink-soft" aria-label="breadcrumb">
              <Link href="/" className="hover:text-brand-700">หน้าแรก</Link> <span className="px-1">/</span> <span className="text-ink">บริการทั้งหมด</span>
            </nav>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Services</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">บริการทั้งหมด</h1>
            <p className="mt-3 max-w-2xl text-ink-muted">
              ณัฐชญา คลินิก ดูแลตั้งแต่รูปร่าง ผิวพรรณ ไปจนถึงการฟื้นฟูสมรรถภาพ ด้วยเครื่องมือมาตรฐานและทีมแพทย์เฉพาะทาง
              ทุกหัตถการเริ่มต้นด้วยการประเมินจากแพทย์เสมอ
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">จองคิว / ปรึกษาแพทย์</Link>
              <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
                ปรึกษาฟรีทาง LINE
              </a>
            </div>
          </div>
        </section>

        <nav aria-label="หมวดบริการ" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-content overflow-x-auto px-4 py-4">
            <ul className="flex w-max gap-2 text-sm font-medium">
              <li><a href="#body-contouring" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">กระชับสัดส่วน</a></li>
              <li><a href="#face-lift" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">Face Lift</a></li>
              <li><a href="#facial-rejuvenation" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">Facial Rejuvenation</a></li>
              <li><a href="#botox" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">Botox</a></li>
              <li><a href="#laser" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">Laser</a></li>
              <li><a href="#facial-treatment" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">Facial Treatment</a></li>
              <li><a href="#repair" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">Repair</a></li>
              <li><a href="#clear-airway" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">นอนกรน</a></li>
              <li><a href="#exomind" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">Exomind</a></li>
              <li><a href="#iv-therapy" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">ดริปวิตามิน</a></li>
              <li><a href="#existing" className="inline-flex rounded-full border border-line px-4 py-2 whitespace-nowrap transition hover:border-brand-300 hover:text-brand-700">ศัลยกรรม &amp; อื่นๆ</a></li>
            </ul>
          </div>
        </nav>

        <section id="body-contouring" className="scroll-mt-24">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Body Contouring</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">กระชับสัดส่วน</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">ลดไขมันสะสมเฉพาะจุดและกระชับสัดส่วน โดยไม่ต้องผ่าตัด</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/nc-neo" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-nc-neo.jpg" alt="NC Neo สลายไขมันและสร้างกล้ามเนื้อ" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 inline-flex w-fit rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">ใหม่ล่าสุด</span>
                  <h3 className="font-semibold group-hover:text-brand-700">NC Neo</h3>
                  <p className="mt-1 text-sm text-ink-muted">สลายไขมันและสร้างกล้ามเนื้อในครั้งเดียว ด้วย RF + HIFEM+</p>
                </div>
              </Link>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-body-contouring.jpg" alt="Evolve เครื่องกระชับสัดส่วนและสลายไขมัน" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Evolve</h3>
                  <p className="mt-1 text-sm text-ink-muted">สลายไขมัน กระชับสัดส่วน ลดเลือนเซลลูไลท์ — 3 โหมดในเครื่องเดียว (Trim / Tite / Tone)</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-body.jpg" alt="RF กระชับสัดส่วนเฉพาะบริเวณ แขน หน้าท้อง ขา" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">RF ตัว (แขน, หน้าท้อง, ขา)</h3>
                  <p className="mt-1 text-sm text-ink-muted">คลื่นวิทยุกระชับสัดส่วนเฉพาะบริเวณ</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="face-lift" className="scroll-mt-24 bg-surface-alt">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Face Lift</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">หน้าเรียว กระชับ ปรับรูปหน้า</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">ยกกระชับใบหน้าโดยไม่ต้องผ่าตัด ตั้งแต่ระดับผิวจนถึงชั้นกล้ามเนื้อ</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/emface" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-emface.jpg" alt="EMFACE ยกกระชับใบหน้าโดยไม่ใช้เข็ม" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold group-hover:text-brand-700">EMFACE</h3>
                  <p className="mt-1 text-sm text-ink-muted">ยกกระชับถึงชั้นกล้ามเนื้อใบหน้า ไม่ต้องใช้เข็ม 20 นาที</p>
                </div>
              </Link>
              <Link href="/ulthera" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-ulthera.jpg" alt="Ulthera ยกกระชับผิวหน้าด้วยอัลตราซาวด์" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold group-hover:text-brand-700">Ulthera</h3>
                  <p className="mt-1 text-sm text-ink-muted">ยกกระชับถึงชั้น SMAS ด้วยเทคนิค SPT — แพทย์เห็นชั้นผิวก่อนยิง</p>
                </div>
              </Link>
              <Link href="/mint-thread" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-mint-thread.jpg" alt="ร้อยไหมปรับรูปหน้า" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold group-hover:text-brand-700">ร้อยไหมปรับรูปหน้า</h3>
                  <p className="mt-1 text-sm text-ink-muted">ยกกระชับใบหน้า เห็นผลตั้งแต่วันที่ทำ</p>
                </div>
              </Link>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-facial.jpg" alt="NC Lift ยกกระชับผิวหน้า กระตุ้นคอลลาเจน" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">NC Lift</h3>
                  <p className="mt-1 text-sm text-ink-muted">ยกกระชับผิว กระตุ้นคอลลาเจน มีระบบ cooling ระหว่างทำ ไม่ต้องพักหน้า</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="Ultralift ยกกระชับผิวหน้าแบบไม่ผ่าตัด" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Ultralift</h3>
                  <p className="mt-1 text-sm text-ink-muted">ยกกระชับผิวหน้าแบบไม่ผ่าตัด</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="EMLIFT ยกกระชับใบหน้าและใต้คาง โดยไม่ใช้เข็ม" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">EMLIFT</h3>
                  <p className="mt-1 text-sm text-ink-muted">ยกกระชับใบหน้าและใต้คาง โดยไม่ใช้เข็ม</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="facial-rejuvenation" className="scroll-mt-24">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Facial Rejuvenation</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ฟื้นฟูผิวหน้า</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">สกินบูสเตอร์และฟิลเลอร์ ฟื้นฟูคุณภาพผิวและเติมเต็มร่องลึก โดยแพทย์ผู้เชี่ยวชาญ</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/product-serum-generic.jpg" alt="Rejuran สกินบูสเตอร์กลุ่มโพลีนิวคลีโอไทด์" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Rejuran</h3>
                  <p className="mt-1 text-sm text-ink-muted">สกินบูสเตอร์กลุ่มโพลีนิวคลีโอไทด์ (PN) ฟื้นฟูคุณภาพผิว — มีหลายรุ่นให้แพทย์เลือกตามปัญหา</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/aftercare-skincare.jpg" alt="Vitaran สกินบูสเตอร์เพิ่มความชุ่มชื้นและความแข็งแรงของผิว" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Vitaran</h3>
                  <p className="mt-1 text-sm text-ink-muted">สกินบูสเตอร์กลุ่ม PN อีกทางเลือกหนึ่ง เน้นความชุ่มชื้นและความแข็งแรงของผิว</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="ฟิลเลอร์ Belotero จาก Merz เยอรมนี" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">ฟิลเลอร์ Belotero</h3>
                  <p className="mt-1 text-sm text-ink-muted">ฟิลเลอร์ไฮยาลูรอนิกแอซิดจาก Merz เยอรมนี เหมาะกับผิวบางและริ้วรอยตื้น</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="ฟิลเลอร์ Neauvia จากอิตาลี" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">ฟิลเลอร์ Neauvia</h3>
                  <p className="mt-1 text-sm text-ink-muted">ฟิลเลอร์ HA จากอิตาลี เชื่อมขวางด้วย PEG</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-health.jpg" alt="PRP หน้าและผม ใช้เกล็ดเลือดเข้มข้นจากเลือดของตัวเอง" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">PRP หน้า / ผม</h3>
                  <p className="mt-1 text-sm text-ink-muted">ใช้เกล็ดเลือดเข้มข้นจากเลือดของตัวเอง กระตุ้นการซ่อมแซมผิวและรากผม</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-ink-soft">* หัตถการฉีดทุกชนิดเป็นหัตถการทางการแพทย์ ต้องทำโดยแพทย์ผู้เชี่ยวชาญ · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p>
          </div>
        </section>

        {/* TODO: ยังไม่ใส่ BIENOX และ "NEW HBO" ลงหน้านี้ — BIENOX ยังไม่พบในรายชื่อที่ผ่าน อย. ไทย และ NEW HBO ยังไม่ทราบว่าคืออะไร ต้องให้คลินิกยืนยันก่อน */}
        <section id="botox" className="scroll-mt-24 bg-surface-alt">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Botox</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">โบทูลินัมท็อกซิน</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">
                ปรับรูปหน้า ลดริ้วรอยจากการหดตัวของกล้ามเนื้อ และดูแลปัญหาเหงื่อ — คิดตามจำนวน "ยูนิต" ที่แพทย์ประเมินให้เหมาะกับกล้ามเนื้อของแต่ละคน
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="BOTOX ของ Allergan จากสหรัฐอเมริกา" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">BOTOX® (Allergan)</h3>
                  <p className="mt-1 text-sm text-ink-muted">แบรนด์ต้นตำรับจากสหรัฐอเมริกา เป็นแบรนด์ที่มีการใช้ทางคลินิกมายาวนาน</p>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-facial.jpg" alt="XEOMIN ของ Merz เยอรมนี" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">XEOMIN®</h3>
                  <p className="mt-1 text-sm text-ink-muted">จาก Merz เยอรมนี — สูตรที่กรองโปรตีนเชิงซ้อนออก</p>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="NEURONOX ของ Medytox เกาหลีใต้" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">NEURONOX®</h3>
                  <p className="mt-1 text-sm text-ink-muted">จาก Medytox เกาหลีใต้ ใช้แพร่หลายและเป็นที่รู้จักในไทย</p>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-8">
              <h3 className="font-semibold">บริเวณที่นิยมทำ</h3>
              <ul className="mt-4 grid gap-2 text-sm text-ink-muted sm:grid-cols-2 lg:grid-cols-3">
                <li className="flex gap-2"><span className="text-brand-600">•</span>กราม — ปรับรูปหน้าให้เรียว / ผู้ที่นอนกัดฟัน</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>หน้าผาก — ริ้วรอยแนวนอน</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>หว่างคิ้ว — รอยขมวดคิ้ว</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>ตีนกา — ริ้วรอยหางตา</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>รักแร้ — ลดเหงื่อและกลิ่น</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>น่อง — ลดขนาดกล้ามเนื้อน่อง</li>
              </ul>
              <p className="mt-5 text-sm text-ink-muted">
                <strong className="text-ink">ยูนิตคืออะไร:</strong> ยูนิตคือหน่วยวัดความแรงทางชีวภาพ ไม่ใช่หน่วยวัดปริมาตร จำนวนยูนิตที่ต้องใช้ขึ้นอยู่กับขนาดและความแข็งแรงของกล้ามเนื้อของแต่ละคน ซึ่งแพทย์จะเป็นผู้ประเมิน
                และยูนิตของแต่ละยี่ห้อ<strong className="text-ink">ไม่สามารถเทียบกันแบบ 1:1 ได้ทุกยี่ห้อ</strong>
              </p>
              <p className="mt-4 text-sm text-ink-soft">
                โบทูลินัมท็อกซินเป็นยาที่ต้องสั่งจ่ายและฉีดโดยแพทย์ในสถานพยาบาลที่ได้รับอนุญาตเท่านั้น · ฤทธิ์เป็นแบบชั่วคราว · ผลลัพธ์และระยะเวลาที่ผลอยู่ได้แตกต่างกันในแต่ละบุคคล · คลินิกยินดีให้ตรวจสอบกล่องและเลขล็อตของผลิตภัณฑ์ก่อนฉีดทุกครั้ง
              </p>
            </div>
          </div>
        </section>

        <section id="laser" className="scroll-mt-24">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Laser</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เลเซอร์</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">ดูแลเม็ดสี ฝ้า รอยแดง หลุมสิว และกำจัดขน ด้วยเลเซอร์เฉพาะทางแต่ละชนิด</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/pico-enlighten" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-pico.jpg" alt="Pico Enlighten พิโคเซคันด์เลเซอร์" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold group-hover:text-brand-700">Pico Enlighten</h3>
                  <p className="mt-1 text-sm text-ink-muted">พิโคเลเซอร์ ดูแลเม็ดสี จุดด่างดำ รอยสัก และหลุมสิว (โหมด MLA)</p>
                </div>
              </Link>
              <Link href="/dual-yellow" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-dual-yellow.jpg" alt="Dual Yellow เลเซอร์ดูแลฝ้าและรอยแดง" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold group-hover:text-brand-700">Dual Yellow</h3>
                  <p className="mt-1 text-sm text-ink-muted">เลเซอร์สองความยาวคลื่น ดูแลฝ้า รอยแดง และเส้นเลือดฝอย</p>
                </div>
              </Link>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-laser.jpg" alt="Lumecca IPL ดูแลจุดด่างดำและสีผิวไม่สม่ำเสมอ" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Lumecca (IPL)</h3>
                  <p className="mt-1 text-sm text-ink-muted">ดูแลจุดด่างดำ กระแดด รอยแดงจากเส้นเลือดฝอย และสีผิวไม่สม่ำเสมอ</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/aftercare-skincare.jpg" alt="Plexr พลาสม่า ดูแลไฝ ติ่งเนื้อ กระเนื้อ" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Plexr</h3>
                  <p className="mt-1 text-sm text-ink-muted">พลาสม่า ดูแลไฝ ติ่งเนื้อ กระเนื้อ และหนังตาส่วนเกิน โดยไม่ต้องกรีด</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-facial.jpg" alt="Fractora Pin คลื่นวิทยุแบบแยกส่วนผ่านหัวเข็ม" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Fractora Pin</h3>
                  <p className="mt-1 text-sm text-ink-muted">คลื่นวิทยุแบบแยกส่วนผ่านหัวเข็ม ดูแลหลุมสิวและผิวหย่อนคล้อย</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-body.jpg" alt="Diolaze เลเซอร์กำจัดขน Diode Laser 810 nm" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Diolaze — เลเซอร์กำจัดขน</h3>
                  <p className="mt-1 text-sm text-ink-muted">Diode Laser 810 nm มีระบบทำความเย็นในตัว · รักแร้ / หนวด-เครา / ใบหน้า / แขน / ขา / บิกินี่</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="facial-treatment" className="scroll-mt-24 bg-surface-alt">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Facial Treatment</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ทรีตเมนต์ดูแลผิวหน้า</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">ทำความสะอาดผิวชั้นลึก บำรุง และปลอบผิว — เหมาะกับการดูแลอย่างต่อเนื่องสม่ำเสมอ</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-facial.jpg" alt="ดูดสิวเสี้ยนและ Cryo Massage" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">ดูดสิวเสี้ยน + Cryo Massage</h3>
                  <p className="mt-1 text-sm text-ink-muted">กำจัดสิ่งอุดตันในรูขุมขน แล้วปลอบผิวด้วยความเย็น</p>
                </div>
              </li>
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/aftercare-skincare.jpg" alt="Cryo หน้า และ Ultrasonic ทำความสะอาดผิวชั้นลึก" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Cryo หน้า / Ultrasonic</h3>
                  <p className="mt-1 text-sm text-ink-muted">ทำความสะอาดผิวชั้นลึกด้วยคลื่นเสียงความถี่สูง และปลอบผิวด้วยความเย็น</p>
                </div>
              </li>
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="Meso No Needle นำส่งสารบำรุงโดยไม่ต้องใช้เข็ม" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Meso No Needle</h3>
                  <p className="mt-1 text-sm text-ink-muted">นำส่งสารบำรุงเข้าสู่ผิวโดยไม่ต้องใช้เข็ม</p>
                </div>
              </li>
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/product-serum-generic.jpg" alt="Meso Vit C นำส่งวิตามินซีเข้าสู่ผิว" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Meso Vit C</h3>
                  <p className="mt-1 text-sm text-ink-muted">นำส่งวิตามินซีเข้าสู่ผิว ช่วยให้ผิวดูกระจ่างขึ้นและสม่ำเสมอขึ้น</p>
                </div>
              </li>
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="Fresh Peel ผลัดเซลล์ผิวด้วยกรด" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Fresh Peel</h3>
                  <p className="mt-1 text-sm text-ink-muted">ผลัดเซลล์ผิวด้วยกรด ดูแลสิวอุดตันและผิวหมองคล้ำ</p>
                </div>
              </li>
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-laser.jpg" alt="NC Plasma ดูแลปัญหาสิวและความมัน" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">NC Plasma</h3>
                  <p className="mt-1 text-sm text-ink-muted">ดูแลปัญหาสิว ลดความมัน และรอยแดงรอยดำ</p>
                </div>
              </li>
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/product-cleanser-generic.jpg" alt="Derma Grow โปรแกรมบำรุงฟื้นฟูผิวหน้า" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Derma Grow</h3>
                  <p className="mt-1 text-sm text-ink-muted">โปรแกรมบำรุงฟื้นฟูผิวหน้า</p>
                </div>
              </li>
              <li className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/product-supplement-generic.jpg" alt="Mask บำรุง เติมความชุ่มชื้น และปลอบผิว" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Mask — Collagen / Acne / Gold</h3>
                  <p className="mt-1 text-sm text-ink-muted">มาสก์บำรุง เติมความชุ่มชื้น และปลอบผิวหลังทำหัตถการ</p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/#contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">ปรึกษาแพทย์เพื่อเลือกโปรแกรมที่เหมาะกับผิวคุณ</Link>
            </div>
          </div>
        </section>

        <section id="repair" className="scroll-mt-24">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Repair</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ฟื้นฟูสมรรถภาพ</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">
                ดูแลปัญหาที่หลายคนไม่สะดวกใจจะพูดถึง ด้วยความเป็นส่วนตัวและมาตรฐานทางการแพทย์
                ทุกโปรแกรมเริ่มต้นด้วยการประเมินจากแพทย์เสมอ
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/nc-chair" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/service-nc-chair.jpg" alt="NC Chair เก้าอี้ HIFEM ดูแลปัญหาปัสสาวะเล็ด" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold group-hover:text-brand-700">NC Chair</h3>
                  <p className="mt-1 text-sm text-ink-muted">เก้าอี้ HIFEM ดูแลปัญหาปัสสาวะเล็ด — นั่งได้เลย ไม่ต้องถอดเสื้อผ้า</p>
                </div>
              </Link>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="NC Repair ใช้คลื่นวิทยุกระตุ้นการสร้างคอลลาเจน" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">NC Repair</h3>
                  <p className="mt-1 text-sm text-ink-muted">ใช้คลื่นวิทยุ (RF) กระตุ้นการสร้างคอลลาเจนและปรับสภาพเนื้อเยื่อ โดยไม่ต้องผ่าตัด</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/clinic-ambience.jpg" alt="ED Max โปรแกรมดูแลภาวะหย่อนสมรรถภาพในผู้ชาย" width={1333} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">ED Max / ED Max Plus</h3>
                  <p className="mt-1 text-sm text-ink-muted">โปรแกรมดูแลภาวะหย่อนสมรรถภาพทางเพศในผู้ชาย — ต้องได้รับการตรวจประเมินจากแพทย์ก่อน เนื่องจากภาวะนี้อาจเป็นสัญญาณของโรคอื่น</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/aftercare-skincare.jpg" alt="โปรแกรมดูแลสีผิวจุดซ่อนเร้น" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">โปรแกรมดูแลสีผิวจุดซ่อนเร้น</h3>
                  <p className="mt-1 text-sm text-ink-muted">ดูแลรอยคล้ำบริเวณจุดซ่อนเร้นภายนอก ให้สีผิวดูสม่ำเสมอขึ้น</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
              {/* Rainbow Fin: ตั้งใจเขียนแบบไม่ระบุกลไก/ผลลัพธ์ ตามคำแนะนำใน research/06-repair.md
                   จุดขายที่ปลอดภัยและจริงใจคือ "ให้บริการด้วยความเคารพ เป็นส่วนตัว ไม่ตัดสิน"
                   TODO: ต้องรู้ว่าใช้เครื่องอะไร + กลุ่มเป้าหมายจริง ก่อนเขียนรายละเอียดใดๆ */}
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/real/real-service-facial.jpg" alt="Rainbow Fin โปรแกรมดูแลเฉพาะบุคคล" width={1448} height={1086} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">Rainbow Fin</h3>
                  <p className="mt-1 text-sm text-ink-muted">โปรแกรมดูแลเฉพาะบุคคลสำหรับกลุ่มความหลากหลายทางเพศ ให้บริการด้วยความเคารพและเป็นส่วนตัว · แพทย์จะประเมินความเหมาะสมเป็นรายบุคคลก่อนเสมอ</p>
                  <Link href="/#contact" className="mt-4 inline-flex w-fit text-sm font-semibold text-brand-700 transition hover:text-brand-600">ปรึกษาแพทย์ →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clear-airway" className="scroll-mt-24 bg-surface-alt">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Clear Airway Program</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">เลเซอร์นอนกรน</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">
                ใช้พลังงานเลเซอร์กระตุ้นให้เนื้อเยื่อบริเวณเพดานอ่อนกระชับขึ้น ลดการสั่นสะเทือนซึ่งเป็นต้นเหตุของเสียงกรน
                ไม่ต้องผ่าตัด ไม่มีแผล ทำได้ที่บริเวณจมูก ช่องปาก หรือทั้งสองบริเวณ
              </p>
            </div>

            <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/clear-airway" className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-line transition hover:shadow-soft-lg">
                <Image src="/assets/generated/imagegen/consultation-general.jpg" alt="Clear Airway เลเซอร์ลดเสียงกรน" width={1250} height={1000} className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold group-hover:text-brand-700">Clear Airway</h3>
                  <p className="mt-1 text-sm text-ink-muted">เลเซอร์ลดเสียงกรน ไม่ต้องผ่าตัด ไม่มีแผล — ประเมินโดยแพทย์ก่อนทุกราย</p>
                </div>
              </Link>
            </div>

            {/* 🔴 คำเตือนนี้บังคับตาม research/07-clear-airway.md — ห้ามตัดออก */}
            <div className="rounded-2xl border-l-4 border-brand-500 bg-surface p-6 shadow-soft ring-1 ring-line sm:p-8">
              <h3 className="text-lg font-bold">⚠️ สิ่งที่ควรรู้ก่อนตัดสินใจ</h3>
              <p className="mt-3 text-ink-muted"><strong className="text-ink">การนอนกรน กับ ภาวะหยุดหายใจขณะหลับ (OSA) ไม่ใช่เรื่องเดียวกัน</strong></p>
              <p className="mt-3 text-ink-muted">
                เสียงกรนเกิดจากการสั่นสะเทือนของเนื้อเยื่อในทางเดินหายใจ แต่ภาวะหยุดหายใจขณะหลับคือภาวะที่ทางเดินหายใจปิดกั้นจนหยุดหายใจเป็นช่วง ๆ ขณะนอนหลับ
                ซึ่งเป็นภาวะทางการแพทย์ที่ส่งผลต่อหัวใจ ความดันโลหิต และสมองในระยะยาว
              </p>
              <p className="mt-3 text-ink-muted"><strong className="text-ink">โปรแกรม Clear Airway มุ่งลดเสียงกรน ไม่ใช่การรักษาภาวะหยุดหายใจขณะหลับ</strong></p>
              <p className="mt-4 font-semibold">หากคุณมีอาการเหล่านี้ ควรได้รับการตรวจการนอนหลับและประเมินโดยแพทย์ก่อน:</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li className="flex gap-2"><span className="text-brand-600">•</span>มีคนสังเกตเห็นว่าคุณหยุดหายใจเป็นช่วง ๆ ขณะหลับ</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>สะดุ้งตื่น หายใจเฮือก หรือสำลักขณะหลับ</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>ง่วงนอนมากผิดปกติในเวลากลางวัน หลับในระหว่างขับรถหรือทำงาน</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>ตื่นมาแล้วปวดศีรษะ ไม่สดชื่น ทั้งที่นอนครบชั่วโมง</li>
                <li className="flex gap-2"><span className="text-brand-600">•</span>มีความดันโลหิตสูง หรือรอบคอหนา</li>
              </ul>
              <p className="mt-4 text-sm text-ink-muted">
                คลินิกจะประเมินคุณก่อนเสมอ และหากสงสัยภาวะหยุดหายใจขณะหลับ แพทย์จะแนะนำให้ตรวจการนอนหลับหรือส่งต่อแพทย์เฉพาะทางก่อน
              </p>
              <Link href="/#contact" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">ปรึกษาแพทย์เพื่อประเมินก่อน</Link>
            </div>
          </div>
        </section>

        <section id="exomind" className="scroll-mt-24">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Exomind</p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ดูแลสมองและการพักผ่อน</h2>
                <p className="mt-4 text-ink-muted">
                  EXOMIND ใช้เทคนิคส่งคลื่นแม่เหล็กไฟฟ้าอ่อน ๆ (ExoTMS) เข้าไปกระตุ้นสมองส่วนหน้าที่เกี่ยวข้องกับอารมณ์และความคิด
                  เป็นโปรแกรมที่มุ่งส่งเสริมการผ่อนคลาย การพักผ่อน และความสดชื่นของสมอง
                </p>
                <ul className="mt-6 space-y-3 text-ink-muted">
                  <li className="flex gap-3"><svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>ผู้ที่นอนหลับยาก คิดฟุ้งซ่านก่อนนอน</li>
                  <li className="flex gap-3"><svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>ผู้ที่มีความเครียดสะสม</li>
                  <li className="flex gap-3"><svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>ผู้ที่รู้สึกสมองล้า โฟกัสงานได้ไม่ดี</li>
                  <li className="flex gap-3"><svg className="mt-0.5 h-5 w-5 flex-none text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>ไม่ใช้เข็ม ไม่ผ่าตัด ไม่ต้องพักฟื้น · ครั้งละประมาณ 25–30 นาที</li>
                </ul>
                {/* 🔴 บังคับตาม research/06-repair.md: ห้ามเคลมว่า "รักษาโรคซึมเศร้า" — ใช้ภาษาเชิงส่งเสริม/ผ่อนคลาย และต้องมีข้อความแนะนำให้พบแพทย์ */}
                <div className="mt-6 rounded-2xl bg-surface-alt p-5 text-sm text-ink-muted ring-1 ring-line">
                  EXOMIND เป็นโปรแกรมส่งเสริมการผ่อนคลาย <strong className="text-ink">ไม่ใช่การรักษาโรคทางจิตเวช</strong>
                  หากคุณมีอาการซึมเศร้า วิตกกังวล หรือนอนไม่หลับที่รบกวนการใช้ชีวิตประจำวัน <strong className="text-ink">ควรพบจิตแพทย์หรือแพทย์เฉพาะทางเพื่อรับการวินิจฉัยและรักษาที่เหมาะสม</strong>
                  โปรแกรมนี้ไม่สามารถทดแทนการรักษาทางการแพทย์ได้
                </div>
                <Link href="/#contact" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">ปรึกษาแพทย์</Link>
              </div>
              <div>
                <Image src="/assets/generated/imagegen/service-exomind.jpg" alt="EXOMIND โปรแกรมดูแลสมองด้วยคลื่นแม่เหล็กไฟฟ้า" width={640} height={520} className="w-full rounded-2xl object-cover shadow-soft-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* 🔴 หมวดนี้ re-position จาก "ฉีดผิวขาว" → "ดริปวิตามินเพื่อสุขภาพ" ตาม research/08-drip-vitamin.md
             เหตุผล: ถ้อยคำเดิมเข้าข่ายคำที่ สบส. ห้ามโดยตรง + กลูตาไธโอนฉีดไม่มีทะเบียน อย. ไทย
             TODO: ขอส่วนประกอบจริงของสูตร Aura Bright / Vitalite + เลขทะเบียนยา อย. ก่อนเขียนรายละเอียดเพิ่ม */}
        <section id="iv-therapy" className="scroll-mt-24 bg-surface-alt">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">IV Vitamin Therapy</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ดริปวิตามินเพื่อสุขภาพ</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">
                เติมวิตามินให้ร่างกายผ่านทางหลอดเลือดดำ สำหรับผู้ที่มีภาวะพร่องวิตามินจากการพักผ่อนน้อย ความเครียดสะสม หรือรับประทานอาหารไม่ครบหมู่
                โดยแพทย์เป็นผู้ประเมินและสั่งจ่ายทุกราย
              </p>
            </div>

            {/* 🔴 บังคับตาม research/08-drip-vitamin.md — G6PD screening ต้องอยู่บนหน้าเว็บ ไม่ใช่ footnote */}
            <div className="rounded-2xl border-l-4 border-brand-500 bg-surface p-6 shadow-soft ring-1 ring-line sm:p-8">
              <h3 className="text-lg font-bold">⚠️ ความปลอดภัยมาก่อน — เราตรวจก่อนดริปทุกราย</h3>
              <p className="mt-3 text-ink-muted">
                ก่อนรับบริการดริปวิตามินขนาดสูงทุกครั้ง คลินิกจะ<strong className="text-ink">ซักประวัติ ตรวจร่างกาย และตรวจคัดกรองภาวะพร่องเอนไซม์ G6PD</strong>
                เนื่องจากผู้ที่มีภาวะพร่องเอนไซม์ G6PD อาจเกิดภาวะเม็ดเลือดแดงแตกได้เมื่อได้รับวิตามินซีขนาดสูงทางหลอดเลือดดำ
                ซึ่งภาวะพร่อง G6PD พบได้ค่อนข้างบ่อยในคนไทย
              </p>
              <p className="mt-3 text-ink-muted">
                ผู้ที่มี<strong className="text-ink">โรคไต เคยเป็นนิ่วในไต อยู่ระหว่างตั้งครรภ์ หรือให้นมบุตร</strong> ควรแจ้งแพทย์ก่อนเสมอ
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                การให้วิตามินทางหลอดเลือดดำเป็นหัตถการทางการแพทย์ ต้องทำโดยแพทย์ในสถานพยาบาลที่ได้รับอนุญาตเท่านั้น · ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล
              </p>
              <Link href="/#contact" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">ปรึกษาแพทย์เพื่อประเมินก่อน</Link>
            </div>
          </div>
        </section>

        <section id="existing" className="scroll-mt-24">
          <div className="mx-auto max-w-content px-4 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">More</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">ศัลยกรรม และบริการอื่น ๆ</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">ณัฐชญา คลินิกยังให้บริการศัลยกรรม ดูดไขมัน และโปรแกรมสุขภาพ โดยทีมแพทย์เฉพาะทาง</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/beautycare#surgery" className="group rounded-2xl bg-surface-alt p-5 ring-1 ring-line transition hover:shadow-soft">
                <h3 className="font-semibold group-hover:text-brand-700">ศัลยกรรม</h3>
                <p className="mt-1 text-sm text-ink-muted">จมูก ตา คาง ดึงหน้า หน้าท้อง เสริมหน้าอก</p>
              </Link>
              <Link href="/beautycare#body" className="group rounded-2xl bg-surface-alt p-5 ring-1 ring-line transition hover:shadow-soft">
                <h3 className="font-semibold group-hover:text-brand-700">ดูดไขมัน / Body</h3>
                <p className="mt-1 text-sm text-ink-muted">ดูดไขมันเฉพาะจุด กระชับสัดส่วน</p>
              </Link>
              <Link href="/beautycare#health-program" className="group rounded-2xl bg-surface-alt p-5 ring-1 ring-line transition hover:shadow-soft">
                <h3 className="font-semibold group-hover:text-brand-700">Health Program</h3>
                <p className="mt-1 text-sm text-ink-muted">Chelation, ตรวจสุขภาพเชิงป้องกัน</p>
              </Link>
              <Link href="/beautycare" className="group rounded-2xl bg-surface-alt p-5 ring-1 ring-line transition hover:shadow-soft">
                <h3 className="font-semibold group-hover:text-brand-700">ดูบริการทั้งหมด (เดิม)</h3>
                <p className="mt-1 text-sm text-ink-muted">รวมบริการทุกหมวดของคลินิก</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-alt">
          <div className="mx-auto max-w-content px-4 pb-14">
            <div className="rounded-2xl bg-surface p-6 text-sm text-ink-muted shadow-soft ring-1 ring-line sm:p-8">
              <p><strong className="text-ink">หมายเหตุ:</strong> ข้อมูลบนหน้านี้มีวัตถุประสงค์เพื่อให้ความรู้เบื้องต้นเท่านั้น ไม่ใช่คำวินิจฉัยหรือคำแนะนำทางการแพทย์เฉพาะบุคคล</p>
              <p className="mt-2"><strong className="text-ink">ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</strong> ขึ้นกับสภาพผิว อายุ สภาพร่างกาย และการดูแลตนเองหลังทำ</p>
              <p className="mt-2"><strong className="text-ink">ควรเข้ารับการประเมินจากแพทย์ก่อนตัดสินใจเข้ารับบริการทุกครั้ง</strong></p>
            </div>
          </div>
        </section>

        <section className="bg-ink">
          <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-14 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">ไม่แน่ใจว่าควรเริ่มจากตรงไหน?</h2>
            <p className="max-w-xl text-white/80">ปรึกษาทีมแพทย์ของเราได้ฟรี เราจะประเมินและแนะนำแนวทางที่เหมาะกับคุณโดยเฉพาะ</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://line.me/ti/p/~natchayaclinic" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-line_green px-7 py-3 font-semibold text-white shadow-soft transition hover:brightness-95">ปรึกษาฟรีทาง LINE</a>
              <a href="tel:021025964" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-400 px-7 py-3 font-semibold text-ink shadow-soft transition hover:bg-brand-500">โทร 02-102-5964</a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative overflow-hidden bg-surface-alt bg-[url('/assets/footer-bg.png')] bg-cover bg-center">
        <div className="relative z-10 mx-auto grid max-w-content items-stretch gap-6 px-4 py-16 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line/70">
            <Image src="/assets/logo.png" alt="ณัฐชญา คลินิก Natchaya Clinic" width={129} height={53} className="h-12 w-auto self-start" />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">ณัฐชญา คลินิก คลินิกเสริมความงาม ดูแลรูปร่าง ผิวพรรณ และศัลยกรรม โดยทีมแพทย์เฉพาะทาง ด้วยเทคโนโลยีมาตรฐานและความปลอดภัยเป็นอันดับแรก เน้นผลลัพธ์ที่เป็นธรรมชาติ</p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-muted">
              <li className="flex items-start gap-2"><svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg><span>ทีมแพทย์เฉพาะทางมากประสบการณ์</span></li>
              <li className="flex items-start gap-2"><svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg><span>เทคโนโลยีมาตรฐาน ความปลอดภัยสูง</span></li>
              <li className="flex items-start gap-2"><svg className="mt-1 h-3 w-3 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg><span>ประเมินโดยแพทย์ก่อนทำทุกครั้ง</span></li>
            </ul>
            <div className="mt-auto flex items-center gap-2.5 pt-7">
              <a href="https://www.facebook.com/NatchayaClinic" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg></a>
              <a href="https://line.me/ti/p/~natchayaclinic" aria-label="LINE" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg></a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line/70">
            <div className="mb-5 flex items-center gap-4">
              <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">หมวดบริการ</h3>
              <span className="h-px flex-1 bg-gradient-to-r from-brand-300 to-transparent"></span>
            </div>
            <ul className="space-y-2.5 text-sm text-ink-muted">
              <li><Link href="/services#body-contouring" className="group flex items-center gap-2 transition hover:text-brand-700"><svg className="h-3 w-3 shrink-0 text-brand-500 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>กระชับสัดส่วน</Link></li>
              <li><Link href="/services#face-lift" className="group flex items-center gap-2 transition hover:text-brand-700"><svg className="h-3 w-3 shrink-0 text-brand-500 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>Face Lift · ยกกระชับใบหน้า</Link></li>
              <li><Link href="/services#laser" className="group flex items-center gap-2 transition hover:text-brand-700"><svg className="h-3 w-3 shrink-0 text-brand-500 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>Laser · เลเซอร์</Link></li>
              <li><Link href="/services#repair" className="group flex items-center gap-2 transition hover:text-brand-700"><svg className="h-3 w-3 shrink-0 text-brand-500 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>Repair · ฟื้นฟูสมรรถภาพ</Link></li>
              <li><Link href="/services#clear-airway" className="group flex items-center gap-2 transition hover:text-brand-700"><svg className="h-3 w-3 shrink-0 text-brand-500 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>เลเซอร์นอนกรน</Link></li>
              <li><Link href="/beautycare" className="group flex items-center gap-2 transition hover:text-brand-700"><svg className="h-3 w-3 shrink-0 text-brand-500 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5l8 7-8 7z"/></svg>ศัลยกรรม &amp; บริการอื่น</Link></li>
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl bg-surface p-7 shadow-soft ring-1 ring-line/70">
            <div className="mb-5 flex items-center gap-4">
              <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">ติดต่อเรา</h3>
              <span className="h-px flex-1 bg-gradient-to-r from-brand-300 to-transparent"></span>
            </div>
            <ul className="space-y-4 text-sm text-ink-muted">
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                <span>9 9-11 ถนนเสรีไทย แขวงรามอินทรา เขตคันนายาว กรุงเทพมหานคร 10230</span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>
                <span><a href="tel:021025964" className="transition hover:text-brand-700">02-102-5964, 02-102-5965</a><br />Hotline 084-422-2962, 086-400-0466</span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-line_green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.99 3 3 6.26 3 10.27c0 3.59 3.16 6.59 7.43 7.16.29.06.68.19.78.43.09.22.06.56.03.78l-.13.76c-.04.22-.18.88.77.48s5.12-3.02 6.99-5.17C20.2 13.08 21 11.74 21 10.27 21 6.26 17.01 3 12 3Z"/></svg>
                <a href="https://line.me/ti/p/~natchayaclinic" className="font-semibold text-line_green">LINE @natchayaclinic</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 bg-brand-700 py-3.5 text-center text-xs text-white/85">© 2026 · ณัฐชญา คลินิก (Natchaya Clinic) · สงวนลิขสิทธิ์ทุกประการ</div>
      </footer>
    </>
  );
}
