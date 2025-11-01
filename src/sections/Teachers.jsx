const teachers = [
  {
    name: "林老師",
    title: "創辦人 / 主任教師",
    specialty: "油畫、壓克力、肌理創作",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "陳老師",
    title: "專任教師",
    specialty: "水彩、色鉛筆、插畫",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "王老師",
    title: "兒童美術教師",
    specialty: "兒童創意美術、繪本創作",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
            師資團隊
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            專業且充滿熱情的教學團隊
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teachers.map((t, i) => (
            <div key={i} className="text-center group">
              <div
                className="h-72 md:h-96 bg-cover bg-center mb-4 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{ backgroundImage: `url(${t.image})` }}
              />
              <h3 className="text-xl md:text-2xl font-light mb-2 tracking-wide">
                {t.name}
              </h3>
              <p className="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm">
                {t.title}
              </p>
              <p className="text-xs md:text-sm text-gray-500">{t.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
