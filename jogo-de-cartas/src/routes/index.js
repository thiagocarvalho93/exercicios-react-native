import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Private from "./Private";
import Public from "./Public";

const Routes = () => {
  const { user, logado } = useContext(AuthContext);

  console.log(user);

  return (
    <NavigationContainer>
      {!!logado ? <Private /> : <Public />}
    </NavigationContainer>
  );
};

export default Routes;
