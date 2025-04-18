export function validateEmailDomain(email) {
  const regex = /^[^@]+@[^@]+\.(com)$/i;
  return regex.test(email);
}
