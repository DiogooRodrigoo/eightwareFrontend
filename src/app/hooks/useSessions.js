"use client";

import { useAuthContext } from "../context/SessionsProvider";
import { loginRequest } from "../api/auth";

export default function useAuth() {
  const { login } = useAuthContext();

  const signIn = async (email, password) => {
    const token = await loginRequest(email, password);

    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;

    login(token);

    return token;
  };

  return { signIn };
}
