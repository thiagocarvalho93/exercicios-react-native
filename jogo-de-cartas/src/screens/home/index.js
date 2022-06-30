import React, { useEffect, useState } from "react";
import { Text, ImageBackground, View } from "react-native";
import { styles } from "./styles";
import { getDeckId } from "../../services/axiosClient";
import bgImg from "../../assets/images/cards.png";
import Button from "../../components/Button";

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

  return (
    <ImageBackground
      source={bgImg}
      style={styles.container}
      imageStyle={{ resizeMode: "contain" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Texas Hold'em</Text>
      </View>
      <View style={{ flex: 4 }}>
        <Button text={"Iniciar"} action={inciarPartida} />
      </View>
    </ImageBackground>
  );
};

export default Home;
