
import React from "react";
import Footer from "@/app/sharedcomponents/Footer"; 
import Button from "@/app/sharedcomponents/Button";


const products = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/images/ps5.png",
    link: "#",
    size: "large",
  },
  {
    id: 2,
    title: "Women's Collections",
    description: "Featured women's collections that give you another vibe.",
    image: "/images/women.png",
    link: "#",
    size: "medium",
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers.",
    image: "/images/speakers.png",
    link: "#",
    size: "small",
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE-OUD EDP.",
    image: "/images/perfume.png",
    link: "#",
    size: "small",
  },
];
 const NewArrival=() => {
    
  return (
    <>
    <section className="px-6 md:px-12 lg:px-24 py-12">
      
      <div className="flex flex-col items-start mb-8">
        <span className="text-pink-500 font-semibold">Featured</span>
        <h2 className="text-3xl font-bold mt-2">New Arrival</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
          <img
            src={products[0].image}
            alt={products[0].title}
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg font-semibold text-white">{products[0].title}</h3>
            <p className="text-sm text-gray-300">{products[0].description}</p>
            <Button text="Shop Now" className="mt-2" onClick={() => alert("Shop Now")} />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2 lg:col-span-2">
          {products.slice(1).map((product) => (
            <div key={product.id} className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg w-full h-full object-cover shadow-md"
              />
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-semibold">{product.title}</h3>
                <p className="text-gray-300 text-xs">{product.description}</p>
                <Button
                  text="Shop Now"
                  className="mt-2"
                  onClick={() => alert(`Shopping ${product.title}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-12">
        <div>
          <img src="/icons/delivery.png" alt="Delivery" className="mx-auto mb-3" />
          <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-500 text-sm">Free delivery for all orders over $140</p>
        </div>
        <div>
          <img src="/icons/support.png" alt="Customer Service" className="mx-auto mb-3" />
          <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
        </div>
        <div>
          <img src="/icons/money.png" alt="Money Back" className="mx-auto mb-3" />
          <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-500 text-sm">We return money within 30 days</p>
        </div>
      </div>
    </section>

    <Footer/>

    </>
  );
}

export default  NewArrival;