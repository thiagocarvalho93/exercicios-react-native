import { useEffect, useState } from "react";
import { View, Text } from "react-native";
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
    // if (cards.length === 0) return;
    console.log(cards);
  }, [cards]);

  return (
    <View style={styles.container}>
      {cards &&
        cards.cards.map((card) => (
          <Text style={styles.buttonText}>{card.image}</Text>
        ))}
    </View>
  );
};

export default Game;
