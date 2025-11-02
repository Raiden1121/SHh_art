import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const COURSE_DATA = {
  texture: {
    id: "texture",
    title: "肌理畫課程",
    desc: "學習使用多種媒材創造豐富的質感與層次",
    price: "NT$ 7,200",
    cover:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200",
    details: {
      duration: "12堂課程",
      level: "適合初學者",
      materials: "含材料",
      schedule: "每週六下午 2:00-5:00",
      classSize: "小班制 8-12人",
    },
    description: `本課程將帶領學員探索肌理畫的奧秘，透過多種媒材的運用，創造出豐富的質感與層次。從基礎技法到進階創作，讓您掌握肌理表現的各種可能性。

課程特色：
• 完整的肌理技法教學
• 多元媒材實驗與創作
• 個人創作風格培養
• 小班教學，充分指導

適合對象：
• 繪畫初學者
• 想嘗試新媒材的創作者
• 希望提升作品質感的學員`,
    syllabus: [
      { week: 1, topic: "肌理畫基礎介紹", content: "認識各種肌理技法與材料" },
      { week: 2, topic: "基礎肌理技法", content: "刮、壓、印等基本技巧練習" },
      { week: 3, topic: "色彩與肌理", content: "色彩搭配與肌理表現" },
      { week: 4, topic: "複合媒材應用", content: "結合多種媒材創作" },
      { week: 5, topic: "肌理構圖", content: "構圖原理與肌理結合" },
      { week: 6, topic: "個人創作（一）", content: "獨立創作與指導" },
    ],
    studentWorks: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600",
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600",
    ],
  },
  "oil-pastel": {
    id: "oil-pastel",
    title: "油畫棒課程",
    desc: "探索油畫棒的獨特表現力與色彩魅力",
    price: "NT$ 5,500",
    cover:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200",
    details: {
      duration: "10堂課程",
      level: "適合各程度",
      materials: "材料另計",
      schedule: "每週日上午 10:00-12:00",
      classSize: "小班制 8-12人",
    },
    description: `油畫棒是一種充滿表現力的媒材，本課程將帶領您探索油畫棒的各種可能性，從基礎技法到創意表現。`,
    syllabus: [
      { week: 1, topic: "油畫棒基礎", content: "認識油畫棒特性與基本技法" },
      { week: 2, topic: "色彩混合", content: "油畫棒色彩混合技巧" },
      { week: 3, topic: "質感表現", content: "不同質感的創作方式" },
    ],
    studentWorks: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    ],
  },
  watercolor: {
    id: "watercolor",
    title: "水彩課程",
    desc: "掌握水彩的流動性與透明感",
    price: "NT$ 5,500",
    cover: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200",
    details: {
      duration: "10堂課程",
      level: "小班教學",
      materials: "含畫具",
      schedule: "每週五晚上 7:00-9:00",
      classSize: "小班制 6-10人",
    },
    description: `水彩畫是一門優雅的藝術，本課程將教您掌握水彩的流動性與透明感，創作出充滿意境的作品。`,
    syllabus: [
      { week: 1, topic: "水彩基礎", content: "認識水彩特性與工具" },
      { week: 2, topic: "水份控制", content: "乾濕技法練習" },
    ],
    studentWorks: [
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600",
    ],
  },
  group: {
    id: "group",
    title: "團體課程",
    desc: "企業或團體專屬課程規劃",
    price: "洽詢報價",
    cover:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200",
    details: {
      duration: "彈性安排",
      level: "適合各程度",
      materials: "依需求規劃",
      schedule: "彈性時間",
      classSize: "10人以上",
    },
    description: `提供企業或團體專屬的藝術課程規劃，可依需求客製化課程內容與時間。`,
    syllabus: [],
    studentWorks: [],
  },
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = COURSE_DATA[courseId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const coursesSection = document.getElementById("courses");
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">課程不存在</h2>
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-[#1D4D9E] text-white rounded hover:bg-[#153a78] transition-colors"
          >
            返回課程列表
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 返回按鈕 */}
      <button
        onClick={handleBack}
        className="fixed top-28 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">返回課程</span>
      </button>

      {/* 課程封面圖 */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img
          src={course.cover}
          alt={course.title}
          className="w-full h-full object-cover animate-fadeIn"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">{course.desc}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 課程資訊卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 space-y-8">
            {/* 課程介紹 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">課程介紹</h2>
              <div className="prose prose-gray max-w-none whitespace-pre-line text-gray-700 leading-relaxed">
                {course.description}
              </div>
            </section>

            {/* 課程大綱 */}
            {course.syllabus.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">課程大綱</h2>
                <div className="space-y-4">
                  {course.syllabus.map((item, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-[#1D4D9E] pl-4 py-2 bg-gray-50 rounded-r"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-semibold text-[#1D4D9E]">
                          第 {item.week} 週
                        </span>
                        <h3 className="font-medium">{item.topic}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 學生作品 */}
            {course.studentWorks.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">學生作品</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {course.studentWorks.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={img}
                        alt={`學生作品 ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* 側邊欄：課程資訊 */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-[#1D4D9E] mb-6">
                {course.price}
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">課程時長</span>
                  <span className="font-medium">{course.details.duration}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">適合程度</span>
                  <span className="font-medium">{course.details.level}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">材料說明</span>
                  <span className="font-medium">
                    {course.details.materials}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">上課時間</span>
                  <span className="font-medium">{course.details.schedule}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">班級人數</span>
                  <span className="font-medium">
                    {course.details.classSize}
                  </span>
                </div>
              </div>
              <button
                onClick={() => navigate("/#contact")}
                className="w-full mt-6 px-6 py-3 bg-[#1D4D9E] text-white rounded-lg hover:bg-[#153a78] transition-colors font-medium"
              >
                立即報名
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
