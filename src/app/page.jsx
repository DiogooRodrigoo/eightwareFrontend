"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
// utils
import { isAuthenticated } from "./utils/tokenStorage";
//components
import SignInPage from "./pages/SignIn/SignInPage";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" && isAuthenticated()) {
      router.push("/profile");
    }
  }, [pathname]);

  return <SignInPage />;
}
