import { Link } from "react-router-dom";
import FullPageLayout from "./FullPageLayout";

const Signup = () => {
  return (
    <FullPageLayout>
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
          placeholder="Name"
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
        <button className="w-full bg-[#FF6900] text-white py-3 rounded-lg font-bold hover:bg-[#e55c00] transition">
          Sign Up
        </button>
      </form>
    </FullPageLayout>
  );
};

export default Signup;
