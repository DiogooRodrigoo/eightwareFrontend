import React from "react";
//contexts
import { useAuthContext } from "../../../context/SessionsProvider";
//components
import InputField from "../../molecules/InputField/InputField";
//styles
import { FormContainer } from "./styles";

const ProfileForm = () => {
  const { user } = useAuthContext();

  const date = new Date(user.created_at);

  const formattedDate = date.toLocaleString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <FormContainer>
      <InputField
        labelInput={"Nome completo"}
        typeInput="email"
        nameInput="email"
        placeholderInput={user.full_name}
      />
      <InputField
        labelInput={"E-mail de cadastro"}
        typeInput="email"
        nameInput="email"
        placeholderInput={user.email}
      />
      <InputField
        labelInput={"Data de cadastro"}
        typeInput="email"
        nameInput="email"
        placeholderInput={formattedDate}
      />
    </FormContainer>
  );
};

export default ProfileForm;
