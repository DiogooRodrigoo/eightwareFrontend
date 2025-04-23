import styled from "styled-components";

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 95vh;
  width: 100%;
  max-width: 900px;
  padding-inline: 10px;
  gap: 25px;
`;

export const FormContainer = styled.div`
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 12px;
  text-align: center;
`;

export const Description = styled.p`
  width: 100%;
  max-width: 400px;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 30px;
`;
