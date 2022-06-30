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
      <View style={styles.box}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          placeholder="Usuário"
          style={styles.input}
          value={usuarioInput}
          onChangeText={setUsuarioInput}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={senhaInput}
          onChangeText={setSenhaInput}
        />
        <Button
          text={"Entrar"}
          title="ENTRAR"
          action={() => signIn(usuarioInput, senhaInput)}
        />
      </View>
    </View>
  );
};

export default Login;
