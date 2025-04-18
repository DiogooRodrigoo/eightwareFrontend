export async function signInService(email, password) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Falha no login");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}
