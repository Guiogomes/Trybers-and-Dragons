import Monster from './Monster';
import Dragon from './Dragon';
import Character from './Character';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('');
const player2 = new Character('');
const player3 = new Character('');
const monster1 = new Monster();
const monster2 = new Dragon();
const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

for (let index = 1; index < 5; index += 1) player1.levelUp();

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => battle.fight());
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};