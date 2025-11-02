export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 md:mb-8 tracking-wide">
              關於我們
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                SHh Art Studio
                創立於，致力於提供優質的藝術教育環境。我們相信藝術不僅是技術的累積，更是心靈的表達與生活的美學。
              </p>
              <p className="text-sm md:text-base">
                在這裡，您可以放慢腳步，沉浸在創作的世界中。我們提供完善的教學設備、舒適的創作空間，以及最重要的——一群志同道合的藝術愛好者。
              </p>
              <p className="text-sm md:text-base">
                無論您是完全的初學者，或是想要精進技巧的創作者，我們都歡迎您加入
                SHh Art Studio 的大家庭。
              </p>
            </div>
            <div className="mt-8 md:mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light mb-2">500+</div>
                <div className="text-gray-600 text-xs md:text-sm tracking-wide">
                  學員人次
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light mb-2">8+</div>
                <div className="text-gray-600 text-xs md:text-sm tracking-wide">
                  年教學經驗
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="h-64 md:h-80 bg-gray-200 rounded"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="h-48 md:h-64 bg-gray-200 rounded"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
