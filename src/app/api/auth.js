export async function loginRequest(email, password) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign_in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Erro ao fazer login:", res.status, data);
    throw new Error(data?.error?.message || "Erro ao fazer login.");
  }

  return data.token;
}
