import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Private from "./Private";
import Public from "./Public";

const Routes = () => {
  const { logado } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {logado ? <Private /> : <Public />}
    </NavigationContainer>
  );
};

export default Routes;
