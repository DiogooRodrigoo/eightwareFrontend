import styled from "styled-components";

export const TextLabel = styled.label`
  font-size: 16px;
  font-weight: 450;
  color: ${({ hasError }) => (hasError ? "red" : "#333")};
`;
