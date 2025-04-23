"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getAuthToken, removeAuthToken } from "../utils/tokenStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const tokenFromCookie = getAuthToken();

    if (tokenFromCookie) {
      setToken(tokenFromCookie);
      setIsAuthenticated(true);
    }

    setHasMounted(true);
  }, []);

  const login = (token) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeAuthToken();

    setToken(null);
    setIsAuthenticated(false);
  };

  if (!hasMounted) return null;

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
