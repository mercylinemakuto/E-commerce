
const products = [
  {
    id: 1,
    image: "/images/gamepad.png",
    title: "HAVIT HV-G92 Gamepad",
    prevPrice: 160,
    price: 120,
    badge: "-40%",
    rating: "88",
  },
  {
    id: 2,
    image: "/images/keyboard.png",
    title: "AK-900 Wired Keyboard",
    prevPrice: 960,
    price: 860,
    badge: "-35%",
    rating: "75",
  },
  {
    id: 3,
    image: "/images/monitor.png",
    title: "IPS LCD Gaming Monitor",
    prevPrice: 400,
    price: 370,
    badge: "-30%",
    rating: "99",
  },
  {
    id: 4,
    image: "/images/chair.png",
    title: "S-Series Comfort Chair",
    prevPrice: 400,
    price: 375,
    badge: "-25%",
    rating: "65",
  },
];

const FlashSaleSection = () => (
  <section className="max-w-7xl mx-auto mt-14 px-4">
    <div className="mb-4 flex items-center gap-3">
      <span className="text-pink-600 font-bold text-sm">Today's</span>
      <h2 className="text-2xl font-bold">Flash Sales</h2>
      
      <div className="ml-auto flex gap-2 items-center bg-black text-white rounded px-3 py-1 text-xs font-medium">
        <span>03</span><span>:</span>
        <span>23</span><span>:</span>
        <span>19</span><span>:</span>
        <span>56</span>
      </div>
    </div>
    <div className="flex overflow-x-auto gap-6 py-4">
      {products.map(product => (
        <div
          key={product.id}
          className="min-w-[220px] max-w-xs bg-white rounded-lg shadow p-4 relative"
        >
          <div className="absolute top-4 left-4 bg-pink-600 text-white px-2 py-1 text-xs rounded">
            {product.badge}
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="w-28 h-28 object-contain mb-3 mx-auto"
          />
          <h3 className="font-semibold text-base mb-1">{product.title}</h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-pink-600 font-bold">${product.price}</span>
            <span className="line-through text-gray-400 text-sm">${product.prevPrice}</span>
          </div>
          <div className="flex gap-1 text-yellow-400 text-xs">
            ★★★★★ <span className="text-gray-500">({product.rating})</span>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-2 rounded font-medium transition">
        View All Products
      </button>
    </div>
  </section>
);

export default FlashSaleSection;
