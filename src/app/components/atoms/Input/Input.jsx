import React from "react";
//styles
import { InputContainer } from "./styles";

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <InputContainer
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
