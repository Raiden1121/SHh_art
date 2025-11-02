// Courses.jsx
import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const COURSES = [
  {
    id: "texture",
    title: "肌理畫課程",
    desc: "學習使用多種媒材創造豐富的質感與層次",
    bullets: ["適合初學者", "12堂課程", "含材料"],
    price: "NT$ 7,200",
    cover:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200",
    featured: true,
  },
  {
    id: "oil-pastel",
    title: "油畫棒課程",
    desc: "探索油畫棒的獨特表現力與色彩魅力",
    bullets: ["適合各程度", "10堂課程", "材料另計"],
    price: "NT$ 5,500",
    cover:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200",
  },
  {
    id: "watercolor",
    title: "水彩課程",
    desc: "掌握水彩的流動性與透明感",
    bullets: ["小班教學", "10堂課程", "含畫具"],
    price: "NT$ 5,500",
    cover: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200",
  },
  {
    id: "group",
    title: "團體課程",
    desc: "企業或團體專屬課程規劃",
    bullets: ["客製化內容", "彈性時間", "到府服務"],
    price: "洽詢報價",
    cover:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200",
  },
];

const AUTO_MS = 8000;
const PAUSE_MS = 12000;

export default function Courses() {
  const sortedCourses = [...COURSES].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const pauseUntilRef = useRef(0);
  const hoverRef = useRef(false);

  const total = sortedCourses.length;
  const prev = () => setIdx((p) => (p - 1 + total) % total);
  const next = () => setIdx((p) => (p + 1) % total);

  // 動態注入「外殼流動邊匡」CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "animated-border-css";
    style.textContent = `
      @keyframes colorFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animated-border {
        position: relative;
        isolation: isolate; /* 建立獨立層疊上下文 */
        border-radius: 20px;
        padding: 6px; /* 邊匡厚度 */
        background: linear-gradient(
          135deg,
          #ff8800 0%,
          #ffaa00 25%,
          #ff6b4d 50%,
          #ff3366 75%,
          #ff1493 100%
        );
        background-size: 200% 200%;
        animation: colorFlow 4s ease-in-out infinite;
      }
      /* 流動光暈層（跟邊框顏色同步、一起流動） */
      .animated-border::before {
        content: "";
        position: absolute;
        inset: -8px; /* 光暈寬度 */
        border-radius: 32px;
        background: linear-gradient(
          135deg,
          #ff8800 0%,
          #ffaa00 25%,
          #ff6b4d 50%,
          #ff3366 75%,
          #ff1493 100%
        );
        background-size: 200% 200%;
        animation: colorFlow 4s ease-in-out infinite;
        filter: blur(25px); /* 柔和度 */
        opacity: 0.7; /* 光暈強度 */
        z-index: -1;
        pointer-events: none;
      }
      .animated-border-inner {
        border-radius: 16px;
        background: #fff;
        overflow: hidden;
        position: relative;
        z-index: 0;
      }
    `;
    document.head.appendChild(style);
    return () => document.getElementById("animated-border-css")?.remove();
  }, []);

  // 自動播放
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const now = Date.now();
      if (!hoverRef.current && now >= pauseUntilRef.current) next();
    }, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setIdx(i);
    pauseUntilRef.current = Date.now() + PAUSE_MS;
  };

  // 觸控滑動
  useEffect(() => {
    let startX = 0;
    const el = document.getElementById("courses-carousel"); // 綁在真正滑動那層
    if (!el) return;
    const onTouchStart = (e) => (startX = e.touches[0].clientX);
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) {
        pauseUntilRef.current = Date.now() + PAUSE_MS;
        dx > 0 ? prev() : next();
      }
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [idx]);

  const isFeatured = Boolean(sortedCourses[idx]?.featured);

  // 主要 Carousel 內容（保持一份）
  const carousel = (
    <div
      id="courses-carousel"
      className="relative w-full overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => {
        hoverRef.current = false;
        pauseUntilRef.current = Date.now() + PAUSE_MS;
      }}
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {sortedCourses.map((c, i) => (
          <div key={c.id} className="min-w-full relative">
            <article className="flex flex-col bg-white rounded-2xl overflow-hidden">
              {c.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-lg z-10">
                  限時活動
                </div>
              )}

              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={c.cover}
                  alt={c.title}
                  className="block w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{c.desc}</p>
                  <ul className="text-sm md:text-base text-gray-700 space-y-1 mb-5">
                    {c.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-gray-800" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="font-semibold">{c.price}</div>
                  <a
                    href="#contact"
                    onClick={() =>
                      (pauseUntilRef.current = Date.now() + PAUSE_MS)
                    }
                    className="px-4 py-2 text-sm md:text-base rounded border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    了解更多
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* 左右箭頭（手機隱藏，桌機顯示） */}
      <button
        aria-label="prev"
        onClick={() => {
          pauseUntilRef.current = Date.now() + PAUSE_MS;
          prev();
        }}
        className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-gray-900 shadow hover:bg-white transition-colors z-10"
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="next"
        onClick={() => {
          pauseUntilRef.current = Date.now() + PAUSE_MS;
          next();
        }}
        className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-gray-900 shadow hover:bg-white transition-colors z-10"
      >
        <ChevronRight />
      </button>

      {/* 圓點 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {sortedCourses.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === i ? "w-6 bg-gray-900" : "bg-gray-400/70 hover:bg-gray-600"
            }`}
            aria-label={`dot-${i}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="courses" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tabs */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl tracking-wide">課程介紹</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            多元課程選擇,找到最適合你的創作方式
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 md:gap-4">
            {sortedCourses.map((c, i) => (
              <button
                key={c.id}
                onClick={() => goTo(i)}
                className={`px-3 py-1.5 text-sm md:text-base transition-colors border rounded
                ${
                  i === idx
                    ? c.featured
                      ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-transparent"
                      : "bg-[#1D4D9E] text-white border-[#1D4D9E]"
                    : c.featured
                    ? "text-orange-500 border-orange-500 hover:bg-orange-50"
                    : "text-[#1D4D9E] border-[#1D4D9E] hover:bg-[#1D4D9E]/10"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel 外層：依 featured 套/不套流動邊匡 */}
        {isFeatured ? (
          <div className="animated-border">
            <div className="animated-border-inner">{carousel}</div>
          </div>
        ) : (
          carousel
        )}
      </div>
    </section>
  );
}
