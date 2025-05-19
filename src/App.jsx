import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import { Toast } from "@radix-ui/react-toast";

import HomePage from './components/pages/HomePage';
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import SignUp from "./components/AuthPages/SignUp";
import { AuthProvider } from "./context/AuthContext";

// Import other pages as needed

export default function App() {
  return (
    <AuthProvider>
  
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
    </AuthProvider>
  )
}