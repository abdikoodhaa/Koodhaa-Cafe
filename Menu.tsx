const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "$3.50", description: "Pure and intense coffee shot" },
      { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and foam" },
      { name: "Latte", price: "$4.75", description: "Espresso with lots of steamed milk and light foam" },
      { name: "Mocha", price: "$5.00", description: "Espresso with chocolate and steamed milk" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", price: "$3.25", description: "Buttery, flaky pastry" },
      { name: "Muffin", price: "$3.00", description: "Freshly baked, various flavors" },
      { name: "Cheesecake", price: "$5.50", description: "New York style cheesecake" },
      { name: "Danish", price: "$3.75", description: "Sweet pastry with fruit filling" }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((section) => (
            <div key={section.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">{section.category}</h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-amber-800 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}