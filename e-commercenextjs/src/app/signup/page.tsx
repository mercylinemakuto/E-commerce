import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Header from "@/app/sharedcomponents/Header";
import Footer from "@/app/sharedcomponents/Footer";

const SignupPage = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
        
        <div className="flex items-center justify-center bg-white">
          <Image
            src="/images/nextphone.avif"
            alt="Shopping cart and phone signup page"
            width={950}
            height={450}
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        
        <div className="flex flex-col justify-center px-6 py-12 md:px-20 bg-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base font-semibold">
            Enter your details below
          </p>

          <form className="space-y-4 max-w-md w-full">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-pink-500 transition"
            />
            <input
              type="text"
              id="email"
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-pink-500 transition"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-pink-500 transition"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded w-full transition"
            >
              Create Account
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-sm mt-4 hover:bg-gray-100 transition"
            >
              <FcGoogle size={20} />
              Sign up with Google
            </button>
          </form>

          <p className="mt-6 text-gray-700 pl-14">
            Already have an account?{" "}
            <a href="/login" className="text-black underline decoration-black">
              Login
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignupPage;
