import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import { View, Text, Image } from "react-native";
import { getCards, getDeckId } from "../../services/axiosClient";
import { styles } from "./styles";
import { AuthContext } from "../../context/AuthContext";
import { verificaGanhador, verificaMao, rankString } from "./rules";

const Game = ({ route, navigation }) => {
  const { idDeck } = route.params;
  const [deckId, setDeckId] = useState(idDeck);
  const [cards, setCards] = useState(null);
  const [hand, setHand] = useState(null);
  const [oponente, setOponente] = useState(null);
  const [rankUser, setRankUser] = useState("");
  const [fichasUser, setFichasUser] = useState(1000);
  const [fichasOponente, setFichasOponente] = useState(1000);
  const [pot, setPot] = useState(0);
  const [rodada, setRodada] = useState(0);
  const [final, setFinal] = useState(false);
  const { user } = useContext(AuthContext);

  const flop = async () => {
    const deck = await getCards(deckId, 3);
    setCards(deck);
  };

  // turn e river
  const get = async () => {
    const deck = await getCards(deckId, 1);
    if (cards === null) {
      setCards(deck);
    } else {
      setCards({ ...cards, cards: [...cards.cards, ...deck.cards] });
      if (cards.cards.length === 4) {
        setFinal(true);
      }
    }
  };

  const handleAposta = () => {
    setFichasUser((prevstate) => prevstate - 50);
    setFichasOponente((prevstate) => prevstate - 50);
    setPot((prevstate) => prevstate + 100);
    handleNextTurn();
  };

  const handleGanhador = () => {
    console.log(hand);
    console.log(oponente);
    console.log(cards);
    const ganhador = verificaGanhador(hand, oponente, cards);
    if (ganhador === 1) setFichasUser((prevstate) => prevstate + pot);
    else setFichasOponente((prevstate) => prevstate + pot);
    novoJogo();
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

  const handleFold = async () => {
    setFichasOponente((prevstate) => prevstate + pot);
    novoJogo();
  };

  const novoJogo = async () => {
    setPot(0);
    const newDeckId = await getDeckId();
    setDeckId(newDeckId);
    setCards(null);
    getHand();
    setFinal(false);
    setRodada(0);
  };

  useEffect(() => {
    getHand();
  }, []);

  useEffect(() => {
    if (hand) {
      const rank = verificaMao(hand, cards);
      setRankUser(rankString(rank));
    }
  }, [cards, hand]);

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
        <Text style={styles.text}>Rodada: {rodada}</Text>
        <Text style={styles.text}>Pot: ${pot}</Text>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.hands}>
          <Text style={styles.text}>
            {user.nome} ${fichasUser} - {rankUser}
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
          {!final && <Button text={"Apostar"} action={() => handleAposta()} />}
          {!final && rodada > 0 && (
            <Button text={"Mesa"} action={() => handleNextTurn()} />
          )}
          {!final && <Button text={"Fold"} action={() => handleFold()} />}
          {!final && <Button text={"Sair"} action={navigation.goBack} />}
          {final && (
            <Button text={"Novo jogo"} action={() => handleGanhador()} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Game;
