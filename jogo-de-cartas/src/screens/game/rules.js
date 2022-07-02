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
  let cartaMaisAlta = valores[0];
  let max = 1;
  for (let i = 0; i < valores.length; i++) {
    for (let j = i; j < valores.length; j++) {
      if (valores[i] == valores[j]) count++;
      if (count > max) {
        max = count;
      }
      if (valores[i] > cartaMaisAlta) cartaMaisAlta = valores[i];
    }
    count = 0;
  }
  if (max >= 5) return cartaMaisAlta;
  return false;
};

export const verificaStraight = (mao, mesa) => {
  let valores = organizaValores(mao, mesa);
  let count = 1;
  let max = 1;
  let cartaMaisAlta = valores[0];
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] - prev === 1) {
      count++;
      if (count > max) max = count;
    } else if (valores[i] - prev > 1) {
      count = 1;
    }
    if (valores[i] > cartaMaisAlta) cartaMaisAlta = valores[i];
    prev = valores[i];
  }
  if (max >= 5) return cartaMaisAlta;
  return false;
};

export const verificaQuadra = (mao, mesa) => {
  let valores = organizaValores(mao, mesa);
  let count = 1;
  let max = 1;
  let cartaMaisAlta = valores[0];
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === prev) count++;
    if (count > max) {
      max = count;
    } else {
      count = 1;
    }
    if (valores[i] > cartaMaisAlta) cartaMaisAlta = valores[i];
    prev = valores[i];
  }
  if (max === 4) return cartaMaisAlta;
  return false;
};

// Terminar
export const verificaFullHouse = (mao, mesa) => {
  let valores = organizaValores(mao, mesa);
  let trinca = false;
  let dupla = false;
  let count = 1;
  let max = 1;
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === prev) count++;
    if (count > max) {
      max = count;
    } else {
      count = 1;
    }
    prev = valores[i];
  }
  if (max === 3) return true;
  return false;
};

export const verificaTrinca = (mao, mesa) => {
  let valores = organizaValores(mao, mesa);
  let count = 1;
  let max = 1;
  let carta = valores[0];
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === prev) count++;
    if (count > max) {
      max = count;
    } else {
      count = 1;
    }
    prev = valores[i];
  }
  if (max === 3) return true;
  return false;
};

export const verificaDupla = (mao, mesa) => {
  let valores = organizaValores(mao, mesa);
  let count = 1;
  let max = 1;
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === prev) count++;
    if (count > max) {
      max = count;
    } else {
      count = 1;
    }
    prev = valores[i];
  }
  if (max === 2) return true;
  return false;
};

export const verificaMao = (mao, mesa) => {
  // STRAIGHT FLUSH 1
  if (verificaStraight(mao, mesa) && verificaFlush(mao, mesa)) return 1;
  // QUADRA 2
  if (verificaQuadra(mao, mesa)) return 2;
  // FULL HOUSE 3
  // FLUSH 4
  if (verificaFlush(mao, mesa)) return 4;
  // STRAIGHT 5
  if (verificaStraight(mao, mesa)) return 5;
  // TRINCA 6
  if (verificaTrinca(mao, mesa)) return 6;
  // DOIS PARES 7
  // PAR 8
  if (verificaDupla(mao, mesa)) return 8;
  // CARTA ALTA 9
  return 9;
};

export const rankString = (rank) => {
  switch (rank) {
    case 1:
      return "Straight Flush";
    case 2:
      return "Quadra";
    case 3:
      return "Full House";
    case 4:
      return "Flush";
    case 5:
      return "Straight";
    case 6:
      return "Trinca";
    case 7:
      return "Dois Pares";
    case 8:
      return "Par";
    default:
      return "Carta Alta";
  }
};

export const verificaGanhador = (maoJogador, maoOponente, mesa) => {
  const jogador = verificaMao(maoJogador, mesa);
  console.log(jogador);
  const oponente = verificaMao(maoOponente, mesa);
  console.log(oponente);
  if (jogador < oponente) return 1;
  if (oponente < jogador) return 2;
  // fazer critério de desempate
  return 1;
};
