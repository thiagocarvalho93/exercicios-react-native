import { Text, Pressable } from "react-native";
import { styles } from "./styles";

const Button = ({ text, action }) => {
  return (
    <Pressable onPress={action} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
