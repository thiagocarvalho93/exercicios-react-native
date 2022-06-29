import React, { useEffect, useState } from "react";
import { Text, Pressable, StatusBar, ImageBackground } from "react-native";
import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import { styles } from "./styles";
import { getDeckId } from "../../services/axiosClient";
import bgImg from "../../assets/images/ace2.avif";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [idDeck, setIdDeck] = useState(null);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const id = await getDeckId();
      setIdDeck(id);
      setLoading(false);
    };
    get();
  }, []);

  const inciarPartida = async () => {
    navigation.navigate("Game", {
      deckId: idDeck,
    });
  };

  const [fontesCarregadas] = useFonts({ Roboto_400Regular });
  if (!fontesCarregadas) {
    return <Text>Carregando</Text>;
  }

  return (
    <ImageBackground
      source={bgImg}
      style={styles.container}
      imageStyle={{ resizeMode: "contain" }}
    >
      <StatusBar />
      <Text style={styles.title}>Texas Hold'em</Text>
      <Pressable
        title="Iniciar Partida"
        onPress={inciarPartida}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default Home;
