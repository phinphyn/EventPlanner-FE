// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import axios from 'axios';

// function LoginBody() {
//     const { login } = useAuth();
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
        
//         // Clear error when user types
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};
        
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email is invalid';
//         }
        
//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         }
        
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmitLogin = async (e) => {
//         e.preventDefault();
        
//         if (!validateForm()) return;
        
//         setIsLoading(true);
        
//         try {
//             const response = await axios.post(
//                 "http://localhost:5000/api/auth/login", 
//                 formData,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );
            
//             login(response.data.token);
            
//             if (response.data.is_admin) {
//                 navigate("/admin");
//             } else {
//                 navigate("/");
//             }
//         } catch (error) {
//             console.error('Login error:', error);
            
//             if (error.response) {
//                 // Server responded with an error
//                 if (error.response.status === 401) {
//                     setErrors({ general: 'Invalid email or password' });
//                 } else if (error.response.data && error.response.data.message) {
//                     setErrors({ general: error.response.data.message });
//                 } else {
//                     setErrors({ general: 'Failed to login. Please try again.' });
//                 }
//             } else if (error.request) {
//                 // Request made but no response
//                 setErrors({ general: 'No response from server. Please check your connection.' });
//             } else {
//                 setErrors({ general: 'An error occurred. Please try again.' });
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold text-gray-800">Login</h1>
            
//             {errors.general && (
//                 <div className="w-full mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//                     {errors.general}
//                 </div>
//             )}
            
//             <form onSubmit={handleSubmitLogin} className="mt-8 space-y-6 w-full">
//                 <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                         Email
//                     </label>
//                     <input 
//                         id="email"
//                         name="email"
//                         type="email" 
//                         placeholder="Email" 
//                         className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
//                             errors.email ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && (
//                         <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                     )}
//                 </div>
                
//                 <div>
//                     <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                         Password
//                     </label>
//                     <input 
//                         id="password"
//                         name="password"
//                         type="password" 
//                         placeholder="Password" 
//                         className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
//                             errors.password ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     {errors.password && (
//                         <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//                     )}
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                         <input
//                             id="remember-me"
//                             name="remember-me"
//                             type="checkbox"
//                             className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
//                         />
//                         <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                             Remember me
//                         </label>
//                     </div>
                    
//                     <div className="text-sm">
//                         <a href="/forgot-password" className="text-orange-500 hover:text-orange-600">
//                             Forgot password?
//                         </a>
//                     </div>
//                 </div>
                
//                 <button 
//                     type="submit" 
//                     className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50"
//                     disabled={isLoading}
//                 >
//                     {isLoading ? 'Logging in...' : 'Login'}
//                 </button>
                
//                 <div className="text-center mt-4">
//                     <p className="text-sm text-gray-600">
//                         Don't have an account?{' '}
//                         <a href="/register" className="text-orange-500 hover:text-orange-600">
//                             Sign up
//                         </a>
//                     </p>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default LoginBody;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

function LoginBody() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const loginSuccess = login(response.data.token);

      if (!loginSuccess) {
        setErrors({ general: "Invalid token received from server" });
        return;
      }

      if (response.data.is_admin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        if (error.response.status === 401) {
          setErrors({ general: error.response.data.message || "Incorrect password" });
        } else if (error.response.status === 404) {
          setErrors({ general: error.response.data.message || "User not found" });
        } else if (error.response.data && error.response.data.message) {
          setErrors({ general: error.response.data.message });
        } else {
          setErrors({ general: "Failed to login. Please try again." });
        }
      } else if (error.request) {
        setErrors({ general: "No response from server. Please check your connection." });
      } else {
        setErrors({ general: "An error occurred. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Login</h1>

      {errors.general && (
        <div className="w-full mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmitLogin} className="mt-8 space-y-6 w-full">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="/forgot-password"
              className="text-orange-500 hover:text-orange-600"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-orange-500 hover:text-orange-600">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginBody;