import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../lib/scrollToSection";
import logo from "../assets/logo/SHh_logo.jpg";

const navItems = [
  { id: "home", label: "首頁" },
  { id: "about", label: "關於我們" },
  { id: "courses", label: "課程介紹" },
  { id: "faq", label: "常見問題" },
  { id: "contact", label: "聯絡我們" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-sm shadow-md"
          : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="SHh Art Studio Logo"
              className="h-10 md:h-12 object-contain"
            />
          </button>

          <div className="hidden min-[900px]:flex space-x-8">
            {navItems.map((i) => (
              <button
                key={i.id}
                onClick={() => scrollToSection(i.id)}
                className="text-base tracking-wide text-[#1D4D9E] font-semibold hover:text-[#153a78] transition-colors relative group"
              >
                {i.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1D4D9E] transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            className="min-[900px]:hidden p-2 text-[#1D4D9E]"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="min-[900px]:hidden pb-4 border-t animate-fadeIn">
            {navItems.map((i) => (
              <button
                key={i.id}
                onClick={() => {
                  scrollToSection(i.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-3 px-4 hover:bg-gray-50 text-[#1D4D9E] transition-colors"
              >
                {i.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
