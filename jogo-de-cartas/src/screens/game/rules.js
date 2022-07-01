const organizaNaipes = (mao, mesa) => {
  // Array de naipes
  let valores = [];
  mao.cards.forEach((item) => valores.push(item.suit));
  if (mesa != null) mesa.cards.forEach((item) => valores.push(item.suit));
  return valores;
};

export const organizaValores = (mao, mesa) => {
  // Array de valores
  let valores = [];
  mao.cards.forEach((item) => valores.push(item.value));
  if (mesa != null) mesa.cards.forEach((item) => valores.push(item.value));

  valores = valores.map((element) => {
    if (element === "JACK") return "11";
    if (element === "QUEEN") return "12";
    if (element === "KING") return "13";
    if (element === "ACE") return "14";
    return element;
  });
  valores = valores
    .map((a) => parseInt(a, 10))
    .sort(function (a, b) {
      return a - b;
    });
  return valores;
};

export const verificaFlush = (mao, mesa) => {
  let valores = organizaNaipes(mao, mesa);
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
  if (max >= 5) return true;
  return false;
};

export const verificaStraight = (mao, mesa) => {
  let valores = organizaValores(mao, mesa);
  let count = 1;
  let max = 1;
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] - prev === 1) {
      count++;
      if (count > max) max = count;
    } else if (valores[i] - prev > 1) {
      count = 1;
    }
    prev = valores[i];
  }
  if (max >= 5) return true;
  return false;
};

export const verificaDuplicados = (mao, mesa) => {};

export const verificaMao = (mao, mesa) => {};
