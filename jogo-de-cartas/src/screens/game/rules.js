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

export const verificaFlush = (naipes) => {
  let count = 1;
  let flush = false;
  for (let i = 1; i < naipes.length; i++) {
    if (naipes[i] === naipes[i - 1]) count++;
    else count = 1;
    if (count === 5) {
      flush = true;
      break;
    }
  }
  if (flush) return true;
  return false;
};

export const verificaStraight = (valores) => {
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

export const verificaQuadra = (valores) => {
  let count = 1;
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === prev) count++;
    else count = 1;
    if (count === 4) return valores[i];
    prev = valores[i];
  }
  return false;
};

export const verificaFullHouse = (valores) => {
  let count = 1;
  let max = 1;
  let prev = 0;
  const cartaTrinca = verificaTrinca(valores);
  const cartaDupla = verificaDupla(valores.filter((a) => a !== cartaTrinca));
  if (cartaTrinca && cartaDupla) return [cartaTrinca, cartaDupla];
  return false;
};

export const verificaTrinca = (valores) => {
  let count = 1;
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === prev) count++;
    else count = 1;
    if (count === 3) return valores[i];
    prev = valores[i];
  }
  return false;
};

export const verificaDupla = (valores) => {
  let count = 1;
  let prev = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] === prev) count++;
    else count = 1;
    if (count === 2) return valores[i];
    prev = valores[i];
  }
  return false;
};

export const verificaDoisPares = (valores) => {
  let count = 1;
  let max = 1;
  let prev = 0;
  const cartaDuplaUm = verificaDupla(valores);
  const cartaDuplaDois = verificaDupla(
    valores.filter((a) => a !== cartaDuplaUm)
  );
  if (cartaDuplaUm && cartaDuplaDois) return [cartaDuplaUm, cartaDuplaDois];
  return false;
};

export const verificaMao = (mao, mesa) => {
  const valores = organizaValores(mao, mesa);
  // STRAIGHT FLUSH 1
  if (verificaStraight(valores) && verificaFlush(valores)) return 1;
  // QUADRA 2
  if (verificaQuadra(valores)) return 2;
  // FULL HOUSE 3
  if (verificaFullHouse(valores)) return 3;
  // FLUSH 4
  const naipes = organizaNaipes(mao, mesa);
  if (verificaFlush(naipes)) return 4;
  // STRAIGHT 5
  if (verificaStraight(valores)) return 5;
  // TRINCA 6
  if (verificaTrinca(valores)) return 6;
  // DOIS PARES 7
  if (verificaDoisPares(valores)) return 7;
  // PAR 8
  if (verificaDupla(valores)) return 8;
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
