import { useEffect, useState } from "react";
import { View } from "react-native";
import { getCards } from "../../services/axiosClient";
import { styles } from "./styles";

const Game = ({ route }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const get = async () => {
      const deck = await getCards(deckId, 7);
      setCards(deck);
    };
    get();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return <View style={styles.container}></View>;
};

export default Game;
