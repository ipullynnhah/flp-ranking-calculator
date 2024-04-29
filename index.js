function getRankRatio(won, lost) {
  return won - lost;
}

function getRank(ratio) {
  if (ratio <= 10) return "Ferro";
  if (ratio <= 20) return "Bronze";
  if (ratio <= 50) return "Prata";
  if (ratio <= 80) return "Ouro";
  if (ratio <= 90) return "Diamante";
  if (ratio <= 100) return "Lendária";
  return "Imortal";
}

function logHeroRank({ name, won, lost }) {
  const rankRatio = getRankRatio(won, lost);
  const rank = getRank(rankRatio);
  console.log(
    `A heroína de nome ${name}, tem saldo de vitórias de ${rankRatio} e está no rank: ${rank}`
  );
}

const heroes = [
  { name: "Trickster", won: 34, lost: 28 },
  { name: "Stryke", won: 18, lost: 5 },
  { name: "Pixel", won: 79, lost: 31 },
  { name: "Bolt", won: 152, lost: 80 },
  { name: "Seraph", won: 179, lost: 93 },
  { name: "Nightshade", won: 152, lost: 58 },
  { name: "Nova", won: 121, lost: 1 }
];

for (let i = 0; i < heroes.length; i++) {
  logHeroRank(heroes[i]);
}
