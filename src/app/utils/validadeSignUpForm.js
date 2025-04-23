export const validateSignUpForm = (
  fullName,
  email,
  password,
  confirmPassword
) => {
  const errors = {};

  if (!fullName) {
    errors.fullName = "Nome completo é obrigatório.";
  } else if (fullName.trim().length < 3) {
    errors.fullName = "O nome deve ter pelo menos 3 caracteres.";
  } else if (!/^[A-Za-zÀ-ÿ\s]+$/.test(fullName)) {
    errors.fullName = "O nome deve conter apenas letras.";
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    errors.email = "E-mail é obrigatório.";
  } else if (!emailRegex.test(email)) {
    errors.email = "E-mail inválido.";
  }

  if (!password) {
    errors.password = "Senha é obrigatória.";
  } else if (password.length < 6) {
    errors.password = "A senha deve ter pelo menos 6 caracteres.";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirmação da senha é obrigatória.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "As senhas não coincidem.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
