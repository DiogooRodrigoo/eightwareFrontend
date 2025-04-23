"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/SessionsProvider";

export default function Profile() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuthContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined" && !isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!isClient || !isAuthenticated) return null;

  return (
    <div>
      <h1>Bem-vindo ao seu perfil!</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
