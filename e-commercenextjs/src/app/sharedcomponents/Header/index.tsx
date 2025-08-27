"use client";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";


const Header=() => {
  const [languageOpen, setLanguageOpen] = useState(false);
  return (
    <header className="w-full border-b border-gray-200">
      
      <div className="bg-black text-white text-lg py-5 px-6 flex justify-between items-center">
        <p className="mx-auto text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold underline cursor-pointer">ShopNow</span>
        </p>
        
        <div className="relative">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center gap-1 text-white hover:text-gray-300 transition"
          >
            English <IoChevronDown size={16} />
          </button>
          {languageOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-28 text-black text-sm">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                English
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Kiswahili
              </button>
            </div>
          )}
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-black cursor-pointer">
          Exclusive
        </h1>
        
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li><a href="#" className="hover:text-black transition">Home</a></li>
          <li><a href="#" className="hover:text-black transition">Contact</a></li>
          <li><a href="#" className="hover:text-black transition">About</a></li>
          <li><a href="#"  className="text-black underline decoration-black inline-block">Sign Up</a></li>
        </ul>
        
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-56">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400 text-sm"
          />
          <IoSearchOutline className="text-gray-500 cursor-pointer" size={20} />
        </div>
      </nav>
    </header>
  );
}
export default Header;