"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getAuthToken, removeAuthToken } from "../utils/tokenStorage";
import { getMe } from "../api/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const tokenFromCookie = getAuthToken();

    if (tokenFromCookie) {
      setToken(tokenFromCookie);
      setIsAuthenticated(true);
      fetchUserData(tokenFromCookie);
    }

    setHasMounted(true);
  }, []);

  const login = (token) => {
    setToken(token);
    setIsAuthenticated(true);
    fetchUserData(token);
  };

  const logout = () => {
    removeAuthToken();

    setToken(null);
    setIsAuthenticated(false);
  };

  const fetchUserData = async (token) => {
    try {
      const userData = await getMe();
      setUser(userData);
    } catch (err) {
      console.error("Erro ao obter dados do usuário:", err);
    }
  };

  if (!hasMounted) return null;

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, login, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
