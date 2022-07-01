import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Game from "../screens/game";

const Stack = createNativeStackNavigator();

const Private = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ title: "Game", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Private;
