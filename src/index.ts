import Character from './Character';
import { PVP } from './Battle';

const Ryu = new Character('Ryu');
const Ken = new Character('Ken');

const fight = new PVP(Ryu, Ken);

console.log(fight.fight());