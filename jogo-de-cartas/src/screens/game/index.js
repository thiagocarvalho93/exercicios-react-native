import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import { View, Text, Image } from "react-native";
import { getCards } from "../../services/axiosClient";
import { styles } from "./styles";
import { AuthContext } from "../../context/AuthContext";

const Game = ({ route, navigation }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);
  const [hand, setHand] = useState(null);
  const [oponente, setOponente] = useState(null);
  const [fichasUser, setFichasUser] = useState(1000);
  const [fichasOponente, setFichasOponente] = useState(1000);
  const [pot, setPot] = useState(0);
  const [rodada, setRodada] = useState(0);
  const [final, setFinal] = useState(false);
  const { user } = useContext(AuthContext);

  const flop = async () => {
    const deck = await getCards(deckId, 3);
    setCards(deck);
    console.log(cards);
  };

  // turn e river
  const get = async () => {
    if (final) return;
    const deck = await getCards(deckId, 1);
    if (cards === null) {
      setCards(deck);
    } else {
      setCards({ ...cards, cards: [...cards.cards, ...deck.cards] });
    }
    if (cards.cards.length === 4) {
      setFinal(true);
    }
  };

  const handleAposta = () => {
    if (final) return;
    setFichasUser((prevstate) => prevstate - 50);
    setFichasOponente((prevstate) => prevstate - 50);
    setPot((prevstate) => prevstate + 100);
    handleNextTurn();
  };

  const handleNextTurn = () => {
    if (rodada === 0) {
      flop();
    } else {
      get();
    }
    setRodada((prevstate) => prevstate + 1);
  };

  const getHand = async () => {
    const hand = await getCards(deckId, 2);
    const oponente = await getCards(deckId, 2);
    setHand(hand);
    setOponente(oponente);
  };

  const handleFold = () => {
    setFichasOponente((prevstate) => prevstate + pot);
    setPot(0);
  };

  useEffect(() => {
    getHand();
  }, []);

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
      <View style={styles.gameStatus}>
        <Text style={styles.text}>Rodada: FLOP</Text>
        <Text style={styles.text}>Pot: ${pot}</Text>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.hands}>
          <Text style={styles.text}>
            {user.nome} ${fichasUser}
          </Text>
          <View style={styles.hand}>
            {hand &&
              hand.cards.map((card, index) => (
                <Image
                  key={index}
                  source={card.image}
                  style={{ width: 56, height: 79 }}
                />
              ))}
          </View>
          <Text style={styles.text}>Oponente ${fichasOponente}</Text>
          <View style={styles.hand}>
            {!!oponente &&
              oponente.cards.map((card, index) => (
                <Image
                  key={index}
                  source={
                    final
                      ? card.image
                      : "https://opengameart.org/sites/default/files/card%20back%20red.png"
                  }
                  style={{ width: 56, height: 79 }}
                />
              ))}
          </View>
        </View>
        <View style={styles.menu}>
          <Button text={"Apostar"} action={() => handleAposta()} />
          <Button text={"Mesa"} action={() => handleNextTurn()} />
          <Button text={"Fold"} action={() => handleFold()} />
          <Button text={"Sair"} action={navigation.goBack} />
        </View>
      </View>
    </View>
  );
};

export default Game;
