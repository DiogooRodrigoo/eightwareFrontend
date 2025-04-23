"use client";
import React from "react";
import Image from "next/image";
//styles
import * as C from "../../styles/styles";
//assets
import IllustrationImage from "../../assets/Illustration_SignUp.png";
//components
import SignUpForm from "../../components/organisms/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <C.ContentsContainer>
      <Image src={IllustrationImage} alt="Image" width={300} height={300} />

      <C.FormContainer>
        <C.Title>Crie sua conta!</C.Title>
        <C.Description>
          Preencha os dados abaixo para desbloquear todas as funcionalidades da
          plataforma
        </C.Description>

        <SignUpForm />
      </C.FormContainer>
    </C.ContentsContainer>
  );
};

export default SignUpPage;
