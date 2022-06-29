import React from "react";
import Routes from "./src/routes";
import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";

const App = () => {
  const [fontesCarregadas] = useFonts({ Roboto_400Regular });

  if (!fontesCarregadas) {
    return null;
  }

  return <Routes />;
};

export default App;
