// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from '@/context/AuthContext';

// export default function Navbar() {
//   const { user, isLoggedIn, logout } = useAuth();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
  
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleLogout = () => {
//     logout();
//     // You might want to redirect to home page after logout
//     // navigate('/');
//   };

//   // Function to get user initials for avatar
//   const getUserInitials = () => {
//     if (user && user.user_name) {
//       return user.user_name.charAt(0).toUpperCase();
//     } else if (user && user.email) {
//       return user.email.charAt(0).toUpperCase();
//     }
//     return "U"; // Default if no name or email
//   };

//   return (
//     <header className="w-full py-4 px-6 bg-white/90 backdrop-blur-sm fixed top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <Link to="/">
//             <img
//               src="/images/logo.png"
//               alt="Gazer Logo"
//               className="h-8 sm:h-10 w-auto"
//             />
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center space-x-10">
//           <Link to="/" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
//             HOME
//           </Link>
//           <Link to="/about" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
//             ABOUT
//           </Link>
//           <Link to="/services" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
//             SERVICES
//           </Link>
//           <Link to="/gallery" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
//             GALLERY
//           </Link>
//           <Link to="/contact" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
//             CONTACT
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-4">
//           {isLoggedIn ? (
//             <div className="relative">
//               <button 
//                 onClick={toggleDropdown}
//                 className="flex items-center focus:outline-none"
//                 aria-expanded={dropdownOpen}
//                 aria-haspopup="true"
//               >
//                 {user && user.profile_image ? (
//                   // If user has a profile image
//                   <img 
//                     src={user.profile_image || "/placeholder.svg"} 
//                     alt="Profile" 
//                     className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
//                   />
//                 ) : (
//                   // Default avatar with initials
//                   <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
//                     {getUserInitials()}
//                   </div>
//                 )}
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''}`} 
//                   viewBox="0 0 20 20" 
//                   fill="currentColor"
//                 >
//                   <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </button>
              
//               {/* Dropdown menu */}
//               {dropdownOpen && (
//                 <div 
//                   className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="user-menu"
//                 >
//                   <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
//                     <p className="font-medium">{user?.user_name || 'User'}</p>
//                     <p className="text-gray-500 truncate">{user?.email}</p>
//                   </div>
                  
//                   <Link 
//                     to="/profile" 
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Your Profile
//                   </Link>
                  
//                   <Link 
//                     to="/bookings" 
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Your Bookings
//                   </Link>
                  
//                   <Link 
//                     to="/settings" 
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Settings
//                   </Link>
                  
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                     role="menuitem"
//                   >
//                     Sign out
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <Link to="/signup">
//                 <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
//                   Sign Up
//                 </button>
//               </Link>
//               <Link to="/login">
//                 <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors">
//                   Log In
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const getUserInitials = () => {
    if (user && user.user_name) {
      return user.user_name.charAt(0).toUpperCase();
    } else if (user && user.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "U";
  };

  return (
    <header className="w-full py-4 px-6 bg-white/90 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Gazer Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
        
      
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            HOME
          </Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
            ABOUT
          </Link>
          <Link to="/services" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
            SERVICES
          </Link>
          <Link to="/gallery" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
            GALLERY
          </Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                {user && user.profile_image ? (
                  <img 
                    src={user.profile_image || "/placeholder.svg"} 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                    {getUserInitials()}
                  </div>
                )}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    <p className="font-medium">{user?.user_name || 'User'}</p>
                    <p className="text-gray-500 truncate">{user?.email}</p>
                  </div>
                  
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </Link>
                  
                  <Link 
                    to="/bookings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Bookings
                  </Link>
                  
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </Link>
                  
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signup">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors">
                  Log In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}