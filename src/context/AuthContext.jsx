
import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

const safeDecodeToken = (token) => {
  try {
    if (!token || typeof token !== "string") {
      console.error("Token không hợp lệ (không phải chuỗi hoặc rỗng):", token);
      return null;
    }
    console.log("Token trước khi giải mã:", token);
    const decoded = jwtDecode(token);
    console.log("Token decoded:", decoded);
    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error.message, "Token:", token);
    return null;
  }
};

const isTokenExpired = (decodedToken) => {
  if (!decodedToken || !decodedToken.exp) return true;
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTime + 60;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      async (config) => {
        let token = localStorage.getItem("token");
        if (token) {
          const decodedToken = safeDecodeToken(token);
          if (isTokenExpired(decodedToken)) {
            try {
              const response = await axios.post("http://localhost:5000/api/auth/refresh", {}, {
                headers: { Authorization: `Bearer ${token}` },
              });
              token = response.data.token;
              login(token);
            } catch (error) {
              logout();
              return Promise.reject(new Error("Token refresh failed"));
            }
          }
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      const decodedToken = safeDecodeToken(token);

      if (!decodedToken || isTokenExpired(decodedToken)) {
        logout();
        setLoading(false);
        return;
      }

      setUser(decodedToken);
      setIsLoggedIn(true);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (token) => {
    const decodedToken = safeDecodeToken(token);

    if (!decodedToken) {
      console.error("Invalid token provided");
      return false;
    }

    localStorage.setItem("token", token);
    setUser(decodedToken);
    setIsLoggedIn(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
  };

  const isAdmin = () => {
    return user && user.role === "admin";
  };

  const value = {
    user,
    isLoggedIn,
    loading,
    login,
    logout,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};