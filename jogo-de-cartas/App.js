import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
//import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import AuthProvider from "./src/context/AuthContext";

const App = () => {
  //const [fontesCarregadas] = useFonts({ Roboto_400Regular });

  return (
    <AuthProvider>
      <StatusBar />
      <Routes />
    </AuthProvider>
  );
};

export default App;
