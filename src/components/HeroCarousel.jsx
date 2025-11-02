import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/image/scroll1.jpeg";
import img2 from "../assets/image/scroll2.jpeg";

const IMAGES = [img1, img2];

export default function HeroCarousel({ intervalMs = 1000 }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  const prev = () => setIdx((p) => (p - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIdx((p) => (p + 1) % IMAGES.length);

  // 自動播放
  useEffect(() => {
    // 先清一次，避免重複計時器
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [intervalMs]);

  // 滑鼠移入暫停、移出繼續
  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, intervalMs);
  };

  // 觸控滑動
  useEffect(() => {
    let startX = 0;
    const el = document.getElementById("hero-carousel");
    if (!el) return;
    const onTouchStart = (e) => (startX = e.touches[0].clientX);
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) {
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

  return (
    <div
      id="hero-carousel"
      className="relative w-full overflow-hidden rounded-none"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* 內容容器 */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {IMAGES.map((src, i) => (
          <div key={i} className="min-w-full aspect-[16/14]">
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* 左右箭頭（手機隱藏，桌機顯示） */}
      <button
        aria-label="prev"
        onClick={prev}
        className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="next"
        onClick={next}
        className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight />
      </button>

      {/* 底部圓點 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === i ? "w-6 bg-white" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
