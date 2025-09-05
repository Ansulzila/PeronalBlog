import { Link } from "react-router-dom";
import { useState } from "react";
import FullPageLayout from "./FullPageLayout";

const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ useremail, userpassword }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("✅ Login successful:", data);
      } else {
        console.error("❌ Login failed:", response.statusText);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <FullPageLayout>
      <h2 className="text-white text-3xl font-display font-bold mb-4">
        Login to your account
      </h2>
      <p className="text-gray-300 text-sm mb-6">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-[#FF6900] hover:underline">
          Sign Up Free!
        </Link>
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-black/40 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#FF6900] transition"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black/40 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-[#FF6900] transition"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
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
    </FullPageLayout>
  );
};

export default Login;
