"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
//components
import Button from "../../atoms/Button/Button";
import InputField from "../../molecules/InputField/InputField";
import Modal from "../../organisms/Modal/Modal";
//utils
import { validateLoginForm } from "../../../utils/validateLoginForm";
//hooks
import useAuth from "../../../hooks/useSessions";
//styles
import * as C from "./styles";

export default function SignInForm() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

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

      setIsModalOpen(true);
      setTimeout(() => {
        router.push("/profile");
      }, 5000);
    } catch (err) {
      setGeneralError("Erro ao tentar logar.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <C.Form onSubmit={handleSubmit} noValidate>
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

      {generalError && <C.LabelError>{generalError}</C.LabelError>}

      <Button type="submit" disabled={!isFormFilled}>
        Entrar
      </Button>

      <C.RegisterText>
        Ainda nao tem conta ? {""}
        <C.RegisterLink href="/signup">Cadastre-se aqui</C.RegisterLink>
      </C.RegisterText>

      {isModalOpen && (
        <Modal
          title="Login Bem-Sucedido"
          message="Você foi redirecionado para o seu perfil."
          onClose={closeModal}
        />
      )}
    </C.Form>
  );
}
