"use client";
import React from "react";
import Image from "next/image";
//styles
import * as C from "../../styles/styles";
//components
import SignInForm from "../../components/organisms/SignInForm/SignInForm";
//assets
import IllustrationImage from "../../assets/Illustration_SignIn.png";

const SignInPage = () => {
  return (
    <C.ContentsContainer>
      <C.FormContainer>
        <C.Title>Seja bem-vindo!</C.Title>
        <C.Description>
          Digite seu e-mail e senha para acessar sua conta.
        </C.Description>
        <SignInForm />
      </C.FormContainer>

      <Image src={IllustrationImage} alt="Image" width={300} height={300} />
    </C.ContentsContainer>
  );
};

export default SignInPage;
