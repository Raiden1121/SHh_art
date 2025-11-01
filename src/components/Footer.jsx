export default function Footer() {
  return (
    <footer className="bg-[#153a78] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg md:text-xl font-light mb-4 tracking-wide">
              SHh Art Studio
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              讓藝術點亮生活
              <br />
              用色彩說出心聲
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 tracking-wide text-sm md:text-base">
              快速連結
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  關於我們
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-white transition-colors"
                >
                  課程介紹
                </a>
              </li>
              <li>
                <a
                  href="#teachers"
                  className="hover:text-white transition-colors"
                >
                  師資團隊
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 tracking-wide text-sm md:text-base">
              上課時間
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-300">
              <li>週二至週五 14:00-21:00</li>
              <li>週六至週日 10:00-18:00</li>
              <li>週一公休</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 tracking-wide text-sm md:text-base">
              聯絡資訊
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-300">
              <li>0919589715</li>
              <li>info@shhartstudio.com</li>
              <li>台中市南屯區大容東街11號</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
          <p>© 2025 SHh Art Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
