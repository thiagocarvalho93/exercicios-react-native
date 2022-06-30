import { View, Text, TextInput } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./styles";
import Button from "../../components/Button";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="Usuário"
        styles={styles.input}
        value={usuarioInput}
        onChange={(e) => setUsuarioInput(e.target.value)}
      />
      <TextInput
        placeholder="Senha"
        styles={styles.input}
        value={senhaInput}
        onChange={(e) => setSenhaInput(e.target.value)}
      />
      <Button
        text={"Entrar"}
        title="ENTRAR"
        action={() => signIn(usuarioInput, senhaInput)}
      />
    </View>
  );
};

export default Login;
