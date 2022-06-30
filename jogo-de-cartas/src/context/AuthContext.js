import { createContext, useState } from "react";
import { login } from "../services/auth";
import api from "../services/api";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logado, setLogado] = useState(false);

  const signIn = async (usuario, senha) => {
    const { user, token } = await login(usuario, senha);
    if (user && token) {
      setUser(user);
      setLogado(true);
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
    }
  };

  return (
    <AuthContext.Provider value={{ user, logado, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
