import { createContext, useContext } from "react";

export interface AuthContextValues {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValues>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = AuthContext.Provider;
export const login = (username: string, password: string) =>
  fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
