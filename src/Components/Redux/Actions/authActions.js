export const register = (user) => ({
  type: "REGISTER",
  payload: user
});

export const login = (user) => ({
  type: "LOGIN",
  payload: user
});

export const logout = () => ({
  type: "LOGOUT"
});
