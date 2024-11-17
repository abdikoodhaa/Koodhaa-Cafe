export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31"
              alt="Coffee brewing"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, KOODHAA CAFE has been serving premium coffee and creating memorable experiences for our community. Our passion for quality coffee and exceptional service drives everything we do.
            </p>
            <p className="text-gray-600 mb-6">
              We source our beans directly from sustainable farms around the world, ensuring both quality and ethical practices. Every cup is crafted with care by our expert baristas.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-amber-800">5K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-800">15+</h3>
                <p className="text-gray-600">Coffee Varieties</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-800">3</h3>
                <p className="text-gray-600">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}