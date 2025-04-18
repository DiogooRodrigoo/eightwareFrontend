import React, { useState } from "react";
import InputField from "../../molecules/InputField/InputField";
//components
import Button from "../../atoms/Button/Button";
//utils
import { validateEmailDomain } from "../../../utils/validateEmailDomain";
//services
import { signInService } from "../../../services/authService";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!validateEmailDomain(email)) {
      setEmailError(
        "Formato de e-mail inválido. Exemplo válido: nome@domínio.com"
      );
      hasError = true;
    } else {
      setEmailError("");
    }

    if (password.length === 0) {
      setPasswordError("Preencha a senha.");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) return;

    try {
      setGeneralError("");
      const data = await login(email, password);
      console.log("Login bem-sucedido:", data);
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
