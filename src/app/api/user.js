export async function getMe() {
  const token = getAuthToken();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do usuário.");
  }

  return await response.json();
}
