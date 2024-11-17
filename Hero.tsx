export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Coffee shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">KOODHAA CAFE</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience the perfect blend of artisanal coffee and cozy ambiance
        </p>
        <button className="bg-amber-800 text-white px-8 py-3 rounded-md text-lg hover:bg-amber-700 transition-colors">
          Explore Menu
        </button>
      </div>
    </section>
  );
}