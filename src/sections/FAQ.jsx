import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "完全沒有繪畫基礎可以報名嗎？",
    a: "當然可以！我們有專為初學者設計的基礎課程，老師會從最基本的握筆姿勢、線條練習開始教起，循序漸進地引導您進入藝術世界。",
  },
  {
    q: "上課需要自備材料嗎？",
    a: "初次體驗課程我們會提供所有材料。正式課程的材料費用會依課程類型而定，部分課程材料費已包含在學費中，詳情請洽詢櫃台。",
  },
  {
    q: "如果臨時有事無法上課怎麼辦？",
    a: "請在上課前24小時通知我們，您可以選擇補課或保留該堂課程。每期課程最多可請假2次。",
  },
  {
    q: "有年齡限制嗎？",
    a: "兒童美術課程適合4-12歲，青少年及成人課程則無年齡上限。我們歡迎所有熱愛藝術的朋友加入！",
  },
  {
    q: "可以試聽嗎？",
    a: "我們提供單堂體驗課程（NT$500），讓您親身感受教學方式與環境氛圍，確認適合後再報名正式課程。",
  },
  {
    q: "報名後可以退費嗎？",
    a: "開課前7天內可全額退費，開課後未上課堂數可退70%學費。詳細退費辦法請參閱報名表背面說明。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
            常見問題
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            關於課程的疑問解答
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-sm md:text-lg pr-4">
                  {f.q}
                </span>
                <ChevronDown
                  className={`transition-transform flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-700 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
