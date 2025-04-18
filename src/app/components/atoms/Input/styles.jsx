import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 12px;
  padding: 0 16px;
  font-size: 16px;

  &::placeholder {
    color: #000;
    opacity: 1;
  }
`;
