export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  return null;
};

export const isAuthenticated = (token) => {
  return !!token;
};

export const removeAuthToken = () => {
  document.cookie = "token=; path=/; max-age=0";
};
