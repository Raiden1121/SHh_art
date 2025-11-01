import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Clock,
} from "lucide-react";

import lineIcon from "../assets/logo/LINE_icon.png";
import igIcon from "../assets/logo/ig_icon.png";
import fbIcon from "../assets/logo/fb_icon.png";

const place = "台中市南屯區大容東街11號";
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  place
)}&output=embed`;
const navUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  place
)}&travelmode=driving`;

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* 標題 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl  mb-4 tracking-wide">聯絡我們</h2>
          <p className="text-sm md:text-base text-gray-600">
            歡迎預約參觀或課程諮詢
          </p>
        </div>

        {/* 主體：兩欄 */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* 左側：Google Maps + LINE（縮小間距讓卡片上移） */}
          <div className="order-1 md:order-1 space-y-8 md:space-y-10">
            {/* Google Maps 預覽 */}
            <div className="relative w-full aspect-[16/9] rounded-md shadow-sm overflow-hidden">
              <iframe
                title="Google Maps 預覽"
                src={embedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={navUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="開啟 Google Maps 導航"
                className="absolute inset-0"
              />
            </div>

            {/* LINE 區塊 */}
            <div className="bg-white p-6 md:p-7 text-center rounded-md shadow-sm">
              <img
                src={lineIcon}
                alt="LINE Icon"
                className="mx-auto mb-4 w-12 h-12 object-contain"
              />

              <p className="font-medium mb-2 text-sm md:text-base">
                立即預約體驗
              </p>
              <p className="text-xs md:text-sm text-gray-600 mb-6">
                透過 LINE 與我們聯繫
              </p>
              <a
                href="https://line.me/R/ti/p/@550evefk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 md:px-8 py-3 text-xs md:text-sm tracking-wide hover:bg-green-600 transition-colors rounded-md"
              >
                加入 LINE 好友
              </a>
            </div>
          </div>

          {/* 右側：聯絡資訊 */}
          <div className="order-2 md:order-2 space-y-6 md:space-y-8 ml-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-wide">
                SHh Art Studio
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                讓藝術點亮生活
                <br />
                用色彩說出心聲
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin
                  className="text-gray-900 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-medium mb-1 text-sm md:text-base">
                    教室地址
                  </p>
                  <a
                    href={navUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs md:text-sm hover:underline"
                  >
                    台中市南屯區大容東街11號
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium mb-1 text-sm md:text-base">
                    聯絡電話
                  </p>
                  <a
                    href="tel:0919589715"
                    className="text-gray-600 text-xs md:text-sm hover:underline"
                  >
                    0919589715
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium mb-1 text-sm md:text-base">
                    電子郵件
                  </p>
                  <a
                    href="mailto:info@shhartstudio.com"
                    className="text-gray-600 text-xs md:text-sm hover:underline"
                  >
                    info@shhartstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium mb-1 text-sm md:text-base">
                    營業時間
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    週二至週五 14:00-21:00
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    週六至週日 10:00-18:00
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">週一公休</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 全寬：追蹤我們（線條跨兩欄，內容置中） */}
        <div className="mt-10 md:mt-16 border-t border-gray-300">
          <div className="pt-10 md:pt-12 text-center">
            <p className="font-semibold mb-6 text-lg md:text-2xl tracking-wide text-gray-900">
              追蹤我們
            </p>
            <div className="flex justify-center gap-10">
              <a
                href="https://www.instagram.com/shh.artstudio?igsh=MXB4Nnl3bGwxdGth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={igIcon}
                  alt="Instagram"
                  className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://m.facebook.com/61550649403367/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fbIcon}
                  alt="Facebook"
                  className="w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
