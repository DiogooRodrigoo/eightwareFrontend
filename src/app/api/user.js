export async function getMe() {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    throw new Error("Token de autenticação não encontrado.");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("Dados do usuário:", data);

  if (!response.ok) {
    throw new Error(
      data?.error?.message || "Erro ao obter informações do usuário."
    );
  }

  return data;
}
