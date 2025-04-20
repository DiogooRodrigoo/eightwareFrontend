"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
//components
import Button from "../../atoms/Button/Button";
import InputField from "../../molecules/InputField/InputField";
//utils
import { validateLoginForm } from "../../../utils/validateLoginForm";
//hooks
import useAuth from "../../../hooks/useAuth";

export default function SignInForm() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateLoginForm(email, password);

    setEmailError(errors.email);
    setPasswordError(errors.password);

    if (!isValid) return;

    try {
      setGeneralError("");
      const data = await signIn(email, password);
      console.log("Login bem-sucedido:", data);

      router.push("/profile");
    } catch (err) {
      setGeneralError("Erro ao tentar logar.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        labelInput={"E-mail"}
        typeInput="email"
        nameInput="email"
        placeholderInput="Digite seu e-mail"
        valueInput={email}
        onChangeInput={(e) => setEmail(e.target.value)}
        error={emailError}
      />

      <InputField
        labelInput={"Senha"}
        typeInput="password"
        nameInput="password"
        placeholderInput="Digite sua senha"
        valueInput={password}
        onChangeInput={(e) => setPassword(e.target.value)}
        error={passwordError}
      />

      {generalError && (
        <p style={{ color: "red", marginTop: "8px" }}>{generalError}</p>
      )}

      <Button type="submit" disabled={!isFormFilled}>
        Entrar
      </Button>
    </form>
  );
}
