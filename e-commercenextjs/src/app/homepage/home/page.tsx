
import Image from "next/image";

const HomeHeaderSection = () => (
  <main className="bg-white">
    
    <div className="w-full bg-black text-white py-2 text-center text-sm">
      Summer Sale For All Swim Suits And Free Express Delivery — OFF 50%!
      <span className="font-semibold underline ml-2 cursor-pointer">ShopNow</span>
    </div>
    
    <header className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 border-b border-gray-200">
      <div className="text-2xl font-bold tracking-tight text-black">Exclusive</div>
     
      <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
        <a href="#" className="hover:text-pink-500 transition">Home</a>
        <a href="#" className="hover:text-pink-500 transition">Contact</a>
        <a href="#" className="hover:text-pink-500 transition">About</a>
        <a href="#" className="text-black underline decoration-black">Sign Up</a>
      </nav>
     
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border rounded px-3 py-2 text-sm w-52 focus:outline-pink-500"
        />
        <button className="text-xl">♡</button>
        <button className="text-xl">🛒</button>
        <button className="text-xl">👤</button>
      </div>
    </header>
    
    <section className="max-w-7xl mx-auto flex mt-7 gap-10">
     
      <aside className="hidden lg:block w-56">
        <ul className="space-y-3 font-medium text-gray-700">
          <li>Woman's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>
      
      <div className="flex-1  relative flex justify-end   items-center h-full  bg-black">
        <Image
          src="/images/iphones.jpg" 
          alt="iPhone 14 Series"
          width={500}
          height={200}
          className=" object-contain"
        />
        
        <div className="absolute top-10 left-10 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/images/apple.svg" width={24} height={24} alt="Apple" />
            <span className="font-semibold">iPhone 14 Series</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Up to 10% off Voucher</h2>
          <button className="bg-white text-black px-4 py-2 rounded shadow font-semibold hover:bg-gray-100">
            Shop Now
          </button>
        </div>
        
      </div>
    </section>
  </main>
);

export default HomeHeaderSection;
