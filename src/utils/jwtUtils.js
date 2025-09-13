// Decode JWT (simplified)
export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return {
      id: payload.id,
      role: payload.role,
      email: payload.email,
    };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

export const clearToken = () => {
  localStorage.removeItem("token");
};
