import React from "react";
//styles
import { InputFieldContainer } from "./styles";
//components
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

const InputField = ({
  labelInput,
  typeInput,
  nameInput,
  valueInput,
  onChangeInput,
  placeholderInput,
  error,
}) => {
  return (
    <InputFieldContainer>
      <Label label={labelInput} hasError={!!error} />

      <Input
        type={typeInput}
        name={nameInput}
        value={valueInput}
        onChange={onChangeInput}
        placeholder={placeholderInput}
        hasError={!!error}
      />

      {error && (
        <span style={{ color: "red", fontSize: "13px", fontWeight: 300 }}>
          {error}
        </span>
      )}
    </InputFieldContainer>
  );
};

export default InputField;
