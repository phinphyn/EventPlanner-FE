import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import { Toast } from "@radix-ui/react-toast";

import HomePage from './components/pages/HomePage';
import ContactPage from "./components/pages/ContactPage";
// Import other pages as needed

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
}