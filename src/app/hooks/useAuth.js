"use client";

export default function useAuth() {
  const signIn = async (email, password) => {
    console.log("E-mail:", email);
    console.log("Senha:", password);
    const res = await fetch(`http://localhost:4000/auth/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { email, password } }),
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Erro ao fazer login:", res.status, data);
      throw new Error(data?.error?.message || "Erro ao fazer login.");
    }

    const token = data.token;

    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;

    return token;
  };

  return { signIn };
}
