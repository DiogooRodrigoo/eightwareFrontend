"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getAuthToken } from "../utils/authToken";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // <- nova flag

  useEffect(() => {
    const tokenFromCookie = getAuthToken();

    if (tokenFromCookie) {
      setToken(tokenFromCookie);
      setIsAuthenticated(true);
    }

    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <AuthContext.Provider value={{ token, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
