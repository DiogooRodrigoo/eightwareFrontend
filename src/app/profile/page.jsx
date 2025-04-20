"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//contexts
import { useAuthContext } from "../context/AuthProvider";

export default function Profile() {
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isAuthenticated) {
      router.push("/login");
    }
  }, [mounted, isAuthenticated]);

  if (!mounted) return null;

  return <div>Bem-vindo ao seu perfil!</div>;
}
