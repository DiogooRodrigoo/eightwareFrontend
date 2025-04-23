"use client";
import React, { useState, useEffect } from "react";
//components
import Button from "../../atoms/Button/Button";
import InputField from "../../molecules/InputField/InputField";
// utils

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <form>
      <InputField
        labelInput={"Nome Completo"}
        placeholderInput="Digite seu nome completo"
      />

      <InputField labelInput={"E-mail"} placeholderInput="Digite seu e-mail" />
      <InputField labelInput={"Senha"} placeholderInput="Digite sua senha" />

      <InputField
        labelInput={"Confirmar Senha"}
        placeholderInput="Repita a senha"
      />

      <Button type="submit">Cadastrar</Button>
    </form>
  );
};

export default SignUpForm;
