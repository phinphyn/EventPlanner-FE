import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import SignUpPage from "./components/pages/SignupPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ServicePage from "./components/pages/ServicePage";
import GalleryPage from "./components/pages/GalleryPage";
// Import other pages as needed

export default function App() {
  return (
    <AuthProvider>
      
    <Router>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        {/* Add other routes as needed */}
      </Routes>
      
    </Router>
    
    </AuthProvider>
  )
}