import { createContext, useState } from "react";
import { login } from "../services/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logado, setLogado] = useState(false);

  const signIn = async (usuario, senha) => {
    console.log(usuario);
    const response = await login();
    console.log(response.user.email);
    if (usuario === "" && senha === "") {
      setUser(response);
      setLogado(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logado, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
