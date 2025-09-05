import { Link } from "react-router-dom";
import bg from "./assets/bg.jpg";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="rounded-2xl shadow-lg max-w-md w-full bg-black/60 p-8 backdrop-blur-sm">
        <h2 className="text-white text-3xl font-display font-bold mb-4">
          Login to your account
        </h2>
        <p className="text-gray-300 text-sm mb-6">
          Don’t have an account?{" "}
          <Link to="/Signin" className="text-[#FF6900] hover:underline">
            Sign Up Free!
          </Link>
        </p>

        <form className="space-y-4">
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

          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgotpwd" className="text-[#FF6900] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button className="w-full bg-[#FF6900] text-white py-3 rounded-lg font-bold hover:bg-[#e55c00] transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
