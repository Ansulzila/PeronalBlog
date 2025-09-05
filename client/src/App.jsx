import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

function AppWrapper() {
  const location = useLocation();

  // Routes that should open standalone (no header)
  const standalonePages = ["/login", "/signup", "/forgotpwd"];
  const isStandalone = standalonePages.includes(location.pathname.toLowerCase());

  return isStandalone ? (
    // Standalone pages only render the page (Login/Signup/Forgot Password)
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpwd" element={<ForgotPassword />} />
    </Routes>
  ) : (
    // Normal pages with header and global background
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <div className="px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
