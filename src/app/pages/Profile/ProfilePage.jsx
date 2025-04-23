import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//contexts
import { useAuthContext } from "../../context/SessionsProvider";
//components
import ProfileForm from "../../components/organisms/ProfileForm/ProfileForm";
import Button from "../../components/atoms/Button/Button";
//styles
import * as C from "./styles";

const ProfilePage = () => {
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
    <C.PageContainer>
      <C.ContentsContainer>
        <ProfileForm />
        <Button type="submit" onClick={handleLogout}>
          Sair
        </Button>
      </C.ContentsContainer>
    </C.PageContainer>
  );
};

export default ProfilePage;
