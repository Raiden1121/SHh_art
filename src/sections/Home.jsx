import { scrollToSection } from "../lib/scrollToSection";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-50 to-white flex flex-col"
    >
      <div className="max-w-6xl w-full mx-auto px-4 md:px-6">
        {/* Hero 輪播容器，950px 後固定大小 */}
        <div className="w-full mx-auto" style={{ maxWidth: "860px" }}>
          <HeroCarousel intervalMs={5000} />
        </div>

        {/* 文字連結 */}
        <div className="flex justify-center gap-16 text-base tracking-widest mt-5 mb-12">
          <button
            onClick={() => scrollToSection("courses")}
            className="text-gray-600 hover:text-gray-900 transition-colors relative group"
          >
            探索課程
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
              style={{ backgroundColor: "#153a78" }}
            ></span>
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-gray-900 transition-colors relative group"
          >
            立即預約
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
              style={{ backgroundColor: "#153a78" }}
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
}
