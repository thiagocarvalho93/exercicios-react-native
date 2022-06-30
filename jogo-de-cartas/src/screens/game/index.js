import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { View, Text, Image } from "react-native";
import { getCards } from "../../services/axiosClient";
import { styles } from "./styles";

const Game = ({ route, navigation }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);

  const get = async () => {
    const deck = await getCards(deckId, 1);
    if (cards === null) {
      setCards(deck);
    } else {
      setCards({ ...cards, cards: [...cards.cards, ...deck.cards] });
    }
    console.log(cards);
  };

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {cards &&
          cards.cards.map((card, index) => (
            <Image
              key={index}
              source={card.image}
              style={{ width: 56, height: 79 }}
            />
          ))}
      </View>
      <View style={styles.menu}>
        <Text style={styles.text}>Pontuação:</Text>
        <Button text={"Comprar carta"} action={() => get()} />
        <Button text={"Voltar"} action={navigation.goBack} />
      </View>
    </View>
  );
};

export default Game;
