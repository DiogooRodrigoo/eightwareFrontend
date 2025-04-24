"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// components
import Button from "../../atoms/Button/Button";
import InputField from "../../molecules/InputField/InputField";
import Modal from "../../organisms/Modal/Modal";
// hooks
import useAuth from "../../../hooks/useSessions";
// utils
import { validateSignUpForm } from "../../../utils/validadeSignUpForm";
// styles
import * as C from "./styles";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useAuth();
  const router = useRouter();

  // States for each field error
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const isFormFilled =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";

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

      setStatus(
        "Agora você será redirecionado para a tela de login para acessar sua conta."
      );
      setIsSuccess(true);
      setShowModal(true);
    } catch (err) {
      setStatus("Por favor, verifique seus dados e tente novamente.");
      console.error("Erro ao realizar cadastro:", err);

      if (err?.response?.data?.errors) {
        const errorMessages = Object.values(err.response.data.errors).join(
          ", "
        );
        setStatus(`Erro ao tentar cadastrar: ${errorMessages}`);
      }

      setIsSuccess(false);
      setShowModal(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        labelInput="Nome Completo"
        placeholderInput="Digite seu nome completo"
        typeInput="name"
        valueInput={fullName}
        onChangeInput={(e) => setFullName(e.target.value)}
        error={fullNameError}
      />

      <InputField
        labelInput="E-mail"
        placeholderInput="Digite seu e-mail"
        typeInput="email"
        valueInput={email}
        onChangeInput={(e) => setEmail(e.target.value)}
        error={emailError}
      />

      <InputField
        labelInput="Senha"
        placeholderInput="Digite sua senha"
        typeInput="password"
        valueInput={password}
        onChangeInput={(e) => setPassword(e.target.value)}
        error={passwordError}
      />

      <InputField
        labelInput="Confirmar Senha"
        placeholderInput="Repita a senha"
        typeInput="password"
        valueInput={confirmPassword}
        onChangeInput={(e) => setConfirmPassword(e.target.value)}
        error={confirmPasswordError}
      />

      <Button type="submit" disabled={!isFormFilled}>
        Cadastrar
      </Button>

      <C.FormRedirectText>
        Já tem uma conta?{" "}
        <C.FormRedirectLink onClick={() => router.push("/")}>
          Faça login
        </C.FormRedirectLink>
      </C.FormRedirectText>

      {showModal && (
        <Modal
          title={
            isSuccess
              ? "Cadastro realizado com sucesso!"
              : "Ocorreu um erro durante o cadastro."
          }
          message={status}
          onClose={() => {
            setShowModal(false);
            if (isSuccess) router.push("/");
          }}
        />
      )}
    </form>
  );
};

export default SignUpForm;
