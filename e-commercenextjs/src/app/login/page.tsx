import Image from "next/image";
import Header from "@/app/sharedcomponents/Header";
import Footer from "@/app/sharedcomponents/Footer";

const Login = () => {
  return (
    <>
    <Header/>

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        <div className="flex items-center justify-center bg-white">
          <Image
            src="/images/nextphone.avif"
            alt="Shopping cart with phone"
            width={950}
            height={450}
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-12 md:px-20 bg-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Login to Exclusive</h2>
          <p className="text-gray-500 mb-6 text-sm md:text-base font-bold">Enter your details below</p>

          <form className="space-y-4 max-w-md w-full">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-pink-500 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-pink-500 transition"
            />
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded transition"
              >
                Login
              </button>
              <p className="text-pink-500 text-base cursor-pointer hover:underline mt-4">
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>

      
      <Footer />
    </>
  );
};

export default Login;
