import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
//import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";

const App = () => {
  //const [fontesCarregadas] = useFonts({ Roboto_400Regular });

  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
};

export default App;
