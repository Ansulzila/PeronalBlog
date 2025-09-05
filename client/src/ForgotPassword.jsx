import { Link } from "react-router-dom";
import bg from "./assets/bg.jpg";

const ForgotPassword = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="rounded-2xl shadow-lg max-w-md w-full bg-black/60 p-8 backdrop-blur-sm">
        <h2 className="text-white text-3xl font-display font-bold mb-4">
          Forgot Password?
        </h2>
        <p className="text-gray-300 text-sm mb-6">
          Enter your email and we’ll send you a link to reset your password.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-black/40 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#FF6900] transition"
          />

          <button className="w-full bg-[#FF6900] text-white py-3 rounded-lg font-bold hover:bg-[#e55c00] transition">
            Send Reset Link
          </button>
        </form>

        <p className="text-gray-300 text-sm mt-6 text-center">
          Remembered your password?{" "}
          <Link to="/login" className="text-[#FF6900] hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
