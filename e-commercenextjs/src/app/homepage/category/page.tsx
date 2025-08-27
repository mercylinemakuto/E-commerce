const categories = [
  { id: 1, name: "Phones", icon: "/icons/phone.svg" },
  { id: 2, name: "Computers", icon: "/icons/computer.svg" },
  { id: 3, name: "SmartWatch", icon: "/icons/smartwatch.svg" },
  { id: 4, name: "Camera", icon: "/icons/camera.svg" },
  { id: 5, name: "HeadPhones", icon: "/icons/headphones.svg" },
  { id: 6, name: "Gaming", icon: "/icons/gaming.svg" },
];

const CategorySection = () => (
  <section className="max-w-7xl mx-auto px-4 py-10">
    <p className="text-pink-600 font-semibold text-sm mb-2">Categories</p>
    <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
    <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`flex-shrink-0 w-24 h-24 border rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer 
          ${cat.name === "Camera" ? "bg-pink-600 text-white" : "bg-white text-black"} hover:shadow-lg transition`}
        >
          <img src={cat.icon} alt={cat.name} className="w-8 h-8" />
          <span className="text-xs">{cat.name}</span>
        </button>
      ))}
    </div>
  </section>
);

export default CategorySection;
