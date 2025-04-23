"use client";

import { useAuthContext } from "../context/SessionsProvider";
import { loginRequest, registerRequest } from "../api/auth";
import { getMe } from "../api/user";

export default function useAuth() {
  const { login } = useAuthContext();

  const signIn = async (email, password) => {
    try {
      const token = await loginRequest(email, password);

      document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;

      if (!token) {
        throw new Error("Token não encontrado após login.");
      }

      const userData = await getMe();

      login(token, userData);

      return token;
    } catch (error) {
      throw new Error(
        error?.message || "Erro ao realizar login ou obter dados do usuário."
      );
    }
  };

  const signUp = async ({
    full_name,
    email,
    password,
    password_confirmation,
  }) => {
    try {
      console.log("Enviando para registro:", {
        full_name,
        email,
        password,
        password_confirmation,
      });

      await registerRequest({
        full_name,
        email,
        password,
        password_confirmation,
      });
    } catch (error) {
      throw new Error(
        error?.message || "Erro ao realizar cadastro do usuário."
      );
    }
  };

  return { signIn, signUp };
}
