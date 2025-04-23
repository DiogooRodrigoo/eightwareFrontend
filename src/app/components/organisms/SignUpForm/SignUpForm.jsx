"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
//components
import Button from "../../atoms/Button/Button";
import InputField from "../../molecules/InputField/InputField";
//hooks
import useAuth from "../../../hooks/useSessions";
//utils
import { validateSignUpForm } from "../../../utils/validadeSignUpForm";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const { signUp } = useAuth();
  const router = useRouter();

  // States for each field error
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateSignUpForm(
      fullName,
      email,
      password,
      confirmPassword
    );

    setFullNameError(errors.fullName);
    setEmailError(errors.email);
    setPasswordError(errors.password);
    setConfirmPasswordError(errors.confirmPassword);

    if (!isValid) return;

    try {
      const data = await signUp({
        full_name: fullName,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      setStatus("Cadastro realizado com sucesso!");
      router.push("/profile");
    } catch (err) {
      console.error("Erro ao realizar cadastro:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        labelInput="Nome Completo"
        placeholderInput="Digite seu nome completo"
        valueInput={fullName}
        onChangeInput={(e) => setFullName(e.target.value)}
        error={fullNameError}
      />

      <InputField
        labelInput="E-mail"
        placeholderInput="Digite seu e-mail"
        valueInput={email}
        onChangeInput={(e) => setEmail(e.target.value)}
        error={emailError}
      />

      <InputField
        labelInput="Senha"
        placeholderInput="Digite sua senha"
        type="password"
        valueInput={password}
        onChangeInput={(e) => setPassword(e.target.value)}
        error={passwordError}
      />

      <InputField
        labelInput="Confirmar Senha"
        placeholderInput="Repita a senha"
        type="password"
        valueInput={confirmPassword}
        onChangeInput={(e) => setConfirmPassword(e.target.value)}
        error={confirmPasswordError}
      />

      <Button type="submit">Cadastrar</Button>

      {status && <p style={{ marginTop: 16 }}>{status}</p>}
    </form>
  );
};

export default SignUpForm;
