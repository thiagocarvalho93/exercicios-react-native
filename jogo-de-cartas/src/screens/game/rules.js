const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE",
];

const suits = ["SPADES", "DIAMONDS", "CLUBS", "HEARTS"];

export const verificaDupla = (mao, mesa) => {
  // Array de valores
  let valores = [];
  mao.cards.forEach((item) => valores.push(item.value));
  if (mesa != null) mesa.cards.forEach((item) => valores.push(item.value));
  console.log(valores);
  console.log(values);
  let count = 0;
  let max = 1;
  for (let i = 0; i < valores.length; i++) {
    for (let j = i; j < valores.length; j++) {
      if (valores[i] == valores[j]) count++;
      if (count > max) {
        max = count;
      }
    }
    count = 0;
  }
  console.log(max);
  return max;
};

export const verificaFlush = (mao, mesa) => {
  // Array de valores
  let valores = [];
  mao.cards.forEach((item) => valores.push(item.suit));
  if (mesa != null) mesa.cards.forEach((item) => valores.push(item.suit));
  console.log(valores);
  console.log(values);
  let count = 0;
  let max = 1;
  for (let i = 0; i < valores.length; i++) {
    for (let j = i; j < valores.length; j++) {
      if (valores[i] == valores[j]) count++;
      if (count > max) {
        max = count;
      }
    }
    count = 0;
  }
  console.log(max);
  if (max >= 5) return true;
  return false;
};

export const verificaMao = (mao, mesa) => {};
