import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer =() => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-5 gap-16">
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Exclusive</h3>
          <p className="mb-2 text-sm">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition">
              →
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Support</h3>
          <p className="text-sm leading-relaxed">111 Bijoy Sarani, Dhaka,</p>
          <p className="text-sm leading-relaxed">DH 1515, Bangladesh.</p>
          <p className="mt-3 text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Download App</h3>
          <p className="text-sm mb-3 whitespace-nowrap">Save $3 with App New User Only</p>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/QR Code.png"
              alt="QR Code"
              className="w-40 h-20 rounded-md border border-gray-600"
            />
            <div className="flex flex-col gap-3">
              <img
                src="/images/googleonPlay.png"
                alt="Google Play"
                className="w-78 h-8 cursor-pointer hover:opacity-80 transition"
              />
              <img
                src="/images/appStore.png"
                alt="App Store"
                className="w-78 h-8 cursor-pointer hover:opacity-80 transition"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaXTwitter size={16} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-6 py-5 text-center text-xs md:text-sm text-gray-400">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;