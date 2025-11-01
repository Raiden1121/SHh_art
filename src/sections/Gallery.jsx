const artworks = [
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
  "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=500",
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500",
  "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500",
];

export default function Gallery() {
  return (
    <section id="gallery" className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
            學生作品
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            見證每一個獨特的創作靈魂
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {artworks.map((img, i) => (
            <div
              key={i}
              className="aspect-square bg-cover bg-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
