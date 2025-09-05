import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="text-white shadow-md">
      {/* 🔹 Top Right (Login / Signin) */}
      <div className="flex justify-end p-3 gap-4">
        <Link to="/login">
          <button className="rounded-lg w-20 h-10 hover:bg-orange-500 transition">
            Login
          </button>
        </Link>
        <Link to="/signin">
          <button className="rounded-lg w-24 h-10 hover:bg-orange-500 transition">
            Signin
          </button>
        </Link>
      </div>

      {/* 🔹 Blog Title */}
      <div className="py-4 px-10">
        <h1 className="font-display text-6xl md:text-7xl mb-3">Ansul’s Blog</h1>
        <p className="font-mono text-lg">
          Welcome to my personal blog where I share coding, music, and life.
        </p>
      </div>

      {/* 🔹 Navbar */}
      <nav className="bg-black/50 flex flex-wrap gap-4 md:gap-6 text-lg font-bold px-6 py-3">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`px-4 ml-4 py-2 rounded transition ${
              link.label === "Home"
                ? "bg-orange-500 text-black"
                : "hover:bg-orange-500"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
