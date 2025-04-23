import React from "react";
//styles
import * as C from "./styles";

const Modal = ({ title, message, onClose }) => {
  return (
    <C.Overlay>
      <C.Modal>
        <C.Title>{title}</C.Title>
        <C.Message>{message}</C.Message>
        <C.CloseButton onClick={onClose}>Fechar</C.CloseButton>
      </C.Modal>
    </C.Overlay>
  );
};

export default Modal;
