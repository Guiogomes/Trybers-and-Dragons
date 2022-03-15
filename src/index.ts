import Monster from './Monster';
import Character from './Character';
import { PVP, PVE } from './Battle';

const Ryu = new Character('');
const Ken = new Character('');
const Akuma = new Monster();

const fight = new PVE(Ryu, [Ken, Akuma, Ken, Akuma, Akuma, Akuma]);
const crossover = new PVP(Ryu, Ken);

console.log(fight.fight());
console.log(crossover.fight());
console.log(process.memoryUsage());
