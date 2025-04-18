import React from "react";
import InputField from "../../molecules/InputField/InputField";

export default function SignInForm() {
  return (
    <div>
      <InputField
        labelInput={"E-mail"}
        typeInput="email"
        nameInput="email"
        placeholderInput="Digite seu e-mail"
      />

      <InputField
        labelInput={"Senha"}
        typeInput="password"
        nameInput="password"
        placeholderInput="Digite sua senha"
      />
    </div>
  );
}
