import { validateEmailDomain } from "./validateEmailDomain";

export const validateLoginForm = (email, password) => {
  const errors = {
    email: "",
    password: "",
  };

  let isValid = true;

  if (!validateEmailDomain(email)) {
    errors.email =
      "Formato de e-mail inválido. Exemplo válido: nome@domínio.com";
    isValid = false;
  }

  if (!password || password.length === 0) {
    errors.password = "Preencha a senha.";
    isValid = false;
  }

  return { isValid, errors };
};
