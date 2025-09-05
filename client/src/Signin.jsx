import { Link } from "react-router-dom";
import bg from "./assets/bg.jpg";

const Signin = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="rounded-2xl shadow-lg max-w-md w-full bg-black/60 p-8 backdrop-blur-sm">
        <h2 className="text-white text-3xl font-display font-bold mb-4">
          Create your account
        </h2>
        <p className="text-gray-300 text-sm mb-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF6900] hover:underline">
            Login here
          </Link>
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black/40 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#FF6900] transition"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-black/40 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#FF6900] transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black/40 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#FF6900] transition"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-black/40 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#FF6900] transition"
          />

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input type="checkbox" /> I agree to the{" "}
            <Link to="/terms" className="text-[#FF6900] hover:underline">
              Terms & Conditions
            </Link>
          </div>

          <button className="w-full bg-[#FF6900] text-white py-3 rounded-lg font-bold hover:bg-[#e55c00] transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
        