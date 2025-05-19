import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Thêm icon hamburger

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-3 px-4 sm:px-6 bg-white/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Gazer Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Menu điều hướng (desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            ABOUT
          </Link>
          <Link
            to="/services"
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            SERVICES
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            GALLERY
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        {/* Nút Sign Up / Log In (desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/signup">
            <button className="px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-sm">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-3 py-1.5 bg-black text-white rounded-md hover:bg-black/90 transition-colors text-sm">
              Log In
            </button>
          </Link>
        </div>

        {/* Hamburger Menu (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menu điều hướng (mobile) */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm absolute top-14 left-0 w-full shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              CONTACT
            </Link>
            <div className="flex flex-col items-center space-y-2">
              <Link to="/signup" onClick={toggleMenu}>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                  Sign Up
                </button>
              </Link>
              <Link to="/login" onClick={toggleMenu}>
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors">
                  Log In
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;