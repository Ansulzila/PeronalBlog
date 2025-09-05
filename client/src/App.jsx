import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./homePage";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/projects";
import Contact from "./pages/contactme";
import bg from "./assets/bg.jpg";
import './App.css';

function App() {
  return (
    <Router>
      {/* 🔹 Global Background */}
      <div
        className="min-h-screen w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />

        {/* 🔹 Page Content */}
        <div className="px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpwd" element={<ForgotPassword />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
