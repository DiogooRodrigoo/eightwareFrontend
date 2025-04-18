import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ children, onClick, type = "button", disabled }) => {
  return (
    <ButtonContainer disabled={disabled} type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
