import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { View, Text, Image } from "react-native";
import { getCards } from "../../services/axiosClient";
import { styles } from "./styles";

const Game = ({ route }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);

  const get = async () => {
    const deck = await getCards(deckId, 1);
    setCards(deck);
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {cards &&
          cards.cards.map((card) => (
            <Image source={card.image} style={{ width: 113, height: 157 }} />
          ))}
      </View>
      <View style={styles.menu}>
        <Text>Pontuação:</Text>
        <Button text={"Comprar carta"} action={() => get()} />
        <Button text={"Finalizar"} />
      </View>
    </View>
  );
};

export default Game;
