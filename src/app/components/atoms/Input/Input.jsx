"use client";
import React from "react";
//styles
import { InputContainer } from "./styles";

const Input = ({ type, name, value, onChange, placeholder, hasError }) => {
  return (
    <InputContainer
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      hasError={hasError}
    />
  );
};

export default Input;
