"use client";
import React from "react";
import Image from "next/image";
//styles
import * as C from "./styles";
import { ContentsContainer } from "@/app/styles/styles";
//components
import SignInForm from "@/app/components/organisms/SignInForm/SignInForm";
import Button from "@/app/components/atoms/Button/Button";
//assets
import IllustrationImage from "../../assets/Illustration_SignIn.png";

const SignInPage = () => {
  return (
    <ContentsContainer>
      <C.FormContainer>
        <C.Title>Seja bem-vindo!</C.Title>
        <C.Description>
          Digite seu e-mail e senha para acessar sua conta.
        </C.Description>
        <SignInForm />

        <Button>Entrar</Button>
      </C.FormContainer>

      <Image src={IllustrationImage} />
    </ContentsContainer>
  );
};

export default SignInPage;
