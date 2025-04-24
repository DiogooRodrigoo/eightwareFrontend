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
    throw new Error(data?.error);
  }

  return data.token;
}

export async function registerRequest({
  full_name,
  email,
  password,
  password_confirmation,
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign_up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        full_name,
        email,
        password,
        password_confirmation,
      },
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Erro ao fazer cadastro:", res.status, data);
    throw new Error(data?.message || "Erro ao realizar cadastro.");
  }

  return data.token;
}
