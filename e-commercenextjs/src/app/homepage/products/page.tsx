
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Button from "../../sharedcomponents/Button";


const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 4,
    reviews: 33,
    image: "https://via.placeholder.com/150x150",
    discount: null,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 5,
    reviews: 95,
    image: "https://via.placeholder.com/150x150",
    discount: null,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 5,
    reviews: 223,
    image: "https://via.placeholder.com/150x150",
    discount: null,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "$500",
    rating: 4,
    reviews: 145,
    image: "https://via.placeholder.com/150x150",
    discount: null,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: "$960",
    rating: 5,
    reviews: 65,
    image: "https://via.placeholder.com/150x150",
    discount: "New",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: "$116",
    rating: 5,
    reviews: 35,
    image: "https://via.placeholder.com/150x150",
    discount: "New",
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 5,
    reviews: 55,
    image: "https://via.placeholder.com/150x150",
    discount: "New",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: "$660",
    rating: 5,
    reviews: 95,
    image: "https://via.placeholder.com/150x150",
    discount: null,
  },
];
 const ExploreProducts =()=> {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      
      <div className="mb-8">
        <h3 className="text-red-500 text-sm font-semibold">Our Products</h3>
        <h2 className="text-2xl md:text-3xl font-bold">Explore Our Products</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition relative"
          >
            
            <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition">
              <FaHeart size={16} className="text-gray-500" />
            </button>
            
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-contain mb-4"
            />
            
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-red-500 font-semibold text-sm">{product.price}</p>
            
            <div className="flex items-center mt-1 gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={14}
                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
              <span className="ml-2 text-gray-500 text-xs">
                ({product.reviews})
              </span>
            </div>
          </div>
        ))}
      </div>
     
      <div className="flex justify-center mt-10">
        <Button text="View All Products" onClick={() => alert("Show all products")} />
      </div>
    </section>
  );
}

export default ExploreProducts;