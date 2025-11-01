import { ChevronRight } from "lucide-react";

const courses = [
  {
    title: "肌理畫課程",
    description: "學習使用多種媒材創造豐富的質感與層次",
    details: ["適合初學者", "12堂課程", "含材料"],
    price: "NT$ 7,200",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
  },
  {
    title: "油畫棒課程",
    description: "探索油畫棒的獨特表現力與色彩魅力",
    details: ["適合各程度", "10堂課程", "材料另計"],
    price: "NT$ 5,500",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600",
  },
  {
    title: "水彩課程",
    description: "掌握水彩的流動性與透明感",
    details: ["小班教學", "10堂課程", "含畫具"],
    price: "NT$ 5,500",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600",
  },
  {
    title: "團體課程",
    description: "企業或團體專屬課程規劃",
    details: ["客製化內容", "彈性時間", "到府服務"],
    price: "洽詢報價",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-wide">課程介紹</h2>
          <p className="text-sm md:text-base text-gray-600">
            多元課程選擇，找到最適合您的創作方式
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          {courses.map((c, i) => (
            <div
              key={i}
              className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div
                className="h-56 md:h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-light mb-3 tracking-wide">
                  {c.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  {c.description}
                </p>
                <div className="space-y-2 mb-6">
                  {c.details.map((d, j) => (
                    <div
                      key={j}
                      className="flex items-center text-xs md:text-sm text-gray-600"
                    >
                      <ChevronRight size={16} className="mr-2" /> {d}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-light">
                    {c.price}
                  </span>
                  <button className="border border-gray-900 text-gray-900 px-4 md:px-6 py-2 text-xs md:text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-colors">
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
