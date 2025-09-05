import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomgePage from "./homePage";
import Login from "./Login";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/projects";
import Contact from "./pages/contactme";
import ForgotPassword from "./ForgotPassword";
import './App.css'
import Signin from "./Signin";

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomgePage />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/Signin" element={<Signin />} />;
      <Route path="/forgotpwd" element={<ForgotPassword />} />;
      <Route path="/About" element={<Aboutme />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>
    
  )
}

export default App
