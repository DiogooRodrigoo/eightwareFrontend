import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 48px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #222;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
