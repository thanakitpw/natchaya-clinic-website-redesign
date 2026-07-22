// Floating contact speed-dial (desktop). Open/close handled by Interactions via [data-fab].
export default function Fab() {
  return (
    <div data-fab className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 lg:flex">
      {/* Facebook Page */}
      <div className="fab-item flex items-center gap-3">
        <span className="fab-label rounded-full bg-ink/90 px-3 py-1.5 text-xs font-medium text-white shadow-soft">เพจ Facebook</span>
        <a href="#" aria-label="Facebook Page" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-soft-lg ring-1 ring-black/10 transition hover:brightness-110">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
        </a>
      </div>
      {/* LINE */}
      <div className="fab-item flex items-center gap-3">
        <span className="fab-label rounded-full bg-ink/90 px-3 py-1.5 text-xs font-medium text-white shadow-soft">แชท LINE</span>
        <a href="https://line.me/ti/p/~natchayaclinic" aria-label="LINE" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-line_green text-white shadow-soft-lg ring-1 ring-black/10 transition hover:brightness-105">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
        </a>
      </div>
      {/* Phone */}
      <div className="fab-item flex items-center gap-3">
        <span className="fab-label rounded-full bg-ink/90 px-3 py-1.5 text-xs font-medium text-white shadow-soft">โทร 02-102-5964</span>
        <a href="tel:021025964" aria-label="โทร" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-400 text-ink shadow-soft-lg ring-1 ring-black/10 transition hover:bg-brand-500">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
      </div>
      {/* Main toggle */}
      <button data-fab-toggle aria-label="ติดต่อสอบถาม" aria-expanded="false" className="inline-flex h-14 items-center gap-2 rounded-full bg-brand-400 pl-4 pr-5 text-ink shadow-soft-lg ring-1 ring-black/5 transition hover:bg-brand-500">
        <svg className="fab-plus h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
        <svg className="fab-x hidden h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
        <span className="fab-txt-closed text-sm font-semibold whitespace-nowrap">ติดต่อสอบถาม</span>
        <span className="fab-txt-open hidden text-sm font-semibold whitespace-nowrap">ปิดเมนู</span>
      </button>
    </div>
  );
}
