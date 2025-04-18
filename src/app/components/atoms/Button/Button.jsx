import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
