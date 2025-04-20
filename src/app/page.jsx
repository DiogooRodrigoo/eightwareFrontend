"use client";

import SignInPage from "./pages/SignIn/SignInPage";
import { isAuthenticated } from "./utils/authToken";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" && isAuthenticated()) {
      router.push("/profile");
    }
  }, [pathname]);

  return (
    <div>
      <SignInPage />
    </div>
  );
}
